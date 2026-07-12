# Setup Git and Push to GitHub Automation Script
# Designed for Windows PowerShell

Clear-Host

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "          GITHUB REPOSITORY CREATION & PUSH TOOL          " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""

# 1. Check if Git is installed
$gitCheck = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCheck) {
    Write-Host "[!] Git is not installed on this system." -ForegroundColor Red
    Write-Host "Opening Git download page in your web browser..." -ForegroundColor Yellow
    Start-Process "https://git-scm.com/download/win"
    Write-Host "Please download, install Git, and then run this script again." -ForegroundColor Yellow
    Write-Host "Press any key to exit..."
    $null = [System.Console]::ReadKey($true)
    exit
}

Write-Host "[+] Git is installed! (Version: $((git --version).SubString(12)))" -ForegroundColor Green

# 2. Check Git config (Name & Email)
$gitName = git config --global user.name
$gitEmail = git config --global user.email

if (-not $gitName) {
    Write-Host ""
    Write-Host "[?] Git doesn't know your name yet." -ForegroundColor Yellow
    $gitName = Read-Host "Please enter your Name (e.g. John Doe)"
    while ([string]::IsNullOrWhiteSpace($gitName)) {
        $gitName = Read-Host "Name cannot be empty. Please enter your Name"
    }
    git config --global user.name $gitName.Trim()
    Write-Host "[+] Set Git user.name to '$gitName'" -ForegroundColor Green
} else {
    Write-Host "[+] Git profile Name: $gitName" -ForegroundColor Gray
}

if (-not $gitEmail) {
    Write-Host ""
    Write-Host "[?] Git doesn't know your email address yet." -ForegroundColor Yellow
    $gitEmail = Read-Host "Please enter your GitHub Email address"
    while ([string]::IsNullOrWhiteSpace($gitEmail) -or $gitEmail -notmatch '.+@.+\..+') {
        $gitEmail = Read-Host "Please enter a valid Email address"
    }
    git config --global user.email $gitEmail.Trim()
    Write-Host "[+] Set Git user.email to '$gitEmail'" -ForegroundColor Green
} else {
    Write-Host "[+] Git profile Email: $gitEmail" -ForegroundColor Gray
}

# 3. Initialize Git Repository
Write-Host ""
Write-Host "Initializing local Git repository..." -ForegroundColor Cyan
if (-not (Test-Path ".git")) {
    git init
    git branch -M main
    Write-Host "[+] Local Git repository initialized with 'main' branch." -ForegroundColor Green
} else {
    Write-Host "[+] Git repository already exists locally." -ForegroundColor Gray
}

# 4. Stage and commit files
Write-Host ""
Write-Host "Staging all project files..." -ForegroundColor Cyan
git add .
Write-Host "[+] All files staged." -ForegroundColor Green

$status = git status --porcelain
if (-not $status) {
    Write-Host "[+] No changes to commit (repository is clean)." -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "Committing project files..." -ForegroundColor Cyan
    git commit -m "Initial commit of Panchasheel web dev project"
    Write-Host "[+] Files successfully committed!" -ForegroundColor Green
}

# 5. Connect to GitHub
Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "          STEP 5: CREATING REPOSITORY ON GITHUB           " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Open your browser and log into GitHub (https://github.com)"
Write-Host "2. Go to: https://github.com/new to create a new repository."
Write-Host "3. Recommended Repository Name: panchasheel-web-dev"
Write-Host "4. CRITICAL: DO NOT add a README, .gitignore, or License online!"
Write-Host "   (We already have these configured locally)."
Write-Host "5. Click 'Create repository' at the bottom of the page."
Write-Host ""

$openBrowser = Read-Host "Would you like me to open the GitHub Create Repository page for you now? (Y/N)"
if ($openBrowser.Trim().ToUpper() -eq "Y" -or $openBrowser.Trim().ToUpper() -eq "YES") {
    Start-Process "https://github.com/new"
}

Write-Host ""
Write-Host "Once you have created the repository on GitHub, copy the repository link."
Write-Host "The URL should look like: https://github.com/your-username/panchasheel-web-dev.git"
Write-Host ""

$repoUrl = ""
while (-not ($repoUrl -match "^https://github\.com/[a-zA-Z0-9_\-]+/[a-zA-Z0-9_\-\.]+(\.git)?$")) {
    $repoUrl = Read-Host "Paste the GitHub repository URL here"
    $repoUrl = $repoUrl.Trim()
    if (-not ($repoUrl -match "^https://github\.com/[a-zA-Z0-9_\-]+/[a-zA-Z0-9_\-\.]+(\.git)?$")) {
        Write-Host "[!] Invalid GitHub HTTPS URL. It must start with 'https://github.com/'" -ForegroundColor Red
    }
}

# Add Remote Origin
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    git remote remove origin
}
git remote add origin $repoUrl
Write-Host "[+] Linked local repository to: $repoUrl" -ForegroundColor Green

# 6. Push to GitHub
Write-Host ""
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "              STEP 6: PUSHING FILES TO GITHUB             " -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "I am about to push your project files to GitHub." -ForegroundColor Yellow
Write-Host "NOTE: A standard Windows popup may appear asking you to sign in to GitHub." -ForegroundColor Yellow
Write-Host "Please sign in through that window to authorize the upload." -ForegroundColor Yellow
Write-Host ""
Read-Host "Press [Enter] to start the upload..."

Write-Host "Uploading files..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "🎉 SUCCESS! Your project has been pushed to GitHub! 🎉" -ForegroundColor Green
    Write-Host "==========================================================" -ForegroundColor Green
    Write-Host "You can view your repository at: $repoUrl" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "==========================================================" -ForegroundColor Red
    Write-Host "[!] Push failed. Please check the error messages above." -ForegroundColor Red
    Write-Host "If you encountered authentication issues, make sure you are logged in" -ForegroundColor Red
    Write-Host "with your browser when the Git Credential Manager prompts you." -ForegroundColor Red
    Write-Host "==========================================================" -ForegroundColor Red
}

Write-Host ""
Write-Host "Press any key to close this script..."
$null = [System.Console]::ReadKey($true)

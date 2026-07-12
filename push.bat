@echo off
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "push_to_github.ps1"
pause

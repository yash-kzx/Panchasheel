\# TECH STACK

\#\# Purpose

This document defines the technologies, coding standards, libraries, and implementation philosophy for this project.

Always prefer maintainability, performance, accessibility, and production-quality code over quick solutions.

\---

\# Framework

Use:

\- Next.js (latest stable App Router)  
\- React (latest stable)  
\- TypeScript

Avoid older Pages Router unless explicitly requested.

\---

\# Styling

Use:

\- Tailwind CSS

Create reusable utility classes where appropriate.

Avoid:

\- Inline styles  
\- CSS-in-JS  
\- Large custom CSS files  
\- Random utility class duplication

Prefer clean component-based styling.

\---

\# UI Components

Use:

\- shadcn/ui

Only use components that actually improve usability.

Do not import unnecessary components.

Customize components to match the project's design language.

Never leave default shadcn styling unchanged if it conflicts with the design.

\---

\# Icons

Use:

\- Lucide React

Avoid:

\- Emoji  
\- Random SVG downloads  
\- Multiple icon libraries

Use icons only when they improve comprehension.

\---

\# Animations

Use:

\- Framer Motion

Animation philosophy:

\- Subtle  
\- Professional  
\- Purposeful  
\- Smooth

Never animate simply because animation is possible.

Avoid:

\- Overly bouncy motion  
\- Excessive fades  
\- Constant floating elements  
\- Decorative scrolling effects

Respect prefers-reduced-motion.

\---

\# Images

Use Next.js Image component.

Always optimize images.

Use responsive sizing.

Avoid oversized assets.

Maintain correct aspect ratios.

Use meaningful alt text.

\---

\# Fonts

Use next/font.

Never use Google Fonts via CSS import.

Load fonts efficiently.

Use font-display: swap.

\---

\# Layout

Follow modern responsive practices.

Desktop first impression should feel premium.

Mobile experience should never feel like a reduced version of desktop.

Support at minimum:

\- 375px  
\- 768px  
\- 1024px  
\- 1440px

Avoid horizontal scrolling.

\---

\# Components

Create reusable components.

Examples:

\- Navbar  
\- Footer  
\- Hero  
\- Section Title  
\- Service Card  
\- Industry Card  
\- CTA  
\- Contact Form

Avoid giant page files.

\---

\# Folder Structure

Organize the project cleanly.

Example:

app/

components/

components/ui/

components/layout/

components/sections/

lib/

hooks/

public/

styles/

types/

Avoid dumping everything into one folder.

\---

\# Code Quality

Write clean, readable code.

Use:

\- meaningful variable names  
\- meaningful component names  
\- reusable logic  
\- TypeScript types  
\- interfaces where appropriate

Avoid:

\- duplicated code  
\- magic numbers  
\- unnecessary comments  
\- deeply nested JSX

\---

\# Performance

Prioritize:

\- lazy loading  
\- code splitting  
\- optimized images  
\- optimized fonts  
\- minimal JavaScript  
\- fast page loads

Every dependency must justify its existence.

\---

\# Accessibility

Always include:

\- semantic HTML  
\- keyboard navigation  
\- visible focus states  
\- accessible forms  
\- alt text  
\- aria labels where needed

Target WCAG AA compliance.

\---

\# SEO

Every page should include:

\- proper title  
\- meta description  
\- Open Graph metadata  
\- Twitter metadata  
\- canonical URL  
\- structured headings (H1-H6)

Use semantic HTML throughout.

\---

\# Forms

Forms should include:

\- client-side validation  
\- loading state  
\- success state  
\- error state

Do not leave forms visually incomplete.

\---

\# Buttons

Buttons should have:

\- hover state  
\- focus state  
\- disabled state  
\- loading state

Use consistent sizing throughout the project.

\---

\# Dark Mode

Do not implement dark mode unless explicitly requested.

Design the light theme exceptionally well first.

\---

\# Browser Support

Support all modern evergreen browsers.

Avoid outdated browser hacks.

\---

\# Dependencies

Prefer fewer high-quality dependencies over many small ones.

Before adding a package, ask:

"Does this package solve a real problem?"

If not, do not install it.

\---

\# Coding Philosophy

Every line of code should have a purpose.

Avoid clever code.

Prefer readable code over short code.

Prefer maintainability over micro-optimizations.

Build for a team that may maintain this project years from now.

\---

\# Final Checklist

Before considering any implementation complete, verify:

✓ Responsive on all target screen sizes

✓ Accessible

✓ Fast

✓ SEO friendly

✓ Production ready

✓ Type-safe

✓ No console errors

✓ No unused code

✓ No placeholder content

✓ Consistent spacing

✓ Consistent typography

✓ Consistent animations

✓ Matches CLAUDE.md design standards

✓ Matches PROJECT\_BRIEF.md goals

✓ Matches COMPANY\_PROFILE.md information

✓ Respects REFERENCES.md inspiration

If any of these fail, improve the implementation before moving on.


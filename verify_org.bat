@echo off
chcp 65001 >nul
setlocal

echo ============================================
echo  Forms Homepage - Organization Page Verify
echo ============================================
echo.

:: Step 1: Regenerate organization.html
echo [1/3] Generating organization.html...
node generate_org.js
if errorlevel 1 (
    echo ERROR: node generate_org.js failed.
    pause
    exit /b 1
)
echo.

:: Step 2: Basic file checks
echo [2/3] Checking generated file...
if not exist organization.html (
    echo ERROR: organization.html not found.
    pause
    exit /b 1
)

:: Check key sections are present
findstr /c:"sub-hero" organization.html >nul
if errorlevel 1 ( echo WARN: sub-hero section not found ) else ( echo OK   sub-hero section )

findstr /c:"breadcrumb-bar" organization.html >nul
if errorlevel 1 ( echo WARN: breadcrumb-bar not found ) else ( echo OK   breadcrumb-bar )

findstr /c:"org-stats-section" organization.html >nul
if errorlevel 1 ( echo WARN: org-stats-section not found ) else ( echo OK   org-stats-section )

findstr /c:"org-ceo-card" organization.html >nul
if errorlevel 1 ( echo WARN: org-ceo-card not found ) else ( echo OK   org-ceo-card )

findstr /c:"org-divisions-grid" organization.html >nul
if errorlevel 1 ( echo WARN: org-divisions-grid not found ) else ( echo OK   org-divisions-grid )

findstr /c:"org-dept-card--cyan" organization.html >nul
if errorlevel 1 ( echo WARN: cyan division not found ) else ( echo OK   cyan division )

findstr /c:"org-dept-card--warm" organization.html >nul
if errorlevel 1 ( echo WARN: warm division not found ) else ( echo OK   warm division )

findstr /c:"org-dept-card--purple" organization.html >nul
if errorlevel 1 ( echo WARN: purple division not found ) else ( echo OK   purple division )

findstr /c:"aria-expanded" organization.html >nul
if errorlevel 1 ( echo WARN: aria-expanded not found ) else ( echo OK   aria-expanded attributes )

findstr /c:"data-aos" organization.html >nul
if errorlevel 1 ( echo WARN: AOS animations not found ) else ( echo OK   AOS data-aos attributes )

findstr /c:"aos@2.3.4" organization.html >nul
if errorlevel 1 ( echo WARN: AOS library not linked ) else ( echo OK   AOS library linked )

findstr /c:"tech-tag" organization.html >nul
if errorlevel 1 ( echo WARN: tech-tags not found ) else ( echo OK   tech-tag chips )

echo.

:: Step 3: Start PHP server
echo [3/3] Starting PHP server at http://localhost:8080
echo.
echo  Open in browser: http://localhost:8080/organization.html
echo.
echo  Checklist to verify in browser:
echo    [ ] sub-hero + terminal visible
echo    [ ] breadcrumb: Home > About > Org
echo    [ ] 4 stat widgets displayed
echo    [ ] CEO card with cyan glow
echo    [ ] 4 division cards (cyan/warm/warm/purple)
echo    [ ] Click division -> teams expand
echo    [ ] Hover lift + accent glow on cards
echo    [ ] tech-tag chips inside teams
echo    [ ] AOS fade-up on scroll
echo    [ ] No console errors (F12)
echo    [ ] Mobile: resize to 768px -> all expand
echo.
echo  Press Ctrl+C to stop the server.
echo ============================================
echo.

php -S localhost:8080

endlocal

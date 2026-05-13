@echo off
chcp 65001 >nul
setlocal

echo ============================================
echo  Forms Homepage - Organization Section Verify
echo ============================================
echo.

:: Step 1: Patch #organization section into index.html
echo [1/3] Patching index.html #organization section...
node generate_org.js
if errorlevel 1 (
    echo ERROR: node generate_org.js failed.
    pause
    exit /b 1
)
echo.

:: Step 2: Basic checks on patched index.html
echo [2/3] Checking index.html for org section...
if not exist index.html (
    echo ERROR: index.html not found.
    pause
    exit /b 1
)

findstr /c:"ORG:START" index.html >nul
if errorlevel 1 ( echo WARN: ORG:START marker not found ) else ( echo OK   ORG:START marker )

findstr /c:"id=""organization""" index.html >nul
if errorlevel 1 ( echo WARN: #organization section not found ) else ( echo OK   #organization section )

findstr /c:"org-stats-section" index.html >nul
if errorlevel 1 ( echo WARN: org-stats-section not found ) else ( echo OK   org-stats-section )

findstr /c:"org-ceo-card" index.html >nul
if errorlevel 1 ( echo WARN: org-ceo-card not found ) else ( echo OK   org-ceo-card )

findstr /c:"org-divisions-grid" index.html >nul
if errorlevel 1 ( echo WARN: org-divisions-grid not found ) else ( echo OK   org-divisions-grid )

findstr /c:"org-dept-card--cyan" index.html >nul
if errorlevel 1 ( echo WARN: cyan division not found ) else ( echo OK   cyan division )

findstr /c:"org-dept-card--warm" index.html >nul
if errorlevel 1 ( echo WARN: warm division not found ) else ( echo OK   warm division )

findstr /c:"org-dept-card--purple" index.html >nul
if errorlevel 1 ( echo WARN: purple division not found ) else ( echo OK   purple division )

findstr /c:"href=""#organization""" index.html >nul
if errorlevel 1 ( echo WARN: #organization nav link not found ) else ( echo OK   nav link #organization )

findstr /c:"data-aos" index.html >nul
if errorlevel 1 ( echo WARN: AOS attributes not found ) else ( echo OK   AOS data-aos attributes )

findstr /c:"tech-tag" index.html >nul
if errorlevel 1 ( echo WARN: tech-tag chips not found ) else ( echo OK   tech-tag chips )

if exist organization.html (
    echo WARN: organization.html still exists - should be deleted
) else (
    echo OK   organization.html deleted
)

echo.

:: Step 3: Start Node server
echo [3/3] Starting server at http://localhost:8080
echo.
echo  Open in browser: http://localhost:8080
echo.
echo  Checklist to verify in browser:
echo    [ ] Nav: 조직도 클릭 -> 같은 페이지 내 부드러운 스크롤
echo    [ ] #organization 섹션이 회사소개와 프로세스 사이에 위치
echo    [ ] 4 stat widgets 표시 (4본부 / 13팀 / 20+ / Total)
echo    [ ] CEO 카드 cyan glow
echo    [ ] 4 division 카드 (cyan/warm/warm/purple)
echo    [ ] 본부 헤더 클릭 -> 팀 목록 펼침 (내부 클릭으로 닫히지 않음)
echo    [ ] hover lift + accent glow
echo    [ ] tech-tag 칩 표시
echo    [ ] AOS fade-up 스크롤 애니메이션
echo    [ ] 콘솔 에러 0 (F12)
echo    [ ] 모바일 768px 이하 -> 자동 펼침
echo    [ ] organization.html 직접 접근 -> 404
echo.
echo  Press Ctrl+C to stop the server.
echo ============================================
echo.

npx serve . -l 8080

endlocal

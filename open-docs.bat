@echo off
REM Quick Documentation Opener for Mie Newmind (Windows)
REM This script instantly opens the documentation portal in your default browser

setlocal enabledelayedexpansion

set DOC_PATH=dokumentasi\index.html

REM Check if file exists
if not exist "%DOC_PATH%" (
    echo.
    echo ❌ Error: Documentation file not found at %DOC_PATH%
    echo Make sure you're running this script from the project root directory
    echo.
    pause
    exit /b 1
)

REM Get absolute path
for /f "tokens=*" %%i in ('cd') do set CURRENT_DIR=%%i
set DOC_URL=file:///%CURRENT_DIR:\=/%/%DOC_PATH:\=/%

echo.
echo 📚 Membuka Dokumentasi Mie Newmind...
echo 🌐 URL: %DOC_URL%
echo.

REM Open in default browser
start %DOC_URL%

echo ✅ Portal dokumentasi dibuka di browser kamu!
echo.
echo 💡 Tips:
echo    - Tekan / untuk membuka search box
echo    - Klik kategori untuk filter dokumentasi
echo    - Gunakan Escape untuk menutup modal
echo.

timeout /t 2

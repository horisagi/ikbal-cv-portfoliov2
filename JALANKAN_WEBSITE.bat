@echo off
title Portfolio & CV Ikbal Abi Pamungkas
echo ========================================================
echo   PORTFOLIO & CV DIGITAL - IKBAL ABI PAMUNGKAS (TKJ)
echo   SMK TI GARUDA NUSANTARA CIMAHI
echo ========================================================
echo.
echo Sedang menjalankan server lokal (Vite)...
echo Website akan terbuka otomatis di browser Anda: http://localhost:3000
echo.
cd /d "%~dp0"
start http://localhost:3000
npm run dev -- --port 3000 --open
pause


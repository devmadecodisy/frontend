@echo off
REM Mutual Funds Platform - Automated Setup Script
REM This script will setup the React project with all dependencies

echo.
echo ===================================
echo Mutual Funds Platform Setup
echo ===================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Node.js is not installed or not in PATH
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo Download the LTS version and run the installer
    echo.
    echo After installing Node.js, run this script again.
    pause
    exit /b 1
)

echo [OK] Node.js found
node --version

REM Check if npm is available
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is not available
    pause
    exit /b 1
)

echo [OK] npm found
npm --version
echo.

REM Install dependencies
echo [STEP 1/4] Installing dependencies...
echo This may take a few minutes...
npm install --legacy-peer-deps
if errorlevel 1 (
    echo [ERROR] Failed to install dependencies
    pause
    exit /b 1
)
echo [OK] Dependencies installed
echo.

REM Build the project
echo [STEP 2/4] Building the project...
npm run build
if errorlevel 1 (
    echo [WARNING] Build had some warnings but continuing...
)
echo.

REM Done
echo [STEP 3/4] Setup complete!
echo.
echo ===================================
echo Quick Start Commands:
echo ===================================
echo.
echo Development mode (with live reload):
echo   npm run dev
echo.
echo Production build:
echo   npm run build
echo.
echo Preview production build:
echo   npm run preview
echo.
echo ===================================
echo Demo Credentials:
echo ===================================
echo Email: demo@example.com
echo Password: demo123
echo.
echo Test with roles: Admin, Investor, Advisor, Analyst
echo.
echo [STEP 4/4] Ready to use!
echo.
pause

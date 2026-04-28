# Mutual Funds Platform - PowerShell Setup Script
# Run this script AFTER installing Node.js

Write-Host "`n===================================`n" -ForegroundColor Cyan
Write-Host "Mutual Funds Platform Setup" -ForegroundColor Green
Write-Host "`n===================================`n" -ForegroundColor Cyan

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "[OK] Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] Node.js is not installed or not in PATH" -ForegroundColor Red
    Write-Host "`nPlease install Node.js from: https://nodejs.org/" -ForegroundColor Yellow
    Write-Host "Download the LTS version and run the installer`n" -ForegroundColor Yellow
    Read-Host "Press Enter after installing Node.js, then run this script again"
    exit
}

# Check if npm is available
try {
    $npmVersion = npm --version
    Write-Host "[OK] npm found: $npmVersion" -ForegroundColor Green
} catch {
    Write-Host "[ERROR] npm is not available" -ForegroundColor Red
    exit
}

Write-Host "`n"

# Install dependencies
Write-Host "[STEP 1/4] Installing dependencies..." -ForegroundColor Cyan
Write-Host "This may take 2-3 minutes..." -ForegroundColor Yellow
npm install --legacy-peer-deps

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[ERROR] Failed to install dependencies" -ForegroundColor Red
    exit
}
Write-Host "[OK] Dependencies installed`n" -ForegroundColor Green

# Build the project
Write-Host "[STEP 2/4] Building the project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "`n[WARNING] Build had some issues but continuing..." -ForegroundColor Yellow
}
Write-Host ""

# Summary
Write-Host "[STEP 3/4] Setup complete!`n" -ForegroundColor Green

Write-Host "===================================`n" -ForegroundColor Cyan
Write-Host "Quick Start Commands:" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "`n📝 Development mode (with live reload):" -ForegroundColor Yellow
Write-Host "   npm run dev`n" -ForegroundColor White

Write-Host "📦 Production build:" -ForegroundColor Yellow
Write-Host "   npm run build`n" -ForegroundColor White

Write-Host "👁️  Preview production build:" -ForegroundColor Yellow
Write-Host "   npm run preview`n" -ForegroundColor White

Write-Host "===================================`n" -ForegroundColor Cyan
Write-Host "Demo Credentials:" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Cyan
Write-Host "`n📧 Email: demo@example.com" -ForegroundColor Yellow
Write-Host "🔑 Password: demo123`n" -ForegroundColor Yellow

Write-Host "Test with roles: Admin, Investor, Advisor, Analyst`n" -ForegroundColor Cyan

Write-Host "===================================`n" -ForegroundColor Cyan
Write-Host "[STEP 4/4] Ready to use!" -ForegroundColor Green
Write-Host "`nRun: npm run dev`n" -ForegroundColor Cyan

Read-Host "Press Enter to exit"

# 🔴 REQUIRED: Install Node.js First

## Current Errors

All "Cannot find module" errors are because **Node.js is not installed**. Once you install Node.js, these errors will automatically disappear.

---

## ⚡ 5-Minute Setup

### Step 1: Download Node.js
- Visit: **https://nodejs.org/**
- Click: **Download LTS** (large green button)
- File size: ~150 MB

### Step 2: Install
- Run the installer
- Click "Next" on every screen
- Check "Automatically install tools"
- Click "Install"
- Take a coffee break ☕

### Step 3: Restart Computer
- **Very Important!** Restart your computer
- This adds Node.js to Windows PATH

### Step 4: Verify Installation
Open PowerShell (or Command Prompt) and type:
```
node -v
npm -v
```

You should see version numbers. If not, restart again.

### Step 5: Run Setup
Go to project folder and run:
```
npm install
npm run dev
```

**Done!** 🎉 App opens at http://localhost:3000

---

## 🆘 Still Getting Errors?

### Error: "npm: The term is not recognized"
**Solution:** Restart your computer

### Error: "Cannot find module 'react'"
**Solution:** Run `npm install` in project folder

### Still need help?
See full guide: `SETUP_GUIDE.md` in project folder

---

## ⏱️ Expected Duration

| Task | Time |
|------|------|
| Download Node.js | 5 min |
| Install Node.js | 5 min |
| Restart computer | 2 min |
| npm install | 3 min |
| npm run dev | 1 min |
| **Total** | **~16 minutes** |

---

**After these steps, everything will work perfectly!** ✨

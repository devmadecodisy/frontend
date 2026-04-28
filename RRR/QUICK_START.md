# 🎯 Quick Reference Card

## Installation Checklist

```
✅ STEP 1: Install Node.js
   → Download from: https://nodejs.org/
   → Choose: LTS version
   → Restart after installation

✅ STEP 2: Open PowerShell
   → Navigate to project folder:
     cd C:\Users\raj48\OneDrive\Desktop\RRR

✅ STEP 3: Install Dependencies
   → npm install
   → (wait 2-3 minutes)

✅ STEP 4: Start Development
   → npm run dev
   → Browser opens automatically at http://localhost:3000
```

---

## Essential Commands

```powershell
# After entering project folder:

npm install           # Install all dependencies
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production (creates 'dist' folder)
npm run preview      # Preview production build
npm cache clean      # Clear npm cache if issues occur
```

---

## Test Credentials

```
Email:    demo@example.com
Password: demo123

Roles to test:
  • Admin
  • Investor
  • Financial Advisor
  • Data Analyst
```

---

## Navigate Project

```
📁 RRR/
   📂 src/
      📂 components/        ← All UI components
      📂 styles/            ← All CSS files
      📂 data/              ← Mock data
      📄 App.tsx            ← Main app file
      📄 main.tsx           ← Entry point
   📄 package.json          ← Dependencies list
   📄 README.md             ← Full documentation
   📄 SETUP_GUIDE.md        ← Detailed setup guide
   📄 setup.bat/.ps1        ← Auto setup scripts
```

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| "npm not found" | Restart computer after Node.js install |
| "Cannot find module" | Run `npm install` in project folder |
| "Port 3000 in use" | `npm run dev -- --port 3001` |
| "Dependencies error" | `npm install --legacy-peer-deps` |
| Build failures | `npm cache clean --force` then `npm install` |

---

## File Locations

| File | Purpose |
|------|---------|
| `INSTALL_NODEJS.md` | Quick Node.js installation |
| `SETUP_GUIDE.md` | Complete setup documentation |
| `README.md` | Project overview |
| `setup.ps1` | Automated PowerShell setup |
| `setup.bat` | Automated CMD setup |

---

## Next Steps After Setup

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Run `npm run dev`
4. 🧪 Test with demo credentials
5. 🚀 Deploy to Vercel/Netlify when ready

---

## Deployment Ready

```powershell
# To deploy:
npm run build

# Then upload 'dist' folder to:
# - Vercel
# - Netlify
# - Render
# - GitHub Pages
```

---

## Support Resources

- Node.js Docs: https://nodejs.org/docs/
- React Docs: https://react.dev/
- Vite Docs: https://vitejs.dev/
- TypeScript Docs: https://www.typescriptlang.org/

---

**Remember:** All errors disappear once Node.js is installed! 🎉

# Deployment Guide

## ✅ Build Status
- Production build: **Ready** ✓
- Location: `./dist` folder
- File size: ~644 KB (optimized)

## 🚀 Where to Deploy?

### 1. **Vercel (Recommended - Easiest)**
```bash
npm install -g vercel
vercel
```
- Select project folder
- Configure: Framework = "Vite", Build command = "npm run build"
- Done! Auto-deploys on git push

### 2. **Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```
Or drag-drop `dist` folder on Netlify dashboard

### 3. **GitHub Pages**
```bash
# Change vite.config.ts base to: "/project-name/"
npm run build
```
Then push to GitHub and enable Pages in settings

### 4. **Traditional Hosting (Hostinger, Bluehost, etc.)**
1. Build: `npm run build`
2. Upload `dist` folder contents via FTP
3. Ensure `.htaccess` redirects all routes to `index.html`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{EXISTING_FILENAME} !-f
  RewriteCond %{EXISTING_FILENAME} !-d
  RewriteRule ^ index.html [QSA,L]
</IfModule>
```

### 5. **Docker (Advanced)**
```dockerfile
FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## ⚠️ Common Issues & Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| **Blank page** | Assets path wrong | Check base path in vite.config.ts |
| **Blank page** | React not rendering | Check browser console for JS errors |
| **Routes not working** | Server not rewriting to index.html | Add .htaccess or configure server |
| **CSS not loading** | Asset paths broken | Ensure base path matches deploy folder |
| **Images not showing** | Wrong image paths | Use relative paths from public folder |

## 🔧 Local Testing

```bash
# Dev mode (faster, with hot reload)
npm run dev

# Production preview (tests actual build)
npm run preview
```

Visit browser console (F12) to check for errors

## 📋 Pre-Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] No errors in `npm run build` output  
- [ ] `npm run preview` shows full page (not blank)
- [ ] Check browser console (F12) - no red errors
- [ ] Test all routes work locally
- [ ] Update API endpoints if backend is different

## 🌐 Production URLs

Once deployed, your app will be live at different URLs:
- Vercel: `https://yourapp.vercel.app`
- Netlify: `https://yourapp.netlify.app`
- GitHub Pages: `https://username.github.io/project-name`
- Custom: Your domain

---

**Still seeing blank page?**
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Check Network tab - all assets loading?
4. Share error message and hosting platform

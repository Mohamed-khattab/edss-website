# Troubleshooting Guide

## Server Starts Then Fails

If the Next.js dev server starts but then crashes, try these steps:

### 1. Clear All Caches
```bash
rm -rf .next
rm -rf node_modules/.cache
npm cache clean --force
```

### 2. Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### 3. Check for Port Conflicts
```bash
lsof -ti:3000 | xargs kill -9
```

### 4. Run with More Memory
```bash
NODE_OPTIONS='--max-old-space-size=4096' npm run dev
```

### 5. Check Node Version
```bash
node -v  # Should be 18.x or 20.x
```

### 6. Try Production Build
```bash
npm run build
npm start
```

### 7. Check for Specific Errors
Look at the terminal output when the server crashes. Common issues:
- Memory errors (SIGBUS)
- Port already in use
- Missing dependencies
- TypeScript errors
- Import path issues

### 8. Test with Minimal Setup
Temporarily simplify `app/page.tsx` to just return a div to see if a specific component is causing the crash.

## Fixed Issues

1. ✅ Updated `next-themes` from 0.3.0 to 0.4.6
2. ✅ Changed font from `Source_Sans_3` to `Inter`
3. ✅ Fixed `AnimatedCounter` to use native IntersectionObserver
4. ✅ Updated ThemeProvider types

## If Still Not Working

Please share:
1. The exact error message from terminal
2. Node.js version: `node -v`
3. npm version: `npm -v`
4. Full terminal output when running `npm run dev`

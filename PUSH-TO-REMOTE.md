# Push to Remote Repository

## Option 1: Using the Setup Script

If you have a remote repository URL, use the setup script:

```bash
./setup-remote.sh https://github.com/yourusername/edss-website.git
```

Or with SSH:
```bash
./setup-remote.sh git@github.com:yourusername/edss-website.git
```

## Option 2: Manual Setup

### Step 1: Add Remote Repository

**For GitHub:**
```bash
git remote add origin https://github.com/yourusername/edss-website.git
```

**For GitLab:**
```bash
git remote add origin https://gitlab.com/yourusername/edss-website.git
```

**For Bitbucket:**
```bash
git remote add origin https://bitbucket.org/yourusername/edss-website.git
```

**Using SSH (recommended):**
```bash
git remote add origin git@github.com:yourusername/edss-website.git
```

### Step 2: Verify Remote
```bash
git remote -v
```

### Step 3: Push to Remote
```bash
git push -u origin main
```

## Create a New Repository on GitHub

If you don't have a remote repository yet:

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name it `edss-website` (or any name you prefer)
4. **Don't** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"
6. Copy the repository URL
7. Run the setup script or manual commands above

## Troubleshooting

### If remote already exists:
```bash
git remote set-url origin <new-url>
```

### To change remote URL:
```bash
git remote remove origin
git remote add origin <new-url>
```

### To see current remotes:
```bash
git remote -v
```

# Deploy to Vercel

## Quick Deploy

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite and deploy!

## Manual Deploy Steps

### Option 1: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel
```

### Option 2: Using GitHub Integration

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```
3. Go to vercel.com and import your repository

## Build Command
```bash
npm run build
```

## Preview Locally
```bash
npm run preview
```

Your portfolio will be live at: `https://your-project-name.vercel.app`

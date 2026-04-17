# 🚀 Git & GitHub Guide for Beginners

A complete step-by-step guide to understand and use Git for version control.

---

## Table of Contents
1. [What is Git?](#what-is-git)
2. [Initial Setup](#initial-setup)
3. [Daily Workflow](#daily-workflow)
4. [Common Commands](#common-commands)
5. [Pushing to GitHub](#pushing-to-github)
6. [Troubleshooting](#troubleshooting)

---

## What is Git?

**Git** = A tool that tracks changes to your code
**GitHub** = A website where you store your Git projects online

Think of it like:
- **Git** = Save feature on your computer
- **GitHub** = Cloud backup

---

## Initial Setup (One Time Only)

### Step 1: Check if Git is Installed
```
git --version
```
You should see: `git version 2.x.x`

### Step 2: Set Your Name and Email
```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Step 3: Create a GitHub Account
1. Go to **github.com**
2. Sign up with email
3. Verify your email

### Step 4: Create a Repository on GitHub
1. Log in to GitHub
2. Click **+** icon (top right) → "New repository"
3. Name: `seattle-hiking-trails`
4. Choose: **Public**
5. Click "Create repository"

### Step 5: Connect Your Local Folder to GitHub
Navigate to your project folder:
```
cd /Users/hana/Desktop/Cloud/Frontend
```

Initialize Git:
```
git init
```

Add your GitHub repository:
```
git remote add origin https://github.com/YOUR-USERNAME/seattle-hiking-trails.git
```
(Replace `YOUR-USERNAME` with your actual GitHub username)

Verify it worked:
```
git remote -v
```

---

## Daily Workflow

This is what you do **every time you make changes**:

### Step 1: Check What Changed
```
git status
```
You'll see files that changed (shown in red)

### Step 2: Add Your Changes to Staging Area
```
git add .
```
(The `.` means "all changed files")

Check what's staged:
```
git status
```
Now files should be green

### Step 3: Commit Your Changes
```
git commit -m "Brief description of what changed"
```

**Good commit messages:**
- ✅ `"Add header styling"`
- ✅ `"Fix favorite button hover effect"`
- ✅ `"Add 12 hiking trails to HTML"`
- ❌ `"Fixed stuff"`
- ❌ `"Updates"`

### Step 4: Push to GitHub
```
git push
```

First time only, GitHub might ask for:
- Username: `your-github-username`
- Password: `your-github-personal-access-token` (not your password!)

---

## Common Commands

### View Commit History
```
git log
```
Shows all commits (press `q` to exit)

### See Changes in a File
```
git diff filename.css
```

### Undo Last Commit (Keep Changes)
```
git reset --soft HEAD~1
```

### Undo Last Commit (Delete Changes)
```
git reset --hard HEAD~1
```
⚠️ Warning: This deletes changes!

### Check Current Branch
```
git branch
```

### Create a New Branch
```
git checkout -b feature-name
```

### Switch Branches
```
git checkout main
```

---

## Pushing to GitHub (Step by Step)

### First Time Push
```
git add .
git commit -m "Initial commit: Add HTML structure and CSS"
git branch -M main
git push -u origin main
```

### Every Other Push
```
git add .
git commit -m "Your message here"
git push
```

---

## Example Workflow for Our Project

### After Adding CSS:
```
git add .
git commit -m "Add CSS styling for header and cards"
git push
```

### After Adding JavaScript:
```
git add .
git commit -m "Add JavaScript for filtering and favorites"
git push
```

### After Small Bug Fix:
```
git add .
git commit -m "Fix card hover animation timing"
git push
```

---

## Troubleshooting

### Error: "Repository not found"
**Problem:** Wrong URL or repository doesn't exist on GitHub

**Solution:**
1. Check the repository exists on GitHub
2. Fix the URL:
```
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/seattle-hiking-trails.git
```

### Error: "No changes added to commit"
**Problem:** Forgot to run `git add .`

**Solution:**
```
git add .
git commit -m "Your message"
```

### Error: "Please tell me who you are"
**Problem:** Git doesn't know your name/email

**Solution:**
```
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Need to Pull Latest Changes
If someone else made changes on GitHub:
```
git pull
```

### Forgot Your Commit Message
View what you were about to commit:
```
git diff --cached
```

---

## Best Practices

✅ **DO:**
- Commit often (every 30 minutes or when you complete a feature)
- Write clear commit messages
- Push regularly to keep GitHub up to date
- Pull before starting work

❌ **DON'T:**
- Commit huge changes all at once
- Use vague messages like "Fix" or "Updates"
- Leave uncommitted changes for days
- Push code that breaks the project

---

## Quick Reference Card

```
# Check status
git status

# Stage changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push

# View history
git log

# Switch branches
git checkout branch-name
```

---

## Need Help?

1. **GitHub Documentation:** github.com/features/actions/learn-git
2. **Git Commands:** git-scm.com/doc
3. **Visual Guide:** learngitbranching.js.org

---

## Your Project Progress

Track your commits here:

```
commit 1: Initial HTML structure with 12 hiking trails
commit 2: Add CSS styling and responsive design
commit 3: Add JavaScript filtering and favorites
commit 4: Add search functionality
commit 5: Bug fixes and optimization
```

Update this as you go! 🚀

# Anitha's Vibe Coding Portfolio

**From Scattered Ideas to Structured Learning: AI as a Pedagogical Design Partner in Mathematics Education**

A portfolio website showcasing six weeks of vibe coding projects, focusing on AI-assisted math game development.

---

## 📋 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Adding Your Content](#adding-your-content)
- [Deployment to Netlify](#deployment-to-netlify)
- [Customization Guide](#customization-guide)
- [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

This portfolio demonstrates:
- **3 Featured Projects**: Interactive math learning games (Weeks 1, 5, 6)
- **Position Statement**: AI as thought partner for educators
- **Critical Reflection**: Connecting work to course readings
- **Visual Storytelling**: Minimal text, maximum impact

**Technologies**: HTML5, CSS3, Vanilla JavaScript (no frameworks needed!)

---

## ✨ Features

### Interactive Elements
- ✅ Smooth scroll navigation
- ✅ Scroll-triggered fade-in animations
- ✅ Project card hover effects
- ✅ Full-screen project modals
- ✅ Mobile-responsive design

### Content Sections
1. **Hero**: Eye-catching introduction
2. **Position**: Visual narrative of your transformation
3. **Projects**: Three clickable project showcases
4. **Reflection**: Timeline, insights, reading connections
5. **Call to Action**: For fellow educators

---

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling
├── script.js           # Interactivity
├── README.md           # This file
└── images/            # Your screenshots (TO ADD)
    ├── week1-preview.jpg
    ├── week1-full.jpg
    ├── week5-preview.jpg
    ├── week5-full.jpg
    ├── week6-preview.jpg
    └── week6-full.jpg
```

---

## 🚀 Setup Instructions

### Step 1: Download Files
You have three files:
- `index.html`
- `styles.css`
- `script.js`

### Step 2: Create Images Folder
1. In the same folder as your HTML file, create a folder called `images`
2. This is where you'll add your screenshots

### Step 3: Test Locally
1. Double-click `index.html` to open in browser
2. Or use a local server (recommended):
   ```bash
   # If you have Python installed:
   python -m http.server 8000
   # Then visit: http://localhost:8000
   ```

---

## 📸 Adding Your Content

### Required Images

You need 6 images total (3 preview + 3 full):

#### **Week 1: Mathematicians Interactive Webpage**
- `week1-preview.jpg` - Card thumbnail (recommended: 800x500px)
- `week1-full.jpg` - Modal full view (recommended: 1200x750px)

#### **Week 5: Integer Matching Space Game**
- `week5-preview.jpg` - Card thumbnail (800x500px)
- `week5-full.jpg` - Modal full view (1200x750px)

#### **Week 6: Prime Numbers Space Shooter**
- `week6-preview.jpg` - Card thumbnail (800x500px)
- `week6-full.jpg` - Modal full view (1200x750px)

### Image Tips
- **Format**: JPG or PNG
- **Quality**: Balance file size and quality (aim for <500KB per image)
- **Dimensions**: Follow recommendations above for best results
- **Content**: Show your games in action! GIFs work great too.

### Adding Game Links

In `index.html`, find these placeholders:

```html
<!-- Week 5 Modal -->
<a href="YOUR_WEEK5_GAME_LINK" target="_blank" class="play-game-btn">🎮 Play the Game</a>

<!-- Week 6 Modal -->
<a href="YOUR_WEEK6_GAME_LINK" target="_blank" class="play-game-btn">🎮 Play the Game</a>
```

Replace `YOUR_WEEK5_GAME_LINK` and `YOUR_WEEK6_GAME_LINK` with your deployed game URLs.

---

## 🌐 Deployment to Netlify

### Option 1: Drag & Drop (Easiest!)

1. **Prepare Your Folder**
   - Make sure all files are in one folder:
     ```
     portfolio/
     ├── index.html
     ├── styles.css
     ├── script.js
     └── images/
         └── (all your images)
     ```

2. **Go to Netlify**
   - Visit: https://app.netlify.com/drop
   - Or sign in and click "Add new site" → "Deploy manually"

3. **Drag & Drop**
   - Drag your entire `portfolio` folder to the upload area
   - Wait ~30 seconds for deployment
   - You'll get a URL like: `https://random-name-12345.netlify.app`

4. **Custom Domain (Optional)**
   - Click "Domain settings"
   - Change site name to: `anitha-vibe-coding` or similar
   - New URL: `https://anitha-vibe-coding.netlify.app`

### Option 2: GitHub + Netlify (Recommended for Updates)

1. **Create GitHub Repo**
   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/vibe-coding-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - In Netlify, click "Add new site" → "Import an existing project"
   - Choose GitHub
   - Select your repository
   - Click "Deploy site"

3. **Future Updates**
   - Just commit and push to GitHub
   - Netlify auto-deploys!

---

## 🎨 Customization Guide

### Colors

In `styles.css`, find the `:root` section:

```css
:root {
    --primary-blue: #4A90E2;      /* Main blue color */
    --accent-orange: #FF8C42;     /* Orange highlights */
    --text-dark: #2C3E50;         /* Dark text */
    /* Change these to your preferred colors! */
}
```

### Fonts

Current fonts:
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (clean sans-serif)

To change, update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

Then update CSS:
```css
--font-display: 'Your Heading Font', serif;
--font-primary: 'Your Body Font', sans-serif;
```

### Text Content

All text is in `index.html`. Search for:
- `hero-title` - Main title
- `position-quote` - Your position statement
- `modal-body` - Project descriptions

Edit directly in HTML!

### GitHub Link

In footer, update:
```html
<a href="https://github.com/Anitha-76/EdM-Math-Learning" target="_blank">
```

---

## 🐛 Troubleshooting

### Images Not Showing?
**Problem**: Broken image icons
**Solution**: 
- Check spelling: `week1-preview.jpg` (lowercase, no spaces)
- Verify images are in `images/` folder
- Check file extensions (.jpg vs .jpeg vs .png)

### Modals Not Opening?
**Problem**: Clicking project cards does nothing
**Solution**:
- Make sure `script.js` is loaded
- Check browser console for errors (F12)
- Verify JavaScript is enabled

### Layout Broken on Mobile?
**Problem**: Elements overlap or too small
**Solution**:
- CSS includes responsive breakpoints
- Test with Chrome DevTools mobile emulator
- If issues persist, adjust media queries in CSS

### Smooth Scroll Not Working?
**Problem**: Navigation jumps instead of scrolls
**Solution**:
- Ensure IDs match: `href="#projects"` → `id="projects"`
- Check JavaScript is loading
- Some older browsers may not support smooth scroll

---

## 📚 Resources

### Learning More
- **HTML/CSS**: https://developer.mozilla.org/
- **Netlify Docs**: https://docs.netlify.com/
- **Web Design**: https://www.smashingmagazine.com/

### Getting Help
1. Check browser console (F12) for errors
2. Validate HTML: https://validator.w3.org/
3. Validate CSS: https://jigsaw.w3.org/css-validator/

---

## 📝 Checklist Before Deploying

- [ ] All 6 images added to `images/` folder
- [ ] Week 5 game link updated in HTML
- [ ] Week 6 game link updated in HTML
- [ ] GitHub repository link updated in footer
- [ ] Tested on desktop browser
- [ ] Tested on mobile (or DevTools mobile view)
- [ ] All modals open and close properly
- [ ] Navigation links work
- [ ] Animations look smooth

---

## 🎓 Course Information

**Course**: EDU T564A - Vibe Coding  
**Institution**: Harvard Graduate School of Education  
**Semester**: Fall 2024/Spring 2025

---

## 📄 License

This portfolio is created for educational purposes.

---

## 👋 Contact

**Anitha**  
Harvard Graduate School of Education  
GitHub: [@Anitha-76](https://github.com/Anitha-76)

---

## 🙏 Acknowledgments

Built with inspiration from:
- Sample portfolios from T564A course
- Course readings: Licklider, Wiener, Crawford, Turing
- Six weeks of vibe coding experimentation

**Special thanks** to course instructors and fellow students who made this journey possible!

---

## ⏭️ Next Steps

1. ✅ Add your screenshots
2. ✅ Update game links
3. ✅ Test locally
4. ✅ Deploy to Netlify
5. ✅ Share with course instructors
6. 🎉 Celebrate!

---

*Last updated: November 2024*

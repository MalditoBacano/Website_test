# Integration Pathways - Website

**Automate what slows you down**

A modern, minimal website for Integration Pathways - a workflow automation service for small businesses.

## 🚀 Features

- **Modern Design**: Clean, minimal design inspired by Notion and Google Material 3 Expressive
- **Purple Accent Theme**: Google Gemini-style purple color palette
- **Responsive**: Desktop-first design that works beautifully on all devices
- **Accessible**: Semantic HTML, keyboard navigation, WCAG best practices
- **Performance Optimized**: Lightweight, fast-loading pages
- **SEO Ready**: Proper meta tags and semantic structure

## 📁 Project Structure

```
Website_test/
├── index.html              # Home page
├── demo.html               # Workflow demos showcase
├── about.html              # About company page
├── contact.html            # Contact form & calendar placeholder
├── assets/
│   ├── css/
│   │   └── styles.css      # Custom styles & animations
│   └── js/
│       └── main.js         # Navigation & interactions
└── README.md               # This file
```

## 🛠️ Tech Stack

- **HTML5**: Semantic, accessible markup
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Vanilla JavaScript**: No dependencies, pure JS
- **Google Fonts**: Inter font family
- **Netlify Forms**: Contact form handling (when deployed)

## 🎨 Design System

### Colors

- **Primary Purple**: `#9333ea` (purple-600)
- **Hover State**: `#7e22ce` (purple-700)
- **Light Accents**: `#e9d5ff` (purple-200)
- **Background**: White with purple-tinted gradients

### Typography

- **Font Family**: Inter (Google Fonts)
- **Hero Heading**: 5xl - 7xl (responsive)
- **Section Headings**: 4xl
- **Body Text**: lg - xl

### Components

- Rounded corners (lg - 2xl)
- Subtle shadows with hover effects
- Smooth transitions (0.3s ease)
- Purple accent buttons
- Card-based layouts

## 🚢 Deployment

### Option 1: Netlify (Recommended)

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin claude/website-design-planning-P6W2g
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `/`
   - Click "Deploy site"

3. **Enable Netlify Forms**
   - Forms are already configured with `netlify` attribute
   - They will work automatically once deployed to Netlify
   - View submissions in Netlify Dashboard → Forms

4. **Custom Domain** (Optional)
   - Go to Domain settings in Netlify
   - Add your custom domain
   - Update DNS records as instructed

### Option 2: Vercel

1. **Push to Git Repository** (same as above)

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your Git repository
   - Framework Preset: Other
   - Root Directory: `./`
   - Click "Deploy"

3. **Contact Form**
   - For Vercel, you'll need to set up form handling separately
   - Options: Formspree, Web3Forms, or custom API route

### Option 3: GitHub Pages

1. **Push to Git Repository**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → / (root)
   - Click Save

3. **Access Your Site**
   - URL: `https://yourusername.github.io/repository-name`

4. **Note**: Forms won't work on GitHub Pages without a backend service like Formspree

## 🔧 Local Development

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd Website_test
   ```

2. **Open in Browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:

   **Using Python:**
   ```bash
   python -m http.server 8000
   ```
   Then visit: `http://localhost:8000`

   **Using Node.js (npx):**
   ```bash
   npx serve
   ```

   **Using VS Code:**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## ✏️ Customization

### Update Company Info

1. **Logo**: Replace text logo in navigation with image
   ```html
   <!-- In all HTML files, find: -->
   <a href="index.html" class="text-xl font-semibold text-gray-900">
       Integration <span class="text-primary-600">Pathways</span>
   </a>
   <!-- Replace with: -->
   <a href="index.html">
       <img src="assets/images/logo.png" alt="Integration Pathways" class="h-8">
   </a>
   ```

2. **Contact Email**: Update email in `contact.html`
   ```html
   hello@integrationpathways.com → your-email@domain.com
   ```

3. **Workflow Examples**: Edit demo cards in `demo.html`

4. **Copy/Content**: All text is placeholder - update to match your brand voice

### Add Calendar Integration

Replace the calendar placeholder in `contact.html`:

```html
<!-- Find this section in contact.html -->
<div class="bg-white rounded-xl border-2 border-dashed border-primary-300 p-12 text-center">
    <!-- Calendar placeholder content -->
</div>

<!-- Replace with Calendly embed: -->
<div class="calendly-embed">
    <!-- Calendly inline widget begin -->
    <div class="calendly-inline-widget" data-url="https://calendly.com/your-link" style="min-width:320px;height:630px;"></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    <!-- Calendly inline widget end -->
</div>
```

### Change Colors

Edit the Tailwind config in each HTML file:

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    // Change these values
                    600: '#9333ea',
                    700: '#7e22ce',
                    // etc.
                }
            }
        }
    }
}
```

## 📱 Features by Page

### Home Page (`index.html`)
- Hero section with slogan
- Service overview
- Featured workflow showcase
- Two product cards (One-time vs Subscription)
- Multiple CTAs to book consultation

### Demo Page (`demo.html`)
- Three workflow examples:
  1. Multi-Platform Social Media Publisher
  2. CRM to Spreadsheet Sync
  3. Email to Task Manager
- Visual representations
- Time-saved metrics
- "How it works" explanations

### About Page (`about.html`)
- Company story
- Why automation matters for small businesses
- How we're different (4 key points)
- Impact statistics
- Trust-building content

### Contact Page (`contact.html`)
- Contact form (Netlify-ready)
- Calendar integration placeholder
- What to expect section
- Other contact methods
- Quick FAQ preview

## 🎯 SEO Optimization

To improve SEO, add these to each page:

```html
<head>
    <!-- Page-specific meta tags -->
    <meta name="description" content="Your page description here">
    <meta name="keywords" content="automation, workflow, small business">

    <!-- Open Graph -->
    <meta property="og:title" content="Integration Pathways">
    <meta property="og:description" content="Automate what slows you down">
    <meta property="og:image" content="url-to-preview-image">
    <meta property="og:url" content="https://yoursite.com">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
</head>
```

## 🐛 Troubleshooting

**Mobile menu not working?**
- Check browser console for JavaScript errors
- Ensure `main.js` is loading correctly

**Forms not submitting?**
- Netlify forms only work on Netlify hosting
- For other hosts, use Formspree or similar service

**Tailwind styles not applying?**
- Ensure CDN link is present in `<head>`
- Check browser console for loading errors

## 📊 Performance Tips

1. **Add images**: Use WebP format for better compression
2. **Lazy loading**: Add `loading="lazy"` to images
3. **Minify**: Minify CSS/JS for production
4. **CDN**: Consider self-hosting Tailwind for production

## 🔒 Security

- No sensitive data stored in frontend
- Forms use POST method
- Input validation on client side
- Server-side validation recommended when integrating backend

## 📄 License

All rights reserved © 2026 Integration Pathways

## 🤝 Support

For questions or support, contact: hello@integrationpathways.com

---

**Built with ❤️ for small business automation**

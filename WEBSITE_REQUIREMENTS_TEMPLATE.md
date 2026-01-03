# Website Requirements Template

Use this prompt with Claude Code to build a website with the same requirements but different styling.

---

## Prompt for Claude Code

You are a senior web designer + frontend engineer. I need you to build a complete MVP website based on the following requirements:

### 1. Purpose & Goals
- **Company Name**: Integration Pathways
- **Slogan**: "Automate what slows you down"
- **Primary Purpose**: Sell automation services (both one-time setup and subscription-based)
- **Main Action**: Book a consultation
- **Secondary Goal**: Showcase workflow automation examples

### 2. Target Audience
- **Primary Audience**: Small business owners
- **Device Priority**: Desktop-first (most users will view on desktop)
- **Technical Level**: Non-technical users

### 3. Site Structure & Pages

**Required Pages**:
1. **Home (index.html)**
   - Hero section with company slogan and main CTA
   - Brief overview of services
   - Featured workflow example
   - Product tiers (one-time vs subscription)
   - Social proof or benefits section

2. **Demo (demo.html)**
   - Showcase 3 detailed workflow examples:
     - Social Media Publisher (Instagram, LinkedIn, Twitter)
     - CRM Sync (contacts, deals, activities)
     - Email to Task Automation
   - Each workflow should show: trigger → process → result
   - Include visual flow indicators

3. **About (about.html)**
   - Company story
   - Why automation matters
   - How we're different from competitors
   - Impact statistics or key differentiators

4. **Contact (contact.html)**
   - Contact form with fields: name, email, company, message
   - Embedded calendar for booking consultations (placeholder for now)
   - Company contact information

**Navigation**: Include links to all pages in header navigation with mobile responsive menu

### 4. Content Guidelines

**Key Messages**:
- Automation saves time and reduces errors
- Focus on small business pain points
- Emphasize ease of implementation
- Show real-world workflow examples
- Make booking consultation the primary CTA

**Workflow Examples to Include**:
1. Social Media Publisher: Post content to Instagram, LinkedIn, and Twitter simultaneously
2. CRM Sync: Automatically sync contacts, deals, and activities
3. Email to Task: Convert emails into actionable tasks automatically

**Product Tiers**:
- One-time setup: Custom automation built for specific needs
- Subscription: Ongoing automation management and support

### 5. Technical Requirements

**Tech Stack**:
- Plain HTML5, CSS3, JavaScript (beginner-friendly)
- Use Tailwind CSS via CDN for rapid styling
- Vanilla JavaScript (no frameworks)
- Responsive design (desktop-first, but mobile-friendly)
- Forms: Use Netlify Forms for contact form handling

**Features to Implement**:
- Smooth scrolling navigation
- Mobile hamburger menu
- Form validation
- Scroll animations (fade-in on scroll)
- Active navigation highlighting
- Accessibility considerations (ARIA labels, keyboard navigation)
- SEO-friendly semantic HTML

**File Structure**:
```
/
├── index.html
├── demo.html
├── about.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── README.md
```

### 6. Style & Brand

**[INTENTIONALLY LEFT BLANK - CUSTOMIZE THIS SECTION]**

Add your desired:
- Color scheme
- Typography choices
- Visual effects (gradients, shadows, animations)
- Background treatment
- Spacing and layout preferences
- Interactive elements style
- Any specific design inspirations or reference URLs

### 7. Scope & Deliverables

**MVP Scope**:
- Build all 4 pages with complete content
- Implement all interactive features
- Ensure mobile responsiveness
- Include placeholder for calendar integration
- Set up Netlify Forms
- Create README with deployment instructions

**Out of Scope for MVP**:
- Actual calendar integration (use placeholder)
- Backend authentication
- Payment processing
- Blog/CMS
- Analytics integration

### 8. Development Approach

- Build in "YOLO mode" - proceed with implementation without asking for approval at each step
- Use best practices for accessibility and SEO
- Optimize for performance
- Include comments in code for maintainability
- Provide clear README with setup and deployment instructions

---

## Additional Notes

- All code should be production-ready
- Include meta tags for SEO
- Ensure cross-browser compatibility
- Test all interactive elements
- Forms should have proper validation and user feedback
- Include loading states where appropriate

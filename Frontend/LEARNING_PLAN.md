# Travel & Hiking Inspiration Page - Learning Plan

## Why Build This Project?

This project teaches **separation of concerns** — the core principle of modern web development:
- **HTML** defines WHAT content exists (structure)
- **CSS** defines HOW it looks (presentation)
- **JavaScript** defines WHAT IT DOES (behavior)

By building in this order, you'll understand why this separation matters and how each layer depends on the previous one.

---

## Phase 1: HTML Structure (Content Layer)

### Why Start with HTML?
HTML is the foundation. A website works without CSS and JavaScript, but not without HTML structure. You can't style what doesn't exist, and you can't add interactivity to nothing.

### What We're Learning
- **Semantic HTML**: Using meaningful tags (`<header>`, `<main>`, `<article>`) instead of just `<div>` everywhere
- **Document Flow**: Understanding how browsers read HTML from top to bottom
- **Accessibility**: Building a structure that works for everyone (screen readers, keyboards)
- **Content Organization**: How to structure data (like hiking destinations) in repeatable patterns

### What We'll Build
```
index.html
├── Header (navigation, logo, title)
├── Main Content
│   ├── Filter Section (difficulty, region, etc.)
│   └── Destination Cards Grid
│       ├── Card 1 (image, title, difficulty, description)
│       ├── Card 2
│       └── Card 3...
└── Footer
```

### Key Decisions
- Each hiking destination is a **card** — a reusable component
- Cards have consistent data: image, title, location, difficulty, description, rating
- We'll hardcode ~6-8 sample destinations in HTML first (data persistence comes later with JS)
- Use semantic tags: `<article>` for each card (better than `<div>`)

### Why This Approach?
Once we have clean HTML, styling becomes predictable. CSS works on elements, so we need elements to style first. This also makes JavaScript easier — we know exactly what to interact with.

---

## Phase 2: CSS Styling (Presentation Layer)

### Why Style After Structure?
CSS targets HTML elements. If we styled before having HTML, we'd be guessing at the structure. Now we can see what we have and style it meaningfully.

### What We're Learning
- **Layout Systems**: Flexbox (1D layouts) and Grid (2D layouts) — modern alternatives to floats
- **Responsive Design**: Making sites work on mobile, tablet, desktop using media queries
- **Visual Hierarchy**: Using size, color, contrast to guide user attention
- **Component Styling**: Creating reusable card styles, buttons, consistent spacing
- **The Cascade**: How CSS inheritance and specificity work

### What We'll Build
```
style.css
├── Reset / Base Styles (fonts, colors, spacing defaults)
├── Layout Styles
│   ├── Header & Navigation
│   ├── Card Grid (flexbox or grid)
│   └── Footer
├── Component Styles
│   ├── Card styling (shadows, hover effects, spacing)
│   ├── Button styling (filters, favorites)
│   └── Filter section
└── Responsive Breakpoints
    ├── Mobile (< 768px)
    ├── Tablet (768px - 1024px)
    └── Desktop (> 1024px)
```

### Key Decisions
- **Flexbox for cards**: Wraps naturally, great for responsive grids
- **Mobile-first approach**: Start with mobile styles, add tablet/desktop enhancements
- **Reusable classes**: `.card`, `.button`, `.filter` — not `.card1`, `.card2`
- **CSS variables for colors/spacing**: Makes it easy to change themes

### Why This Approach?
By starting with HTML and adding CSS, you see how styling affects content. You understand that CSS doesn't add functionality — it just makes things look good. This teaches the separation of concerns principle.

---

## Phase 3: JavaScript Interactivity (Behavior Layer)

### Why Add JavaScript Last?
JavaScript makes things *interactive*, but the site already works. Users can see content and it looks good. Now we add actions like filtering, favoriting, and animations.

### What We're Learning
- **DOM Manipulation**: Selecting elements, changing their content/classes/attributes
- **Event Handling**: Responding to clicks, hovering, scrolling
- **Data Management**: Storing favorite destinations and filter state
- **Logic**: If-else statements, loops, array methods (filter, map, find)
- **Local Storage**: Persisting data in the browser so favorites stay when users refresh

### What We'll Build
```
script.js
├── Initialize (load favorites from localStorage)
├── Event Listeners
│   ├── Filter buttons (difficulty, region)
│   ├── Favorite buttons (toggle, save to localStorage)
│   ├── Card clicks (show detail view)
│   └── Search input (filter by name)
└── Functions
    ├── filterDestinations() — show/hide cards based on criteria
    ├── toggleFavorite() — add/remove from favorites
    ├── renderCards() — update card display
    └── saveFavorites() — persist to localStorage
```

### Key Decisions
- **Vanilla JavaScript**: No libraries yet — learn the fundamentals first
- **Event delegation**: One listener on card container, not individual cards
- **Unobtrusive JavaScript**: Site works without JS, enhanced with JS
- **localStorage**: Favorites persist between sessions

### Why This Approach?
You learn that JavaScript *responds* to user actions. It doesn't create the site structure — HTML does. It doesn't style it — CSS does. It just makes it interactive. This reinforces the three-layer model.

---

## The Learning Journey

### Step-by-Step Progression

**Step 1: Build HTML (Understanding Content)**
- Create structure without worrying about looks
- See how content naturally flows
- Learn semantic tags and what they mean
- Result: A plain-looking but structured page

**Step 2: Style with CSS (Understanding Presentation)**
- See your HTML transform visually
- Learn how layout systems work
- Understand responsive design
- Result: A beautiful site that works on all devices

**Step 3: Add JavaScript (Understanding Behavior)**
- Learn how to respond to user actions
- Understand data flow and state management
- See interactivity in action
- Result: A fully functional, interactive site

### Why This Order?
1. **Logical progression**: Each layer builds on the previous
2. **Debugging clarity**: If something's broken, you know which layer caused it
3. **Separation of concerns**: You learn why breaking things apart matters
4. **Reusability**: You understand how to structure code for maintainability

---

## Key Fundamentals to Learn

### HTML
- **Semantic tags**: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- **Why they matter**: Accessibility, SEO, code readability
- **Card structure**: Image + text content organized together

### CSS
- **Flexbox**: Great for responsive card layouts
- **Media queries**: Making sites responsive to different screen sizes
- **Pseudo-classes**: `:hover`, `:active` for interactivity without JavaScript
- **Reusable classes**: Writing CSS once, using everywhere

### JavaScript
- **DOM selection**: `document.querySelector()`, `document.querySelectorAll()`
- **Event listeners**: `.addEventListener()` and responding to user actions
- **Array methods**: `.filter()`, `.map()`, `.forEach()` for working with card data
- **Data storage**: `localStorage` for persisting favorites

---

## Before We Code

### Answer These Questions (To Guide Our Decisions)

1. **Difficulty levels**: Easy, Moderate, Hard? Or different categories?
2. **Regions**: Mountains, Desert, Coast, Tropical? Any specific real locations?
3. **Card data**: What info matters most? (elevation, distance, best season, rating?)
4. **Style preference**: Adventurous & vibrant? Minimalist & modern? Nature-focused?
5. **Mobile priority**: Should mobile work perfectly even if desktop isn't perfect?

### Success Criteria

By the end:
- [ ] HTML page loads with 6-8 hiking destination cards
- [ ] CSS makes it look professional on mobile, tablet, desktop
- [ ] JavaScript lets users filter by difficulty and toggle favorites
- [ ] Favorites persist when the page refreshes
- [ ] You understand WHY each technology is used

---

## Next Steps

Once you're happy with this plan:
1. We'll create `index.html` with clean, semantic structure
2. We'll add `style.css` with responsive, beautiful styling
3. We'll add `script.js` with filtering and favorites functionality
4. You'll have a portfolio-quality project + deep understanding of web fundamentals

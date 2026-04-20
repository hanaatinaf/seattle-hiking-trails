# 📚 JavaScript Fundamentals - Learning Guide

Learn JavaScript while building your hiking trails project!

---

## What is JavaScript?

**JavaScript** = Makes your website interactive
- React to user clicks (filters, favorites)
- Update content without reloading
- Store data in the browser
- Perform calculations and logic

---

## Core JavaScript Concepts You'll Learn

### 1. **DOM (Document Object Model)**
The browser's way of reading HTML elements.

```javascript
// Select an element
document.getElementById('searchInput')          // Find by ID
document.querySelector('.card')                // Find by class
document.querySelectorAll('.card')             // Find ALL matching elements

// Change content
element.textContent = "New text"               // Change text
element.classList.add('active')               // Add a class
element.classList.remove('active')            // Remove a class
element.style.color = 'red'                   // Change inline style
```

### 2. **Event Listeners**
Listen for user actions (clicks, typing, etc.)

```javascript
element.addEventListener('click', function() {
  console.log('User clicked!')
})

element.addEventListener('input', function() {
  console.log('User typed something!')
})
```

### 3. **Variables & Data Types**
Store and use data

```javascript
let count = 0                    // Number
let name = "Green Lake"          // String
let isActive = true             // Boolean
let items = [1, 2, 3]           // Array
let person = { name: "Hana" }  // Object
```

### 4. **Arrays & Loops**
Work with lists of data

```javascript
let trails = ['Green Lake', 'Mount Si', 'Rattlesnake Lake']

// Loop through array
for (let i = 0; i < trails.length; i++) {
  console.log(trails[i])
}

// Modern way: forEach
trails.forEach(function(trail) {
  console.log(trail)
})

// Filter: get only items that match
let easyTrails = trails.filter(function(trail) {
  return trail.difficulty === 'easy'
})
```

### 5. **Functions**
Reusable blocks of code

```javascript
// Define a function
function filterByDifficulty(level) {
  // code here
}

// Call the function
filterByDifficulty('easy')
```

### 6. **localStorage**
Store data in the browser so it persists

```javascript
// Save data
localStorage.setItem('favorites', JSON.stringify([1, 2, 3]))

// Get data
let favorites = localStorage.getItem('favorites')
let favoriteArray = JSON.parse(favorites)
```

---

## What We'll Build

### Feature 1: Filter by Difficulty
- Click "Easy" button → Show only easy trails
- Click "Moderate" button → Show only moderate trails
- Click "Hard" button → Show only hard trails
- Click "All Levels" → Show all trails

### Feature 2: Search by Name
- Type "Green Lake" → Show only matching trails
- Type anything else → Filter in real-time

### Feature 3: Favorites System
- Click heart button → Add to favorites
- Heart fills red when favorited
- Count updates at top
- Saved in localStorage (persists on refresh)

### Feature 4: Sort Trails
- Sort by distance (shortest first)
- Sort by duration (quickest first)
- Sort by difficulty (easy first)
- Sort by rating (best first)

---

## JavaScript Files Structure

We'll create `script.js` with sections:

```javascript
/* 1. Get HTML elements */
/* 2. Load favorites from localStorage */
/* 3. Create functions for filtering */
/* 4. Create functions for searching */
/* 5. Create functions for favorites */
/* 6. Create functions for sorting */
/* 7. Add event listeners */
/* 8. Initialize on page load */
```

---

## Key Concepts You'll Master

✅ Selecting HTML elements with `querySelector`
✅ Adding event listeners to buttons and inputs
✅ Using `data-` attributes to store trail info
✅ Filtering arrays with `.filter()`
✅ Updating DOM dynamically
✅ Using `localStorage` for persistence
✅ Working with JSON (JSON.stringify, JSON.parse)
✅ Arrow functions `() => {}`
✅ Template literals with backticks
✅ Conditional logic (if/else)

---

## Learning Approach

1. **Understand the concept** - I explain what it does
2. **See the code** - Example of how to use it
3. **Type it yourself** - You implement it
4. **Test it** - Open in browser and verify it works
5. **Push to GitHub** - Save your progress

---

## Let's Get Started!

We'll build JavaScript **step by step**, teaching you:
- How to select elements
- How to listen for clicks
- How to modify what shows on screen
- How to save data

Ready? Let's go! 🚀

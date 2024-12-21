# dom-sba
 Demonstrate comprehension of the DOM; particularly methods, elements, and events.

 # Tea Timer, Fortune Reader, Music Player, and Form Project

## Overview

This project is a **multi-functional web application** combining features like a tea timer, fortune reader, music player, and a form validation system. It’s perfect for tea enthusiasts who enjoy whimsical fortunes and a delightful user experience. The application is fully responsive and creatively designed.

---

## Features

### 1. **Tea Timer**
- Choose from 4 tea types: **green, white, black, herbal**.
- Expanding submenu fully controlled in the DOM
- Countdown timer displays remaining brewing time in real-time.
- Plays a bell sound when brewing is complete.
- Displays dynamic tea brewing instructions and timer interval set based on the selected tea type.

### 2. **Fortune Reader**
- Users fill out a form (name, birthday, tea preference) and receive a **random tea leaf fortune**.
- Fortunes are mysterious, hopeful, and whimsically unsettling, as though written by an elite legion of underworld-dwelling cats.

### 3. **Music Player**
- A "Play Music" button toggles background music during the tea-brewing process.

### 4. **Form Validation**
- Ensures name, birthday, and tea preference are provided before submitting.
- Displays validation messages dynamically within the interface.

---

## Technologies Used

- **HTML**: Semantic structure for elements like forms, buttons, and timers.
- **CSS**: Flexbox for layout and media queries for responsiveness.
- **JavaScript**: 
  - DOM manipulation for dynamic content.
  - BOM for notifications.
  - Randomization for generating fortunes.

---

## Implementation Details

### HTML Plan
- Semantic structure includes:
  - Tea dropdown menu
  - Dynamic timer and instructional text
  - Form for fortune reading
  - Buttons for timer controls and music playback

### CSS Plan
- Flexbox layout:
  - Single-column layout on mobile
  - Two-column layout on desktop
- Breakpoints:
  - Background and layout adjustments for screens wider than 400px.

### JavaScript Plan
#### Arrays and Data
- **Tea Array**: Defines brewing times and temperatures for each tea type.
- **Fortune Array**: Stores a collection of whimsical fortunes.

#### DOM Manipulation
- **Event Listeners**:
  - Dropdown button to select tea type.
  - Music player button for toggling audio.
  - Timer buttons for start, stop, and reset actions.
  - Submit button for form validation.
- **Functions**:
  - Populate timer and instructional text based on tea selection.
  - Start, stop, and reset the timer.
  - Generate a random tea fortune.

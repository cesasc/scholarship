# CESASC Scholarships Website - Shared Components

## Overview

This website uses a shared navigation bar component to make maintenance easier. Instead of editing every page when you want to change the navbar, you only need to edit one file.

## Structure

### Shared Files:

- **navbar.html** - Contains the navigation bar HTML that appears on all pages
- **script.js** - Main JavaScript file that loads the navbar and handles interactions

### How It Works:

1. Each page has a `<div id="navbar-placeholder"></div>` where the navbar will be inserted
2. When the page loads, JavaScript fetches `navbar.html` and inserts it into the placeholder
3. The active page is automatically highlighted in the navigation
4. CSS and other head elements are included directly in each page's `<head>` section

## How to Edit the Navigation

### To change the navbar (add/remove/edit links):

1. Open `navbar.html`
2. Edit the `<nav>` element
3. Save the file
4. All pages will automatically use the updated navbar

## Example: Adding a New Page to Navigation

1. Open `navbar.html`
2. Add a new list item in the navigation:

```html
<li><a href="new-page.html" data-page="new-page.html">New Page</a></li>
```

3. Save the file
4. The new link will appear on all pages automatically

## Example: Changing the Logo

1. Open `navbar.html`
2. Find the logo section:

```html
<div class="logo">
  <h2>CESASC</h2>
</div>
```

3. Change "CESASC" to your desired text or replace with an image
4. Save the file

## Benefits:

✅ Edit navbar once, updates everywhere
✅ Consistent navigation across all pages
✅ Easier maintenance and updates
✅ Less code duplication
✅ Fast loading - CSS included directly in head

## Note:

The website uses JavaScript to load the shared navbar component. Make sure to test the site with a local web server (not just opening HTML files directly) for the fetch API to work properly.

You can use a simple local server like:

- Python: `python -m http.server 8000`
- Node.js: `npx http-server`
- VS Code: Use the Live Server extension

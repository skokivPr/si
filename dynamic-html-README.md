# Dynamic HTML Generator

This JavaScript file (`dynamic-html.js`) provides functions to dynamically generate HTML structure for navigation, content sections, and modals.

## Files Created

1. **`dynamic-html.js`** - Main dynamic HTML generator with all functions
2. **`example-usage.html`** - Example of how to use the dynamic HTML generator
3. **`dynamic-html-README.md`** - This documentation file

## Features

- **Dynamic Navigation**: Creates navigation with buttons for different sections
- **Content Sections**: Generates multiple content sections with corner decorations
- **Modals**: Creates all modals with their specific content (notepad, chat, code generator, etc.)
- **Flexible Usage**: Can generate all HTML at once or specific parts separately

## Main Functions

### Core Functions

- `generateDynamicHTML()` - Generates all HTML structure (navigation, sections, modals)
- `replaceDynamicHTML()` - Removes existing HTML and regenerates everything
- `initDynamicHTML()` - Initializes generation when DOM is ready

### Component Functions

- `createNavigation()` - Creates navigation bar HTML
- `createContentSections()` - Creates all content sections HTML
- `createModals()` - Creates all modals HTML

## Usage Examples

### Basic Usage

```javascript
// Generate all HTML when DOM is ready
document.addEventListener("DOMContentLoaded", function () {
  window.DynamicHTML.generateDynamicHTML();
});
```

### Replace Existing HTML

```javascript
// Replace existing HTML structure
window.DynamicHTML.replaceDynamicHTML();
```

### Generate Specific Parts

```javascript
// Generate only navigation
const navHTML = window.DynamicHTML.createNavigation();
document.body.insertAdjacentHTML("beforeend", navHTML);

// Generate only content sections
const sectionsHTML = window.DynamicHTML.createContentSections();
document.body.insertAdjacentHTML("beforeend", sectionsHTML);

// Generate only modals
const modalsHTML = window.DynamicHTML.createModals();
document.body.insertAdjacentHTML("beforeend", modalsHTML);
```

## HTML Structure Generated

The generator creates the following structure:

```html
<nav class="nav" id="nav">
  <!-- Navigation buttons -->
</nav>

<div class="content-container">
  <section id="all-section" class="content-section active">
    <!-- Header with date, timer, and icons -->
    <!-- Main content grid -->
  </section>
  <!-- Additional sections (editors, tools, data, code) -->
</div>

<!-- All modals (myModal1 through myModal9, confirmationModal) -->
```

## Configuration

The generator includes configuration objects that can be modified:

- `navigationConfig` - Navigation button configuration
- `headerIconsConfig` - Header icons configuration
- `sectionsConfig` - Content sections configuration
- `modalsConfig` - Modals configuration

## Integration with Existing Code

The dynamic HTML generator is designed to work with your existing `index.js` and `index.css` files. After generating the HTML structure, your existing JavaScript functionality should work normally.

## Example File

See `example-usage.html` for a complete working example that demonstrates:

- How to load the dynamic HTML generator
- Different ways to use the functions
- Integration with existing functionality
- A test button to regenerate HTML

## Browser Support

Works in all modern browsers that support:

- ES6 functions
- DOM manipulation methods
- Template literals

## Notes

- The generator creates HTML that matches your original structure exactly
- All IDs, classes, and attributes are preserved
- The generated HTML is compatible with your existing CSS and JavaScript
- You can modify the configuration objects to customize the generated structure

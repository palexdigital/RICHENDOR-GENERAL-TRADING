# Richendor General Trading Store

A static online store website for Richendor General Trading, styled around a clean marketplace product grid.

## Files

- `index.html` - page content, store profile, cart drawer, product dialog, contact, and footer.
- `css/variables.css` - editable brand color and design variables.
- `css/styles.css` - layout, product grid, cart, dialogs, and responsive styling.
- `js/app.js` - product names, prices, categories, photos, and Buy links.
- `images/richendor-logo.jpg` - store logo.
- `images/products/` - product photos used by the store.

## Editing Products

Open `js/app.js` and edit the `products` array. Each product has:

- `id`
- `name`
- `category`
- `price`
- `image`
- `buyUrl`
- `description`
- `specs`

The `buyUrl` field controls where each Buy button goes. Replace the default store URL with the exact product page link when each listing is ready.

## Publishing On GitHub Pages

Upload this folder to a GitHub repository. In the repository settings, enable GitHub Pages and choose the branch containing `index.html`.

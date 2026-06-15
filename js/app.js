const products = [
  {
    id: "ipad-9th-gen-blue",
    name: "iPad 9th Gen 64GB Wi-Fi",
    category: "iPad",
    price: 5500,
    image: "images/products/ipad-blue.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Clean iPad with a bright display, ideal for study, streaming, and daily use.",
    specs: ["64GB storage", "Wi-Fi model", "Good battery health", "Ready for setup"]
  },
  {
    id: "iphone-boxed-bundle",
    name: "iPhone Boxed Bundle",
    category: "iPhone",
    price: 9500,
    image: "images/products/iphone-boxed.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "iPhone package with accessories, presented in excellent condition.",
    specs: ["Box included", "Accessories included", "Tested device", "Ready to use"]
  },
  {
    id: "iphone-green",
    name: "iPhone Green Edition",
    category: "iPhone",
    price: 5500,
    image: "images/products/iphone-green.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Compact iPhone with a clean finish and everyday performance.",
    specs: ["Unlocked", "Quality checked", "Good screen condition", "Charging tested"]
  },
  {
    id: "macbook-blue-wallpaper",
    name: "MacBook Pro 13-inch",
    category: "MacBook",
    price: 9500,
    image: "images/products/macbook-blue.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Reliable MacBook for school, business, and creative everyday work.",
    specs: ["13-inch display", "macOS ready", "Charger available", "Performance tested"]
  },
  {
    id: "iphone-accessory-remote",
    name: "iPhone With Accessories",
    category: "iPhone",
    price: 12000,
    image: "images/products/iphone-remote.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Premium iPhone package with accessories for a complete setup.",
    specs: ["Accessories included", "Unlocked", "Inspected condition", "Ready for collection"]
  },
  {
    id: "airtag-set",
    name: "Apple AirTag Set",
    category: "Accessories",
    price: 1200,
    image: "images/products/airtag-set.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Apple tracking accessories for bags, keys, and everyday essentials.",
    specs: ["Compact tracker", "Apple Find My support", "Easy setup", "Portable accessory"]
  },
  {
    id: "macbook-stage-light",
    name: "MacBook Air Bundle",
    category: "MacBook",
    price: 10500,
    image: "images/products/macbook-stage.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Slim MacBook option for work, browsing, email, and study.",
    specs: ["Lightweight body", "macOS ready", "Keyboard tested", "Charger available"]
  },
  {
    id: "iphone-box",
    name: "iPhone Boxed Deal",
    category: "iPhone",
    price: 9500,
    image: "images/products/iphone-box.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Boxed iPhone deal with a clean display and smooth performance.",
    specs: ["Box included", "Screen checked", "Battery checked", "Network ready"]
  },
  {
    id: "ipad-keyboard-case",
    name: "iPad With Keyboard Case",
    category: "iPad",
    price: 3500,
    image: "images/products/ipad-keyboard.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "iPad setup with a keyboard case for notes, work, and browsing.",
    specs: ["Keyboard case", "Touch display", "Wi-Fi model", "Portable setup"]
  },
  {
    id: "macbook-space-gray",
    name: "MacBook Space Gray",
    category: "MacBook",
    price: 9500,
    image: "images/products/macbook-space-gray.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Space gray MacBook in a practical everyday configuration.",
    specs: ["Space gray finish", "Charger available", "macOS ready", "Good working condition"]
  },
  {
    id: "iphone-red",
    name: "iPhone Red",
    category: "iPhone",
    price: 2500,
    image: "images/products/iphone-red.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Affordable iPhone with a bold red finish and essential features.",
    specs: ["Unlocked", "Charging tested", "Camera tested", "Great value option"]
  },
  {
    id: "airpods-box",
    name: "AirPods With Box",
    category: "AirPods",
    price: 450,
    image: "images/products/airpods-box.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Compact Apple audio accessory for music, calls, and daily use.",
    specs: ["Charging case", "Portable design", "Audio tested", "Box shown"]
  },
  {
    id: "ipad-mini",
    name: "iPad Mini",
    category: "iPad",
    price: 2900,
    image: "images/products/ipad-mini.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Small iPad form factor for travel, reading, video, and notes.",
    specs: ["Compact size", "Wi-Fi model", "Touch display", "Easy to carry"]
  },
  {
    id: "ipad-silver",
    name: "iPad Silver",
    category: "iPad",
    price: 5500,
    image: "images/products/ipad-silver.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Silver iPad with a clean look and reliable everyday usability.",
    specs: ["Silver finish", "Wi-Fi model", "Display tested", "Ready to use"]
  },
  {
    id: "apple-pencil",
    name: "Apple Pencil",
    category: "Accessories",
    price: 1100,
    image: "images/products/apple-pencil.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "Apple Pencil accessory for drawing, notes, marking up, and design work.",
    specs: ["Apple Pencil", "Clean condition", "Great for iPad", "Portable accessory"]
  },
  {
    id: "iphone-apps",
    name: "iPhone App Setup",
    category: "iPhone",
    price: 5900,
    image: "images/products/iphone-apps.jpg",
    buyUrl: "https://www.yaga.co.za/richendor-general-trading",
    description: "iPhone shown with apps installed, ready for everyday communication.",
    specs: ["Unlocked", "Apps ready", "Screen checked", "Battery checked"]
  }
];

const currency = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0
});

const state = {
  cart: JSON.parse(localStorage.getItem("richendorCart") || "[]"),
  search: "",
  category: "all",
  sort: "featured"
};

const productGrid = document.querySelector("#productGrid");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");
const sortFilter = document.querySelector("#sortFilter");
const cartPanel = document.querySelector("[data-cart-panel]");
const cartItems = document.querySelector("[data-cart-items]");
const productDialog = document.querySelector("[data-product-dialog]");
const productDetail = document.querySelector("[data-product-detail]");

function saveCart() {
  localStorage.setItem("richendorCart", JSON.stringify(state.cart));
}

function formatPrice(value) {
  return currency.format(value).replace("ZAR", "R");
}

function getCartProduct(item) {
  return products.find((product) => product.id === item.id);
}

function renderCategories() {
  const categories = [...new Set(products.map((product) => product.category))];
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.append(option);
  });
}

function renderProducts() {
  let visibleProducts = products.filter((product) => {
    const matchesSearch = [product.name, product.category, product.description].join(" ").toLowerCase().includes(state.search.toLowerCase());
    const matchesCategory = state.category === "all" || product.category === state.category;
    return matchesSearch && matchesCategory;
  });

  visibleProducts = [...visibleProducts].sort((a, b) => {
    if (state.sort === "price-low") return a.price - b.price;
    if (state.sort === "price-high") return b.price - a.price;
    if (state.sort === "name") return a.name.localeCompare(b.name);
    return products.indexOf(a) - products.indexOf(b);
  });

  if (!visibleProducts.length) {
    productGrid.innerHTML = '<div class="empty-state"><h3>No products found.</h3><p>Try a different search or category.</p></div>';
    return;
  }

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card">
      <div class="product-media">
        <img src="${product.image}" alt="${product.name}">
        <span class="save-dot" aria-hidden="true">♡</span>
      </div>
      <div class="product-copy">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <strong class="product-price">${formatPrice(product.price)}</strong>
        <div class="product-actions">
          <button class="pill-button small" type="button" data-add-to-cart="${product.id}">Add to bag</button>
          <a class="pill-button small" href="${product.buyUrl}" target="_blank" rel="noopener">Buy</a>
          <button class="ghost-button" type="button" data-view-product="${product.id}">Details</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const count = state.cart.length;
  document.querySelectorAll("[data-cart-count]").forEach((item) => {
    item.textContent = count;
  });

  if (!state.cart.length) {
    cartItems.innerHTML = '<div class="empty-state"><h3>Your bag is empty.</h3><p>Pick products from the store grid.</p></div>';
  } else {
    cartItems.innerHTML = state.cart.map((item) => {
      const product = getCartProduct(item);
      if (!product) return "";
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)}</p>
            <a href="${product.buyUrl}" target="_blank" rel="noopener">Buy item</a>
          </div>
          <button class="remove-x" type="button" data-remove="${product.id}" aria-label="Remove ${product.name}">×</button>
        </article>
      `;
    }).join("");
  }

  saveCart();
}

function addToCart(id) {
  if (!state.cart.some((item) => item.id === id)) {
    state.cart.push({ id });
  }
  renderCart();
  openCart();
}

function openCart() {
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
  document.body.classList.remove("cart-open");
}

function showProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  productDetail.innerHTML = `
    <article class="product-detail">
      <img src="${product.image}" alt="${product.name}">
      <div>
        <p class="eyebrow dark">${product.category}</p>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <ul class="spec-list">
          ${product.specs.map((spec) => `<li>${spec}</li>`).join("")}
        </ul>
        <strong class="product-price">${formatPrice(product.price)}</strong>
        <div class="product-actions">
          <button class="pill-button" type="button" data-add-to-cart="${product.id}">Add to bag</button>
          <a class="pill-button" href="${product.buyUrl}" target="_blank" rel="noopener">Buy item</a>
        </div>
      </div>
    </article>
  `;
  productDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeProductDialog() {
  productDialog.close();
  document.body.classList.remove("dialog-open");
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-to-cart]");
  const viewButton = event.target.closest("[data-view-product]");
  const removeButton = event.target.closest("[data-remove]");

  if (addButton) addToCart(addButton.dataset.addToCart);
  if (viewButton) showProduct(viewButton.dataset.viewProduct);
  if (removeButton) {
    state.cart = state.cart.filter((item) => item.id !== removeButton.dataset.remove);
    renderCart();
  }
});

document.querySelector("[data-open-search]").addEventListener("click", () => {
  document.querySelector("#store").scrollIntoView({ behavior: "smooth" });
  searchInput.focus();
});

document.querySelectorAll("[data-open-cart]").forEach((button) => button.addEventListener("click", openCart));
document.querySelectorAll("[data-close-cart]").forEach((button) => button.addEventListener("click", closeCart));
document.querySelector("[data-close-product]").addEventListener("click", closeProductDialog);

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value;
  renderProducts();
});

categoryFilter.addEventListener("change", (event) => {
  state.category = event.target.value;
  renderProducts();
});

sortFilter.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProducts();
});

document.querySelector(".nav-toggle").addEventListener("click", (event) => {
  const navLinks = document.querySelector("#primary-nav");
  const isOpen = navLinks.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    if (productDialog.open) closeProductDialog();
  }
});

renderCategories();
renderProducts();
renderCart();

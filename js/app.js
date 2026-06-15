const products = [
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    category: "iPhone",
    price: 24999,
    image: "images/iphone-15-pro.svg",
    description: "Titanium design, powerful camera system, and A17 Pro performance.",
    colors: ["#2f3133", "#b7b3aa", "#d8d6d1"],
    specs: ["6.1-inch display", "128GB storage", "48MP main camera", "USB-C"]
  },
  {
    id: "macbook-pro-14",
    name: "MacBook Pro 14",
    category: "Mac",
    price: 42999,
    image: "images/macbook-pro.svg",
    description: "A compact pro laptop for creative work, code, business, and study.",
    colors: ["#2c2c2e", "#d7d7d5"],
    specs: ["14-inch Liquid Retina display", "M3 performance", "512GB SSD", "18-hour battery"]
  },
  {
    id: "ipad-air",
    name: "iPad Air",
    category: "iPad",
    price: 15999,
    image: "images/ipad-air.svg",
    description: "Light, fast, and ready for notes, design, entertainment, and work.",
    colors: ["#b8d7e8", "#dedfe2", "#f1d3c6"],
    specs: ["11-inch display", "128GB storage", "Apple Pencil support", "Wi-Fi"]
  },
  {
    id: "apple-watch-series-9",
    name: "Apple Watch Series 9",
    category: "Watch",
    price: 8999,
    image: "images/apple-watch.svg",
    description: "Health, fitness, notifications, and daily tools from your wrist.",
    colors: ["#111111", "#f5e6de", "#c8d7d2"],
    specs: ["45mm case", "Always-On Retina display", "Fitness tracking", "Water resistant"]
  },
  {
    id: "airpods-pro",
    name: "AirPods Pro",
    category: "AirPods",
    price: 4999,
    image: "images/airpods-pro.svg",
    description: "Active Noise Cancellation, Transparency mode, and immersive sound.",
    colors: ["#ffffff"],
    specs: ["USB-C case", "Adaptive audio", "Personalized spatial audio", "Up to 30 hours"]
  },
  {
    id: "magic-accessory-kit",
    name: "Magic Accessory Kit",
    category: "Accessories",
    price: 6499,
    image: "images/magic-accessory-kit.svg",
    description: "Keyboard, mouse, and charging essentials for a cleaner desk.",
    colors: ["#ffffff", "#1d1d1f"],
    specs: ["Wireless keyboard", "Wireless mouse", "USB-C cable", "Desk-ready bundle"]
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
const checkoutDialog = document.querySelector("[data-checkout-dialog]");
const checkoutForm = document.querySelector("[data-checkout-form]");

function saveCart() {
  localStorage.setItem("richendorCart", JSON.stringify(state.cart));
}

function formatPrice(value) {
  return currency.format(value).replace("ZAR", "R");
}

function getCartProduct(item) {
  return products.find((product) => product.id === item.id);
}

function cartTotals() {
  const subtotal = state.cart.reduce((sum, item) => {
    const product = getCartProduct(item);
    return product ? sum + product.price * item.quantity : sum;
  }, 0);
  const delivery = subtotal > 0 && subtotal < 30000 ? 350 : 0;
  return { subtotal, delivery, total: subtotal + delivery };
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
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <div class="product-meta">
        <strong class="product-price">${formatPrice(product.price)}</strong>
        <div class="swatches" aria-label="${product.name} colors">
          ${product.colors.map((color) => `<span class="swatch" style="background:${color}"></span>`).join("")}
        </div>
        <div class="product-actions">
          <button class="pill-button small" type="button" data-add-to-cart="${product.id}">Add to bag</button>
          <button class="ghost-button" type="button" data-view-product="${product.id}">Details ›</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll("[data-cart-count]").forEach((item) => {
    item.textContent = count;
  });

  if (!state.cart.length) {
    cartItems.innerHTML = '<div class="empty-state"><h3>Your bag is empty.</h3><p>Add a product to begin checkout.</p></div>';
  } else {
    cartItems.innerHTML = state.cart.map((item) => {
      const product = getCartProduct(item);
      if (!product) return "";
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}">
          <div>
            <h3>${product.name}</h3>
            <p>${formatPrice(product.price)} each</p>
            <div class="quantity-control" aria-label="${product.name} quantity">
              <button type="button" data-decrease="${product.id}" aria-label="Decrease quantity">−</button>
              <span>${item.quantity}</span>
              <button type="button" data-increase="${product.id}" aria-label="Increase quantity">+</button>
            </div>
            <button class="remove-button" type="button" data-remove="${product.id}">Remove</button>
          </div>
        </article>
      `;
    }).join("");
  }

  const totals = cartTotals();
  document.querySelector("[data-subtotal]").textContent = formatPrice(totals.subtotal);
  document.querySelector("[data-delivery]").textContent = totals.delivery ? formatPrice(totals.delivery) : "Free";
  document.querySelector("[data-total]").textContent = formatPrice(totals.total);
  document.querySelector("[data-checkout-total]").textContent = formatPrice(totals.total);
  document.querySelector("[data-checkout-button]").disabled = !state.cart.length;
  saveCart();
}

function addToCart(id) {
  const existing = state.cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ id, quantity: 1 });
  }
  renderCart();
  openCart();
}

function changeQuantity(id, amount) {
  const item = state.cart.find((cartItem) => cartItem.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter((cartItem) => cartItem.id !== id);
  }
  renderCart();
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
        <button class="pill-button" type="button" data-add-to-cart="${product.id}">Add to bag</button>
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

function openCheckout() {
  if (!state.cart.length) return;
  closeCart();
  checkoutDialog.showModal();
  document.body.classList.add("dialog-open");
}

function closeCheckout() {
  checkoutDialog.close();
  document.body.classList.remove("dialog-open");
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-to-cart]");
  const viewButton = event.target.closest("[data-view-product]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");
  const removeButton = event.target.closest("[data-remove]");

  if (addButton) addToCart(addButton.dataset.addToCart);
  if (viewButton) showProduct(viewButton.dataset.viewProduct);
  if (increaseButton) changeQuantity(increaseButton.dataset.increase, 1);
  if (decreaseButton) changeQuantity(decreaseButton.dataset.decrease, -1);
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
document.querySelector("[data-close-checkout]").addEventListener("click", closeCheckout);
document.querySelector("[data-checkout-button]").addEventListener("click", openCheckout);

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

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("[data-order-message]");
  const formData = new FormData(checkoutForm);
  const orderNumber = `RGT-${Date.now().toString().slice(-6)}`;
  message.textContent = `Thank you, ${formData.get("name")}. Your demo order ${orderNumber} has been received.`;
  state.cart = [];
  renderCart();
  checkoutForm.reset();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    if (productDialog.open) closeProductDialog();
    if (checkoutDialog.open) closeCheckout();
  }
});

renderCategories();
renderProducts();
renderCart();

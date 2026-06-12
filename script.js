const dishes = [
  {
    id: "basmati-kacchi",
    name: "Basmati Kacchi",
    category: "Signature",
    price: 310,
    image: "dish1.jpg",
    description: "Fragrant basmati kacchi with tender meat, potato, tomato, cucumber, and classic Old Dhaka aroma."
  },
  {
    id: "basmati-kacchi-kabab",
    name: "Basmati Kacchi + Jali Kabab",
    category: "Signature",
    price: 650,
    image: "dish1.jpg",
    description: "A fuller feast plate pairing kacchi biryani with crisp jali kabab."
  },
  {
    id: "beef-tehari-half",
    name: "Beef Tehari Half",
    category: "Tehari",
    price: 165,
    image: "dish1.jpg",
    description: "A comforting half portion of beef tehari with the familiar aroma of Old Dhaka rice and spices."
  },
  {
    id: "beef-tehari-full",
    name: "Beef Tehari Full",
    category: "Tehari",
    price: 300,
    image: "dish1.jpg",
    description: "Full portion beef tehari for a richer lunch or dinner plate."
  },
  {
    id: "basmati-kacchi-dim",
    name: "Basmati Kacchi Dim",
    category: "Platter",
    price: 1200,
    image: "dish1.jpg",
    description: "Large basmati kacchi platter with egg, built for sharing at the table."
  },
  {
    id: "asta-raner-polao",
    name: "Asta Raner Polao",
    category: "Royal Platter",
    price: 2500,
    image: "dish2.jpg",
    description: "Whole mutton leg served with sada polao, borhani, jali kabab, egg, and salad."
  },
  {
    id: "shahi-beef-bhuna",
    name: "Shahi Beef Bhuna",
    category: "Curry",
    price: 245,
    image: "dish2.jpg",
    description: "Rich beef bhuna cooked with deep spice and a royal finish."
  },
  {
    id: "beef-kalia",
    name: "Beef Kalia",
    category: "Curry",
    price: 210,
    image: "dish2.jpg",
    description: "Slow-cooked beef kalia with a warm, aromatic gravy."
  },
  {
    id: "morog-mussallam",
    name: "Morog Mussallam",
    category: "Curry",
    price: 160,
    image: "dish2.jpg",
    description: "Festive chicken preparation with a hearty Bengali masala base."
  },
  {
    id: "chicken-roast",
    name: "Chicken Roast",
    category: "Curry",
    price: 145,
    image: "dish2.jpg",
    description: "Classic wedding-style chicken roast with glossy spiced gravy."
  },
  {
    id: "polao-morog",
    name: "Polao + Morog Mussallam",
    category: "Combo",
    price: 210,
    image: "dish2.jpg",
    description: "Soft sada polao served with a comforting morog mussallam quarter."
  },
  {
    id: "polao-chicken-roast-kabab",
    name: "Polao + Chicken Roast + Jali Kabab",
    category: "Combo",
    price: 250,
    image: "dish2.jpg",
    description: "A balanced royal combo with polao, chicken roast, and jali kabab."
  },
  {
    id: "polao-shahi-beef-bhuna",
    name: "Polao + Shahi Beef Bhuna",
    category: "Combo",
    price: 295,
    image: "dish2.jpg",
    description: "Sada polao paired with shahi beef bhuna for a classic feast plate."
  },
  {
    id: "polao-beef-kalia",
    name: "Polao + Beef Kalia",
    category: "Combo",
    price: 260,
    image: "dish2.jpg",
    description: "Soft polao with beef kalia and a deep, homestyle curry finish."
  },
  {
    id: "sada-polao",
    name: "Sada Polao",
    category: "Rice",
    price: 70,
    image: "dish1.jpg",
    description: "Plain aromatic polao, ideal beside roast, bhuna, kalia, or kabab."
  },
  {
    id: "sada-bhat",
    name: "Sada Bhat",
    category: "Rice",
    price: 30,
    image: "dish1.jpg",
    description: "Simple steamed rice for curry-forward meals."
  },
  {
    id: "shahi-naan",
    name: "Shahi Naan",
    category: "Bread",
    price: 60,
    image: "dish1.jpg",
    description: "Soft, warm naan to pair with beef bhuna, kalia, or roast."
  },
  {
    id: "borhani",
    name: "Borhani",
    category: "Drinks",
    price: 60,
    image: "dish1.jpg",
    description: "Refreshing spiced yogurt drink, perfect after kacchi and roasts."
  },
  {
    id: "faluda",
    name: "Faluda",
    category: "Dessert",
    price: 170,
    image: "dish1.jpg",
    description: "Sweet chilled faluda to close the feast."
  },
  {
    id: "malai-lassi",
    name: "Malai Lassi",
    category: "Drinks",
    price: 140,
    image: "dish1.jpg",
    description: "Creamy malai lassi with a cool, sweet finish."
  }
];

function formatPrice(price) {
  return `৳${price}`;
}

function renderMenu() {
  const grid = document.querySelector("#dishGrid");
  if (!grid) return;

  grid.innerHTML = dishes.map((dish) => `
    <a class="dish-card" href="order.html?dish=${dish.id}">
      <img src="${dish.image}" alt="${dish.name}" />
      <span class="dish-meta">${dish.category}</span>
      <h3>${dish.name}</h3>
      <p>${dish.description}</p>
      <b>${formatPrice(dish.price)}</b>
    </a>
  `).join("");
}

function renderOrder() {
  const name = document.querySelector("#orderName");
  if (!name) return;

  const params = new URLSearchParams(window.location.search);
  const selected = dishes.find((dish) => dish.id === params.get("dish")) || dishes[0];

  document.querySelector("#orderImage").src = selected.image;
  document.querySelector("#orderImage").alt = selected.name;
  name.textContent = selected.name;
  document.querySelector("#orderDescription").textContent = selected.description;
  document.querySelector("#orderPrice").textContent = formatPrice(selected.price);

  const quantityInput = document.querySelector("#orderQuantity");
  const customerName = document.querySelector("#customerName");
  const customerPhone = document.querySelector("#customerPhone");
  const customerAddress = document.querySelector("#customerAddress");
  const total = document.querySelector("#orderTotal");
  const whatsappOrder = document.querySelector("#whatsappOrder");

  function updateOrderLink() {
    const quantity = Math.max(1, Number(quantityInput.value) || 1);
    const orderTotal = selected.price * quantity;
    total.textContent = formatPrice(orderTotal);

    const details = [
      `Hello Jomidari Bhoj, I want to order ${selected.name}.`,
      `Quantity: ${quantity}`,
      `Total: ${formatPrice(orderTotal)}`,
      customerName.value ? `Name: ${customerName.value}` : "",
      customerPhone.value ? `Phone: ${customerPhone.value}` : "",
      customerAddress.value ? `Address: ${customerAddress.value}` : ""
    ].filter(Boolean).join("\n");

    whatsappOrder.href = `https://wa.me/8801906842423?text=${encodeURIComponent(details)}`;
  }

  [quantityInput, customerName, customerPhone, customerAddress].forEach((field) => {
    field.addEventListener("input", updateOrderLink);
  });
  updateOrderLink();
}

if (typeof document !== "undefined") {
  renderMenu();
  renderOrder();
}

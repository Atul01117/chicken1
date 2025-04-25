const cart = [];
const products = [
  { id: 1, name: "होल चिकन", price: 1000 },
  { id: 2, name: "देसी चिकन", price: 1500 },
];

document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", (event) => {
    const productId = parseInt(event.target.closest(".product").dataset.id);
    const product = products.find((item) => item.id === productId);

    cart.push(product);
    updateCart();
  });
});

function updateCart() {
  const cartItems = document.querySelector(".cart-items");
  const totalElement = document.querySelector(".total");
  cartItems.innerHTML = "";

  let total = 0;
  cart.forEach((item) => {
    total += item.price;
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
    cartItems.appendChild(listItem);
  });

  totalElement.textContent = `कुल: ₹${total.toFixed(2)}`;
}

document.querySelector(".checkout").addEventListener("click", () => {
  alert("खरीदारी के लिए धन्यवाद!");
  cart.length = 0;
  updateCart();
});
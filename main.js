const categories = document.querySelectorAll(".categories li");
const productsContainer = document.querySelector(".products ul");
const productName = document.querySelector("#product-name");
const buyButton = document.querySelector("#buy-button");
const purchaseMessage = document.querySelector("#purchase-message");

const products = {
  sports: ["Футбольный мяч", "Баскетбольный мяч", "Теннисная ракетка"],
  clothing: ["Футболка", "Шорты", "Куртка"],
  equipment: ["Гантели", "Скакалка", "Гимнастический мяч"],
};

function showProducts(category) {
  productsContainer.innerHTML = "";

  products[category].forEach((product) => {
    const li = document.createElement("li");
    li.innerText = product;
    li.addEventListener("click", () => showProductInfo(product));
    productsContainer.appendChild(li);
  });

  document.querySelector(".products").style.display = "block";
  document.querySelector(".product-info").style.display = "none";
}

function showProductInfo(productNameText) {
  productName.innerText = productNameText;
  buyButton.style.display = "block";
  purchaseMessage.innerText = "";
  document.querySelector(".product-info").style.display = "block";
}

function resetState() {
  productName.innerText = "";
  buyButton.style.display = "none";
  purchaseMessage.innerText = "";
  document.querySelector(".product-info").style.display = "none";
  document.querySelector(".products").style.display = "none";
}

categories.forEach((category) => {
  category.addEventListener("click", () => {
    const selectedCategory = category.dataset.category;
    showProducts(selectedCategory);
  });
});

buyButton.addEventListener("click", () => {
  purchaseMessage.innerText = "Товар куплен";
  setTimeout(resetState, 1500);
});

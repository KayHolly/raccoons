const petsUlRef = document.querySelector("#pets");
const cartUlRef = document.querySelector("#cart");
const removeBtnRef = document.querySelector("#remove-pet");
const noPetsRef = document.querySelector("#no-pets");

const pets = ["Dog", "Cat", "Rabbit", "Fox", "Raccoon"];

const cart = [];

for (let i = 0; i < pets.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = pets[i];

  const newBtn = document.createElement("button");
  newBtn.innerText = "+";
  newBtn.dataset.name = pets[i];
  newBtn.onclick = addPetToCart;
  newLi.appendChild(newBtn);

  petsUlRef.appendChild(newLi);
}

function showCart() {
  cartUlRef.innerHTML = "";
  for (let i = 0; i < cart.length; i++) {
    cartUlRef.innerHTML += "<li>" + cart[i] + "</li>";
  }

  noPetsRef.style.display = cart.length === 0 ? "block" : "none"; //removes the No pets in cart part when an pet is added
}

function addPetToCart(e) {
  cart.push(e.target.dataset.name);

  showCart();
}

function removePetFromCart() {
  cart.pop(); //removes last thing in list rather than first

  showCart();
}
removeBtnRef.onclick = removePetFromCart;
showCart();

//below is optional things
const petGallery = [
  "https://i.imgflip.com/707bul.png?a483504",

  "https://media.tenor.com/YlYOt2UOxloAAAAM/kot-koty.gif",

  "https://upload.wikimedia.org/wikipedia/commons/0/0e/Oolong_the_Rabbit%27s_last_performance_%282003%29.jpg",

  "https://cdn.mos.cms.futurecdn.net/WuHiHgA8FBnxAQuiSCzW54.jpg",

  "https://i.ibb.co/8Lv8N0Vr/Screenshot-2025-02-28-135429.png",
];

const galleryRef = document.querySelector("#pet-gallery");

for (let i = 0; i < petGallery.length; i++) {
  galleryRef.innerHTML +=
    "<img alt='#' height='150px' src='" + petGallery[i] + "'></img>";
}
// end of optional things

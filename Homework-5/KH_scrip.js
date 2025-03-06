const cartUlRef = document.querySelector("#cart");
const ticketsUlRef = document.querySelector("#tickets");
const noTicketsRef = document.querySelector("#no_tickets");
const removeBtnRef = document.querySelector("#remove_tickets");

const tickets = ["Senior", "Adult", "Child", "Student", "Raccoon"];
const cart = [];

console.log("bunda");

for (let i = 0; i < tickets.length; i++) {
   const newLi = document.createElement("li");
   newLi.innerText = tickets[i];

   const newBtn = document.createElement("button");
   newBtn.innerText = "+";
   newBtn.dataset.name = tickets[i];
   newBtn.onclick = addTicketsToCart;
   newLi.appendChild(newBtn);

   ticketsUlRef.appendChild(newLi);
}

function showCart(){
 cartUlRef.innerHTML = "";
 for (let i = 0; i < cart.length; i++){
    cartUlRef.innerHTML += "<li>" + cart[i] + "</li>";
 }
 noTicketsRef.style.display = cart.length === 0 ? "block" : "none";
}

function addTicketsToCart(e) {
    cart.push(e.target.dataset.name);

    showCart();
}

function removeticketFromCart() {
 cart.pop();

 showCart();
}
removeBtnRef.onclick = removeticketFromCart;
showCart(); 
document.addEventListener("DOMContentLoaded", () => {
    const menuItemsList = document.getElementById("menu");
    const cartList = document.getElementById("cart");
    const noItemsText = document.getElementById("no-items");
    const removeItemButton = document.getElementById("remove-item");
    
    const menuItems = ["Hamburger", "Cheeseburger", "Fries", "Onion Rings"];
    let cart = [];
    
    function updateCart() {
        cartList.innerHTML = "";
        if (cart.length === 0) {
            noItemsText.style.display = "block";
        } else {
            noItemsText.style.display = "none";
            cart.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item;
                cartList.appendChild(li);
            });
        }
    }
    
    menuItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        
        const addButton = document.createElement("button");
        addButton.textContent = "+";
        addButton.setAttribute("data-item", item);
        addButton.addEventListener("click", () => {
            cart.push(item);
            updateCart();
        });
        
        li.appendChild(addButton);
        menuItemsList.appendChild(li);
    });
    
    removeItemButton.addEventListener("click", () => {
        if (cart.length > 0) {
            cart.pop();
            updateCart();
        }
    });
    
    updateCart();
});

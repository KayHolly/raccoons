const cheeseData = {
  "cheese": [
    { "name": "Parmigiano-Reggiano", "image": "https://www.gourmetfoodworld.com/images/product/medium/1463_1_.jpg" },
    { "name": "Grana Padano", "image": "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2Fe86e26876f54bc0f2e7ee748d8afc9d8df48a25c" },
    { "name": "Pecorino Romano", "image": "https://www.dolceterra.com/cdn/shop/products/pecorino-romano.jpg?v=1584120015" },
    { "name": "Gouda", "image": "https://shopkitchenkettle.com/cdn/shop/products/hickorysmokedgoudam_374eb0b9-1f94-4ba1-8795-a497ff444ac4.png?v=1599932337" },
    { "name": "Edam", "image": "https://cheesemaking.com/cdn/shop/articles/edam-cheese-making-recipe-204488.jpg?v=1739766289&width=2048" },
    { "name": "Brie", "image": "https://www.grocery.coop/sites/default/files/wp-content/uploads/2011/06/Brie_11.jpg" },
    { "name": "Camembert", "image": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Camembert_de_Normandie_%28AOP%29_11.jpg" },
    { "name": "Comté", "image": "https://www.sodiaal.co.uk/uploads/images/comte.png" },
    { "name": "Manchego", "image": "https://images.squarespace-cdn.com/content/v1/5eb43938f468c330e7d8d665/0ff1f48d-6ac7-457f-9d3c-a283d6ef5fe5/Manchego+wheel+with+wedge+and+knife.jpg" },
    { "name": "Asiago", "image": "https://forevercheese.com/wp-content/uploads/2020/05/Asiago-Fresh-Qtr-Low-Res-2-scaled.jpg" },
    { "name": "Emmental", "image": "https://upload.wikimedia.org/wikipedia/commons/3/38/Emmentaler_Premier_Cru.jpg" },
    { "name": "Beaufort", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSomPuO77jOlMG-oSxlPhOiVp4rdb6vhIVPeQ&s" },
    { "name": "Tomme de Savoie", "image": "https://www.cheesemonthclub.com/media/catalog/product/cache/788b446cb2db0d36d69d97927145eeb0/t/o/tommedesavoie-classic.jpg" },
    { "name": "Cheddar (Clothbound)", "image": "https://thecheeseatlas.com/wp-content/uploads/2020/07/PyenganaDairy-TraditionalClothBoundCheddar-e1631007515293-1024x819.jpg" },
    { "name": "Appenzeller", "image": "https://cheesemaking.com/cdn/shop/products/appenzeller-cheese-making-recipe-735398.jpg?v=1739766226" },
    { "name": "Fontina", "image": "https://cdn11.bigcommerce.com/s-h2455qkov2/images/stencil/1280x1280/products/1308/4832/Imported_Creamy_Italian_Fontina__04377.1583083773.jpg?c=2" },
    { "name": "Mimolette", "image": "https://cdn.powered-by-nitrosell.com/product_images/26/6472/large-Mimolette_1.jpg" },
    { "name": "Reblochon", "image": "https://www.matchingfoodandwine.com/files/blogattachments/top/reblochon@2x.jpg" },
    { "name": "Queso Mahón", "image": "https://vimart.mx/wp-content/uploads/2021/03/Captura-de-Pantalla-2020-11-09-a-las-17.29.35.png" },
    { "name": "Piave", "image": "https://m.media-amazon.com/images/I/51IlvsU-vXL._AC_UF894,1000_QL80_.jpg" }
  ]
};

const container = document.getElementById('cheese-container');
const cart = document.getElementById('cart');

cheeseData.cheese.forEach(item => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('cheese-item');

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;
  img.title = item.name;
  img.onclick = () => addToCart(item);

  const tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = item.name;

  wrapper.appendChild(img);
  wrapper.appendChild(tooltip);
  container.appendChild(wrapper);
});

function addToCart(item) {
  const li = document.createElement('li');
  li.classList.add('cart-item');

  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.name;
  img.width = 50; // Smaller cart image

  const span = document.createElement('span');
  span.textContent = item.name;

  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.onclick = () => {
    cart.removeChild(li);
  };

  li.appendChild(img);
  li.appendChild(span);
  li.appendChild(removeButton);

  cart.appendChild(li);
}
const checkoutBtn = document.getElementById('checkout-btn');
const checkoutMessage = document.getElementById('checkout-message');

checkoutBtn.onclick = () => {
  if (cart.children.length === 0) {
    checkoutMessage.textContent = "Your cart is empty!";
    checkoutMessage.style.color = "red";
    return;
  }

  checkoutMessage.textContent = "Your cheese has been bought.";
  checkoutMessage.style.color = "black";

  
  cart.innerHTML = "";
};


// Get the elements
const sortSelect = document.getElementById('sort');
const mealCards = document.querySelectorAll('.Res-meal-card');
const addToCartButtons = document.querySelectorAll('.Res-add-button');
let viewCartButton = document.querySelector('#add-item-to-cart');
let cartItems = [];
if (localStorage.cartItems != null) {
  cartItems = JSON.parse(localStorage.getItem('cartItems'));
}

// Start Filter By Categoures Z
let allMealCards = Array.from(mealCards);
let listCategory = Array.from(document.querySelectorAll('.category-res-page'));
listCategory.forEach((item) => {
  item.addEventListener('click', (e) => {
    // REMOVE ALL CLASS ACTIVE FROM LABEL
    listCategory.map(labelActive => labelActive.classList.remove('active'));
    // ADD CLASS ACTIVE TO CURRENT TARTGE
    e.target.classList.add("active");
    filter(e.target.dataset.category);
  });
});
function filter(cate) {
  allMealCards.map(item => {
    if (item.dataset.category == cate) {
      return item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
// End Filter By Categoures Z

// Start
if (document.querySelector(".cart-content")) {
  cartItems.map((item, i) => {
    document.querySelector(".cart-content").innerHTML +=
      `
      <div class="cart-item-details" data-id="${i}">
              <img src="${item.imageSrc}" alt="${item.name}">
                        <h3>${item.name}</h3>
              <p class="item-price">${item.price} SAR</p>
                        <div class="item-details">
                            <div class="quantity-controls">
                                <button  class="decrease-btn">-</button>
                                <span class="quantity">${item.quantity}</span>
                                <button class="increase-btn">+</button>
                            </div>
                        </div>
                        <button class="delete-btn"><img src="images/Rubbish.PNG" alt="Meal 1"></button>
                    </div>
      `
  });
}
// End
// Sort meals
sortSelect.addEventListener('change', function () {
  const sortBy = this.value;
  const sortedMeals = Array.from(mealCards).sort((a, b) => {
    const aMealName = a.querySelector('h3').textContent.toLowerCase();
    const bMealName = b.querySelector('h3').textContent.toLowerCase();
    const aMealPrice = parseFloat(a.querySelector('.Res-price').textContent);
    const bMealPrice = parseFloat(b.querySelector('.Res-price').textContent);

    if (sortBy === 'a_to_z') {
      return aMealName.localeCompare(bMealName);
    } else if (sortBy === 'z_to_a') {
      return bMealName.localeCompare(aMealName);
    } else if (sortBy === 'low_to_high') {
      return aMealPrice - bMealPrice;
    } else if (sortBy === 'high_to_low') {
      return bMealPrice - aMealPrice;
    }
  });

  const mealsContainer = document.querySelector('.card-Res');
  sortedMeals.forEach(meal => {
    mealsContainer.appendChild(meal);
  });
});

// Update quantity and add to cart
addToCartButtons.forEach(button => {
  const decreaseBtn = button.querySelector('.decreasebtnRes');
  const increaseBtn = button.querySelector('.increasebtnRes');
  const quantity = button.querySelector('.quantityRes');

  decreaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantity.textContent);
    if (currentQuantity > 0) {
      currentQuantity--;
      quantity.textContent = currentQuantity;
    }
  });

  increaseBtn.addEventListener('click', () => {
    let currentQuantity = parseInt(quantity.textContent);
    currentQuantity++;
    quantity.textContent = currentQuantity;
  });
});


viewCartButton.addEventListener('click', () => {
  mealCards.forEach(mealCard => {
    const checkbox = mealCard.querySelector('input[type="checkbox"]');
    if (checkbox.checked) {
      const quantity = parseInt(mealCard.querySelector('.quantityRes').textContent);
      const mealName = mealCard.querySelector('h3').textContent;
      const mealPrice = parseFloat(mealCard.querySelector('.Res-price').textContent);
      const mealImageSrc = mealCard.querySelector('img').getAttribute('src');
      cartItems.push({
        name: mealName,
        price: mealPrice,
        quantity: quantity,
        imageSrc: mealImageSrc
      });
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  window.location.href = 'CartPage.html'; // Redirect to the Cart page
});





// working code but using qunity not the checked


// Add selected meals to cart and store in local storage
//viewCartButton.addEventListener('click', () => {
  //mealCards.forEach(mealCard => {
    //const quantity = parseInt(mealCard.querySelector('.quantityRes').textContent);
    //if (quantity > 0)
    // {
     // const mealName = mealCard.querySelector('h3').textContent;
     // const mealPrice = parseFloat(mealCard.querySelector('.Res-price').textContent);
      //const mealImageSrc = mealCard.querySelector('img').getAttribute('src');
      //cartItems.push({
       // name: mealName,
       // price: mealPrice,
        //quantity: quantity,
       // imageSrc: mealImageSrc
     // });
    //}
  //});

  //localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //window.location.href = 'CartPage.html'; // Redirect to the Cart page
//});



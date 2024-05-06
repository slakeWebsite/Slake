document.addEventListener('DOMContentLoaded', function () {






  // Get the elements
  const cartItemsElement = document.querySelectorAll('.cart-item-details');
  const clearBtn = document.querySelector('.clear-btn');
  const checkoutBtn = document.querySelector('.checkout-btn');
  let totalCost = 0; // Declare totalCost variable

  // Function to update the total cost
  function updateTotalCost() {
    totalCost = 0;
    cartItemsElement.forEach(item => {
      if (!item.classList.contains('deleted')) {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.querySelector('.item-price').textContent);
        totalCost += quantity * price;
      }
    });
  }

  // Update quantity
  cartItemsElement.forEach(item => {
    const decreaseBtn = item.querySelector('.decrease-btn');
    const increaseBtn = item.querySelector('.increase-btn');
    const quantity = item.querySelector('.quantity');
    const price = parseFloat(item.querySelector('.item-price').textContent);
    const deleteBtn = item.querySelector('.delete-btn');

    decreaseBtn.addEventListener('click', () => {
      let currentQuantity = parseInt(quantity.textContent);

      if (currentQuantity > 1) {
        currentQuantity--;
        cartItems[item.dataset.id].quantity = currentQuantity;
        quantity.textContent = currentQuantity;
        localStorage.cartItems = JSON.stringify(cartItems);
        updateTotalCost(); // Update total cost when quantity changes
      }
    });
    increaseBtn.addEventListener('click', () => {
      let currentQuantity = parseInt(quantity.textContent);
      currentQuantity++;
      cartItems[item.dataset.id].quantity = currentQuantity;
      quantity.textContent = currentQuantity;
      localStorage.cartItems = JSON.stringify(cartItems);
      quantity.textContent = currentQuantity;
      updateTotalCost(); // Update total cost when quantity changes
      // 
    });
    deleteBtn.addEventListener('click', () => {
      cartItems.splice(item.dataset.id, 1);
      localStorage.cartItems = JSON.stringify(cartItems);
      item.classList.add('deleted');
      item.remove();
      updateTotalCost(); // Update total cost when item is deleted
    });
  });

  // Clear the cart
  clearBtn.addEventListener('click', () => {
    cartItems = [];
    localStorage.clear("cartItems");
    cartItemsElement.forEach(item => {
      item.remove();
    });
    totalCost = 0; // Reset totalCost to zero
  });

  // Checkout
  checkoutBtn.addEventListener('click', () => {
    alert('Thank you for your purchase! Total cost: ' + totalCost + ' SAR');
    window.location.href = 'EvaluationPage.html';
  });
});

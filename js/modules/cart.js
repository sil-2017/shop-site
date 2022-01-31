function cart() {
  const cart = document.querySelector('#cart');
  const cartModalOverlay = document.querySelector('.cart-modal-overlay');
  const productRow = document.getElementsByClassName('product-row');
  const removeBtn = document.getElementsByClassName('remove-btn');
  const addToCart = document.getElementsByClassName('add-to-cart');

  cart.addEventListener('click', () => {
    if (cartModalOverlay.style.transform === 'translateX(-200%)'){
      cartModalOverlay.style.transform = 'translateX(0)';
    } else {
      cartModalOverlay.style.transform = 'translateX(-200%)';
    }
  });

  cartModalOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-modal-overlay')){
      cartModalOverlay.style.transform = 'translateX(-200%)';
    }
  });
  
  for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i];
    button.addEventListener('click', addToCartClicked);
    console.log(addToCart);
    
  }
  function addToCartClicked (event) {
    var btns = event.target;
    var cartItem = btns.parentElement;
    var price = cartItem.getElementsByClassName('product-price')[0].innerText;
    var inputEl = cartItem.getElementsByClassName('product-quantity')[0];
    var currentValue = inputEl.value;
    var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
    addItemToCart (price, imageSrc, currentValue);
    updateCartPrice();
  }

  function addItemToCart (price, imageSrc, currentValue) {
    var productRow = document.createElement('div');
    productRow.classList.add('product-row');
    var productRows = document.getElementsByClassName('product-rows')[0];
    var cartRowItems = `<div class="product-row">
          <img class="cart-image" src="${imageSrc}" alt="">
          <span class ="cart-price">${price}</span>
          <span class="cart-quant">${currentValue}</span>kg
          <button class="remove-btn">Remove</button>
    </div>`
    productRow.insertAdjacentHTML('afterBegin',cartRowItems);
    productRows.insertAdjacentElement('afterBegin',productRow);
    // productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem);
    updateCartPrice();
  }
  for (var i = 0; i < removeBtn.length; i++) {
    var button = removeBtn[i];
    button.addEventListener('click', removeItem);
  }

  function removeItem (event) {
    var btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    updateCartPrice();
  }
  function updateCartPrice() {
    var total = 0;
    for (var i = 0; i < productRow.length; i += 2) {
      var cartRow = productRow[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantity = cartRow.getElementsByClassName('cart-quant')[0].innerText;
      var price = parseFloat(priceElement.innerText);
      total = total + parseFloat(price * quantity);
      if(productRow.length == 0) {
        total = 0;
      }
    }
    document.getElementsByClassName('total-price')[0].innerHTML = 'cents' + total;
    if(total >= 100){
      total = total/100;
      console.log(total);
      document.getElementsByClassName('total-price')[0].innerHTML = '$' + total.toFixed(2);
    }
    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2;
  }
}
export default cart();

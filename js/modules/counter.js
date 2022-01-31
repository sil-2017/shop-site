 function counter() {
    const btns = document.querySelectorAll('.counter__btn');
    const inputs = document.querySelectorAll('.product-quantity');
  
    btns.forEach(btn => {
      btn.addEventListener('click', counterState);
      btn.addEventListener('click', countPrice);
    });
  
    inputs.forEach(input => {
      input.addEventListener('keyup', countPrice)
    });
  
    function counterState() {
      const dir = this.dataset.direction;
      const inputEl = this.parentElement.querySelector('.product-quantity');
      let currentValue = inputEl.value;
      dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue)
    };
  
    const counterPlus = (el, val) => {
      el.value = +val + 1;
    };
  
    const counterMinus = (el, val) => {
      if (+val - 1) el.value = +val - 1;
    };
  
    function countPrice() {
      const totalPrice = this.parentElement.nextElementSibling;
      const currentPriceValue = parseFloat(this.closest('.card-prod').querySelector('.product-price').innerText);
      const inputEl = this.parentElement.querySelector('.product-quantity');
      let currentValue = inputEl.value;
      let totalPriceNumber;
      if (currentValue > 0) {
        totalPriceNumber = +currentPriceValue * +currentValue;
        totalPrice.textContent = `Total price ${totalPriceNumber} cents`;
      } else {
        totalPrice.textContent = '';
      }
    };
  }
  
  
  export default  counter();
  

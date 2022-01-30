/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/***/ (function() {

let app = document.getElementById("product-list");
fetch("data.json").then(response => response.json()).then(json => {
  for (var i = 0; i <= json.length - 1; i++) {
    console.log("Элемент [ " + i + " ] = " + json[i].name);
    let title = json[i].name;
    let cents = json[i].cents;
    let img = json[i].img;
    let el = document.createElement("div");
    el.innerHTML = `<div class="card-prod"> 
        <p class="card-prod-name"> ${title} </p>
        <img class="product-image" src=" ${img}"> 
        <p class="product-price">${cents} cents</p>
        <div class="product__footer">
        <div class="counter">
        <div class="counter__btn" data-direction="minus">-</div>
        <input class="product-quantity" type="number" value="1">
        <div class="counter__btn" data-direction="plus">+</div>
        </div>
        <span class="product__total-price"></span>
        </div>
        <button class="add-to-cart">Add to cart</button>
        </div>`;
    app.appendChild(el);
  }
}).catch(function (err) {
  console.log(err);
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ "./src/js/modules/cart.js");
/* harmony import */ var _modules_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/counter.js */ "./src/js/modules/counter.js");
/* harmony import */ var _modules_timer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer.js */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_sliders_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sliders.js */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/search.js */ "./src/js/modules/search.js");
/* harmony import */ var _modules_burger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/burger.js */ "./src/js/modules/burger.js");






window.addEventListener('DOMContentLoaded', () => {
  "use strict";

  let deadline = '2021-11-9';
  (0,_modules_timer_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.sec2', deadline);
  (0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_counter_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_sliders_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_search_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_burger_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function burger() {
  let hamburger = document.querySelector('.hamburger');
  let menu = document.querySelector('.nav-r-hamburger ul');
  let nav = document.querySelector('.nav');
  hamburger.addEventListener('click', function (e) {
    // hamburger.classList.toggle('isactive');
    if (e.target.classList.contains('hamburger')) {
      this.classList.add('isactive');
      menu.style.transform = 'translateX(0)';
      nav.style.height = "120px";
    } else {
      this.classList.remove('isactive');
      menu.style.transform = 'translateX(-110%)';
      nav.style.height = "60px";
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (burger());

/***/ }),

/***/ "./src/js/modules/cart.js":
/*!********************************!*\
  !*** ./src/js/modules/cart.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function cart() {
  const cart = document.querySelector('#cart');
  const cartModalOverlay = document.querySelector('.cart-modal-overlay');
  const productRow = document.getElementsByClassName('product-row');
  const removeBtn = document.getElementsByClassName('remove-btn');
  const addToCart = document.getElementsByClassName('add-to-cart'); // const addToCart = document.getComputedStyle('.add-to-cart');

  cart.addEventListener('click', () => {
    if (cartModalOverlay.style.transform === 'translateX(-200%)') {
      cartModalOverlay.style.transform = 'translateX(0)';
    } else {
      cartModalOverlay.style.transform = 'translateX(-200%)';
    }
  });
  cartModalOverlay.addEventListener('click', e => {
    if (e.target.classList.contains('cart-modal-overlay')) {
      cartModalOverlay.style.transform = 'translateX(-200%)';
    }
  }); // end of close cart modal
  // add products to cart

  for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i];
    button.addEventListener('click', addToCartClicked);
  }

  function addToCartClicked(event) {
    var btns = event.target;
    var cartItem = btns.parentElement;
    var price = cartItem.getElementsByClassName('product-price')[0].innerText;
    var inputEl = cartItem.getElementsByClassName('product-quantity')[0];
    var currentValue = inputEl.value;
    var imageSrc = cartItem.getElementsByClassName('product-image')[0].src;
    addItemToCart(price, imageSrc, currentValue);
    updateCartPrice();
  }

  function addItemToCart(price, imageSrc, currentValue) {
    var productRow = document.createElement('div');
    productRow.classList.add('product-row');
    var productRows = document.getElementsByClassName('product-rows')[0];
    var cartRowItems = `<div class="product-row">
          <img class="cart-image" src="${imageSrc}" alt="">
          <span class ="cart-price">${price}</span>
          <span class="cart-quant">${currentValue}</span>kg
          <button class="remove-btn">Remove</button>
    </div>`;
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem);
    updateCartPrice();
  } // Remove products from cart


  for (var i = 0; i < removeBtn.length; i++) {
    var button = removeBtn[i];
    button.addEventListener('click', removeItem);
  }

  function removeItem(event) {
    var btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    updateCartPrice();
  } // update total price


  function updateCartPrice() {
    var total = 0;

    for (var i = 0; i < productRow.length; i += 2) {
      var cartRow = productRow[i];
      var priceElement = cartRow.getElementsByClassName('cart-price')[0];
      var quantity = cartRow.getElementsByClassName('cart-quant')[0].innerText;
      var price = parseFloat(priceElement.innerText);
      total = total + parseFloat(price * quantity);

      if (productRow.length == 0) {
        total = 0;
      }
    } // console.log('$' + total); 


    document.getElementsByClassName('total-price')[0].innerHTML = 'cents' + total;

    if (total >= 100) {
      total = total / 100;
      console.log(total);
      document.getElementsByClassName('total-price')[0].innerHTML = '$' + total.toFixed(2);
    }

    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (cart());

/***/ }),

/***/ "./src/js/modules/counter.js":
/*!***********************************!*\
  !*** ./src/js/modules/counter.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function counter() {
  const btns = document.querySelectorAll('.counter__btn');
  const inputs = document.querySelectorAll('.product-quantity');
  btns.forEach(btn => {
    btn.addEventListener('click', counterState);
    btn.addEventListener('click', countPrice);
  });
  inputs.forEach(input => {
    input.addEventListener('keyup', countPrice);
  });

  function counterState() {
    const dir = this.dataset.direction;
    const inputEl = this.parentElement.querySelector('.product-quantity');
    let currentValue = inputEl.value;
    dir === 'plus' ? counterPlus(inputEl, currentValue) : counterMinus(inputEl, currentValue);
  }

  ;

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
  }

  ;
}

/* harmony default export */ __webpack_exports__["default"] = (counter());

/***/ }),

/***/ "./src/js/modules/search.js":
/*!**********************************!*\
  !*** ./src/js/modules/search.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function search() {
  let input = document.getElementById('filter-input');
  input.addEventListener('keyup', function () {
    let filter = input.value.toLowerCase(),
        filterElements = document.querySelectorAll('#product-list .card-prod');
    filterElements.forEach(item => {
      if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (search());

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function sliders() {
  let slideIndex = 1,
      dir = 'horizontal',
      paused = false; // const items = document.querySelectorAll(slides);

  const items = document.querySelectorAll('.slider-item');

  function showSlides(n) {
    if (n > items.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = items.length;
    }

    items.forEach(item => {
      // item.classList.add("animated");
      item.style.display = "none";
    });
    items[slideIndex - 1].style.display = 'block';
  }

  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  try {
    const prevBtn = document.querySelector('.main-prev-btn'),
          nextBtn = document.querySelector('.main-next-btn');
    prevBtn.addEventListener('click', () => {
      plusSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', () => {
      plusSlides(1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
  } catch (e) {}

  function activateAnimation() {
    if (dir === 'horizontal') {
      paused = setInterval(function () {
        plusSlides(1);
        items[slideIndex - 1].classList.remove('slideInRight');
        items[slideIndex - 1].classList.add('slideInLeft');
      }, 3000);
    }
  }

  activateAnimation();
  items[0].parentNode.addEventListener('mouseenter', () => {
    clearInterval(paused);
  });
  items[0].parentNode.addEventListener('mouseleave', () => {
    activateAnimation();
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sliders());

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function timer(id, deadline) {
  const addZero = num => {
    if (num <= 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const getTimeRemaining = endtime => {
    const t = Date.parse(endtime) - Date.parse(new Date()),
          // seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor(t / 1000 / 60 % 60),
          hours = Math.floor(t / (1000 / 60 * 60 * 60) % 24),
          days = Math.floor(t / (1000 * 60 * 60 * 24));
    console.log('Date: ', +t);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes
    };
  };

  const setClock = (selector, endtime) => {
    var day = 1;
    var d = new Date().getDate();
    var c = new Date('2021-11-9').getDate();
    console.log('D: ', d);
    console.log('c: ', c);

    if (c <= d) {
      for (var i = new Date('2021-11-9'); i <= new Date("11/15/2021"); i.setDate(i.getDate() + 1)) {
        c = c + day;
        console.log('Date seeet: ', c);
      }
    }

    const timer = document.querySelector(selector),
          days = timer.querySelector("#days"),
          hours = timer.querySelector("#hours"),
          minutes = timer.querySelector("#minutes"),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      console.log("endtime", t.days);

      if (t.total <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        clearInterval(timeInterval); // var result = new Date(new Date(endtime).setDate(new Date(endtime).getDate() + day));
        // console.log('Date: ', result);
        // t = getTimeRemaining(result);
      }
    }
  };

  setClock(id, deadline);
}

/* harmony default export */ __webpack_exports__["default"] = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/js/json.js");
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/js/modules/burger.js");
/******/ 	__webpack_require__("./src/js/modules/cart.js");
/******/ 	__webpack_require__("./src/js/modules/counter.js");
/******/ 	__webpack_require__("./src/js/modules/search.js");
/******/ 	__webpack_require__("./src/js/modules/sliders.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/modules/timer.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=script.js.map

import cart from './modules/cart.js';
import counter from './modules/counter.js';
import timer from './modules/timer.js';
import sliders from './modules/sliders.js';
import search from './modules/search.js';
import burger from './modules/burger.js';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let deadline = '2021-11-9';
    timer('.sec2',deadline);
    cart();
    counter();
    sliders();
    search();
    burger();
    
});
let app =  document.getElementById("product-list");

    fetch("data.json")
    .then(response => response.json())
    .then(json => {
    for (var i = 0; i <= json.length-1; i++) {
        console.log("Элемент [ "+ i +" ] = " + json[i].name);
        let title = json[i].name;
        let cents = json[i].cents;
        let img = json[i].img;
         app.insertAdjacentHTML('afterBegin',`<div class="card-prod"> 
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
        </div>`);
    }
    }).catch(function(err) {
    console.log(err);
    });
    

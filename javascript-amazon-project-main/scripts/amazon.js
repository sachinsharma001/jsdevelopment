import {cart} from '../scripts/cart.js';
import {products} from '../data/products.js';
let productsHTML='';
products.forEach((products)=>{
    productsHTML+= `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${products.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${products.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${products.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              $${products.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${(products.priceCents/100).toFixed(2)}
          </div>
          <div class="product-quantity-container">
            <select  class="js-quantity-selector-${products.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${products.id}">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button data-product-id="${products.id}" class="add-to-cart-button button-primary js-add-to-cart">
            Add to Cart
          </button>
        </div>`;

})

const addedMessageTimeouts = {};

document.querySelector('.js-products-grid').innerHTML=productsHTML
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    const productId=button.dataset.productId;
    let matchingItem;
    cart.forEach((item)=>{
      if(productId===item.productId){
        matchingItem=item
      }
    });


    const quantitySelector= document.querySelector(`.js-quantity-selector-${productId}`)
    const quantity=Number(quantitySelector.value);
    // console.log(quantitySelector)
    // console.log(quantity)


    if(matchingItem){
      matchingItem.quantity+=quantity;
    }
    else{
    cart.push({
      productId,
       quantity
    });
    }  
    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quantity
    });
    document.querySelector('.js-cart-quantity')
    .innerHTML=cartQuantity;

     const addedMessage = document.querySelector(`.js-added-to-cart-${productId}`);
     addedMessage.classList.add('added-to-cart-visible');
     const previousTimeoutId = addedMessageTimeouts[productId];
      if (previousTimeoutId) {
        clearTimeout(previousTimeoutId);
      }
     
     const timeoutId= setTimeout(()=>{
      addedMessage.classList.remove('added-to-cart-visible')
     },2000)    
  });
});
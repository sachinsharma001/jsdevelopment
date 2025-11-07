import { rerenderOrderSummary } from './checkout/orderSummary.js'
import { rerenderPaymentSummary } from './checkout/paymentSummary.js'
import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';
//  import '../data/backend-practice.js'


Promise.all([
    new Promise((resolve) => {
        loadProducts(() => {
            resolve("value1");
        });
    }),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        })

    })
]).then((value) => {
    console.log(value)
    renderCheckoutHeader();
    rerenderOrderSummary();
    rerenderPaymentSummary();
})

// ^^^^
// |||| instead of call back we use promise to dea with asynchronous function
/*
loadProducts(()=>{
    loadCart(()=>{
        renderCheckoutHeader();
        rerenderOrderSummary();
        rerenderPaymentSummary();
        })

});
*/
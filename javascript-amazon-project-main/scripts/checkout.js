import {rerenderOrderSummary} from './checkout/orderSummary.js'
import {rerenderPaymentSummary} from './checkout/paymentSummary.js'
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';
import { loadProducts } from '../data/products.js';
//  import '../data/backend-practice.js'
loadProducts(()=>{
 renderCheckoutHeader();
 rerenderOrderSummary();
 rerenderPaymentSummary();
});


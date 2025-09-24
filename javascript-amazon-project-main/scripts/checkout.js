import {rerenderOrderSummary} from './checkout/orderSummary.js'
import {rerenderPaymentSummary} from './checkout/paymentSummary.js'
import {renderCheckoutHeader} from './checkout/checkoutHeader.js';

renderCheckoutHeader();
rerenderOrderSummary();
rerenderPaymentSummary();

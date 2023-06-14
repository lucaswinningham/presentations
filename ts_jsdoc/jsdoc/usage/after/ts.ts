import { Sizes, inStock, type Size } from './js';
const placeOrder = (size: Size) => inStock(size);
placeOrder(Sizes.lg); // ✅ -> false
placeOrder('XS'); // ❌ (yay!)
// Argument of type '"XS"' is not assignable to parameter of type 'Size'
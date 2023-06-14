import { Sizes, inStock } from './js';
// const placeOrder: (size: any) => boolean
const placeOrder = (size) => inStock(size);
placeOrder(Sizes.lg); // ✅ -> false
placeOrder('XS'); // ✅ (should be ❌)
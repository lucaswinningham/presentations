// (alias) type ShirtSizes = "SM" | "MD" | "LG"
// (alias) namespace ShirtSizes
// (alias) const ShirtSizes: {
//     readonly small: "SM";
//     readonly medium: "MD";
//     readonly large: "LG";
// }
// import ShirtSizes
import { ShirtSizes } from './shirtSizes';

const toStringLiteral: 'SM' = ShirtSizes.small; // ✅
const fromStringLiteral: ShirtSizes.small = 'SM'; // ✅
const outOfStock = (size: ShirtSizes) => size === ShirtSizes.large;
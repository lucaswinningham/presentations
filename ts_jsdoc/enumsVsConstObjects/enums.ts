import { SockSizes } from './sockSizes';

const toStringLiteral: 'SM' = SockSizes.small; // ✅
const fromStringLiteral: SockSizes.small = 'SM'; // ❌
// Type '"SM"' is not assignable to type 'SockSizes.small'

const outOfStock = (size: SockSizes) => size === SockSizes.small;
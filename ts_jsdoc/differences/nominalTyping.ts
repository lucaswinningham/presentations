type USD = number & { __brand: 'USD' };
type Brand<K, T> = K & { __brand: T };
type EUR = Brand<number, 'EUR'>;

const usd = 10 as USD; // `as`
const eur = 10 as EUR; // `as`

const gross = (net: USD, tax: USD): USD => (net + tax) as USD;

gross(usd, usd); // ✅
gross(eur, usd); // ❌
// Argument of type 'EUR' is not assignable to parameter of type 'USD'.
  // Type 'EUR' is not assignable to type '{ __brand: "USD"; }'.
    // Types of property '__brand' are incompatible.
      // Type '"EUR"' is not assignable to type '"USD"'.
type NumberDictionary = {
  [index: string]: number;
  length: number; // ✅
  name: string; // ❌
  // Property 'name' of type 'string' is not assignable to 'string' index type 'number'
};

type NumStrDict = {
  readonly [index: string]: number | string;
  length: number; // ✅
  readonly name: string; // ✅
};

const dictionary: NumStrDict = { length: 4, name: 'dict', hi: 'hey', why: 42 };

dictionary.length = 5; // ✅
dictionary.name = 'hwoops'; // ❌
// Cannot assign to 'name' because it is a read-only property.
dictionary.hi = 'oh no'; // ❌
// Index signature in type 'NumStrDict' only permits reading.
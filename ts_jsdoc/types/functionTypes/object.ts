type MyObject = object; // `any` adjacent

let myObject: MyObject;

myObject = {}; // ✅
myObject = { hi: 'hey' }; // ✅

// Because functions;
//  - have Object.prototype in their prototype chain
//  - are instanceof Object
//  - you can call Object.keys on them
//  - etc.
myObject = () => {}; // ✅

myObject = 42; // ❌
// Type 'number' is not assignable to type 'object'
let myObject: object;

myObject = {}; // ✅
myObject = { hi: 'hey' }; // ✅

myObject = () => {}; // ✅
myObject = []; // ✅
myObject = /foo/; // ✅
myObject = 42; // ❌
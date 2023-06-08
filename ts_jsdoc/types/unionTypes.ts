type Flag = 'auto' | 'all' | 'rec'; // literal union
type Options = { width: number; height: number };

const configure = (x: Options | Flag) => {};

configure({ width: 100, height: 100 }); // ✅
configure('auto'); // ✅
configure('automatic'); // ❌
// Argument of type '"automatic"' is not
//   assignable to parameter of type 'Options | Flag'
type Flag = 'auto' | 'all' | 'rec'; // union of string literals
type Options = { width: number; height: number };

const configure = (configurationArgument: Options | Flag) => {};

configure('auto'); // ✅
configure({ width: 100, height: 100 }); // ✅
configure('automatic'); // ❌
configure({ width: 50 }); // ❌
configure({ breadth: 10, height: 20 }); // ❌
type Name = [string, string];
const name: Name = ['Luke', 'Winningham']; // ✅
const badName: Name = ['Lucas', 'James', 'Winningham']; // ❌
// Type '[string, string, string]' is not assignable to type 'Name'.
//   Source has 3 element(s) but target allows only 2.

type State<T> = [T, (newState: T) => T];

type Coordinates = [number, number, number?]; // 2D or 3D
const d2: Coordinates = [1, 2]; // ✅
const d3: Coordinates = [3, 4, 5]; // ✅

type Pair = [string, number];
// (parameter) one: string
// (parameter) two: number
const getPair = ([one, two, three]: Pair) => {}; // ❌
// Tuple type 'Pair' of length '2' has no element at index '2'.

type ReadonlyArbitraryTuple = readonly [string, number, ...boolean[]];
const readonlyArbitraryTuple: ReadonlyArbitraryTuple = ['world', 3, true, false];
readonlyArbitraryTuple[0] = 'hello'; // ❌
// Cannot assign to '0' because it is a read-only property.
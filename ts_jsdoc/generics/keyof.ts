const getProperty = <Type, Key extends keyof Type>(obj: Type, key: Key) => obj[key];
const x = { a: 1, b: 2, c: 3 };
getProperty(x, 'a'); // ✅
getProperty(x, 'd'); // ❌
// Argument of type '"d"' is not assignable to parameter of type '"a" | "b" | "c"

type Point = { x: number; y: number };
// type P = "x" | "y"
type P = keyof Point;

type Arrayish = { [n: number]: unknown };
// type A = number
type A = keyof Arrayish;

type Mapish = { [k: string]: boolean };
// type M = string | number
type M = keyof Mapish;

// JavaScript object keys are always coerced to a string,
// so obj[0] is always the same as obj["0"]
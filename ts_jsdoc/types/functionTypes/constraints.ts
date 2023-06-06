const longest = <T extends { length: number }>(a: T, b: T) =>
  (a.length >= b.length) ? a : b;
 
// const longerArray: number[]
const longerArray = longest([1, 2], [1, 2, 3]);
// const longerString: "alice" | "bob"
const longerString = longest('alice', 'bob');

const notOK = longest(10, 100); // ❌
// Argument of type 'number' is not assignable
//   to parameter of type '{ length: number; }'
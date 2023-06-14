console.log(typeof "Hello world"); // -> "string"

const f = () => ({ x: 10, y: 3 });

type Return = ReturnType<f>; // ❌
// 'f' refers to a value, but is being used as a type here. Did you mean 'typeof f'?

// type FReturn = { x: number; y: number }
type FReturn = ReturnType<typeof f>; // ✅
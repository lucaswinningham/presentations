// (parameter) x: number | undefined
const f = (x?: number) => x;
f(); // ✅ -> undefined
f(10); // ✅ -> 10
f(undefined); // ✅ -> undefined

// (parameter) x: number
const g = (x: number = 5) => x;
g(); // ✅ -> 5
g(20); // ✅ -> 20
g(undefined); // ✅ -> 5
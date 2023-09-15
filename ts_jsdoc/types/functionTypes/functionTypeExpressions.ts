type GreeterFn = (a: string) => void;

// const greeter: (fn: GreeterFn) => void
const greeter = (fn: GreeterFn) => fn('Hello, World'); // ✅

greeter(console.log);

type HiFn = (string) => void; // ✅ (but also ❌)
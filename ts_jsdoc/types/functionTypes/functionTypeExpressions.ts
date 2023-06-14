type GreeterFn = (a: string) => void;
const greeter = (fn: GreeterFn) => fn('Hello, World'); // ✅

greeter(console.log);

// Parameter name is required:
type HiFn = (string) => void; // ✅ (but also ❌)
// Parameter has a name but no type.
//   Did you mean 'arg0: string'?
// (parameter) string: any
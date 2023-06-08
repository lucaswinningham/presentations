const greeter = (fn: (a: string) => void) => fn('Hello, World'); // ✅

greeter(console.log);

// Parameter name is required:
type HiFn = (string) => void; // ❌
// Parameter has a name but no type.
//   Did you mean 'arg0: string'?
// (parameter) string: any
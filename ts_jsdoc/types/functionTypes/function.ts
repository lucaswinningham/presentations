// const doSomething: (f: Function) => any
const doSomething = (f: Function) => f(); // ❌ Unsafe

// const doSomethingToo: (f: () => void) => void
const doSomethingToo = (f: () => void) => f(); // ✅ Safer
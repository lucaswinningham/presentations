// const noop: () => void
const noop = () => {};
noop(); // -> undefined

// const noopExplicit: () => void
const noopExplicit = () => { return; };
noopExplicit() // -> undefined

type VoidFunc = () => void;
const f: VoidFunc = () => 'hi'; // ✅ ... wait, what?
// const fResult: void
const result = f().length; // ❌ -> 2
// Property 'length' does not exist on type 'void'

// Array<T>.forEach(cb: (v: T, i: T, a: T[]) => void, thisArg?: any ): void
// Array<number>.push(...items: number[]): number
const a = [0];
[1, 2, 3].forEach((el) => a.push(el)); // ✅
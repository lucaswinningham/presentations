// const firstElement: (arr: any[]) => any
const firstElement = (arr: any[]) => arr[0]; // ❌

// const firstElementToo: <Type>(arr: Type[]) => Type | undefined
const firstElementToo = <Type>(arr: Type[]): Type | undefined => arr[0]; // ✅

// const s: string | undefined
const s = firstElementToo(['a', 'b', 'c']);
// const u: undefined
const u = firstElementToo([]);

// Inference

const map = <Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] => arr.map(func);

// (parameter) n: string
// const parsed: number[]
const parsed = map(['1', '2', '3'], (n) => parseInt(n));
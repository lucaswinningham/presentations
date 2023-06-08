// Push type parameters down
const firstElement = <T extends any[]>(a: T)  => a[0]; // ❌
const b = firstElement([1, 2, 3]); // ❌ const b: any
const firstElementToo = <T>(a: T[])  => a[0]; // ✅
const a = firstElementToo([1, 2, 3]); // ✅ const a: number

// Use fewer type Parameters
const filter = <T, F extends (arg: T) => boolean>(a: T[], f: F): T[] => a.filter(f); // ❌
const filterToo = <T>(a: T[], f: (arg: T) => boolean): T[] => a.filter(f); // ✅

// Type parameters should appear twice
const greet = <Str extends string>(s: Str) => console.log('Hello, ' + s); // ❌
const greetToo = (s: string) => console.log('Hello, ' + s); // ✅
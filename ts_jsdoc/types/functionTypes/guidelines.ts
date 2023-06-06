// Push type parameters down
const firstElement1 = <T>(a: T[])  => a[0];
const firstElement2 = <T extends any[]>(a: T)  => a[0];
const a = firstElement1([1, 2, 3]); // ✅ const a: number
const b = firstElement2([1, 2, 3]); // ❌ const b: any

// Use fewer type Parameters
const filter1 = <T>(a: T[], f: (arg: T) => boolean): T[] => a.filter(f); // ✅
const filter2 = <T, F extends (arg: T) => boolean>(a: T[], f: F): T[] => a.filter(f); // ❌

// Type parameters should appear twice
const greet1 = <Str extends string>(s: Str) => console.log('Hello, ' + s); // ❌
const greet2 = (s: string) => console.log('Hello, ' + s); // ✅
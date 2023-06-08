const myForEach = (a: any[], cb: (arg: any, i?: number) => void) => a.forEach(cb);
myForEach([1, 2, 3], (a) => console.log(a)); // ✅
myForEach([1, 2, 3], (a, i) => console.log(a, i)); // ✅
myForEach([1, 2, 3], (a, i) => console.log(i.toFixed())); // ❌
// 'i' is possibly 'undefined'

const myForEachToo = (a: any[], cb: (arg: any, i: number) => void) => a.forEach(cb);
myForEachToo([1, 2, 3], (a) => console.log(a)); // ✅
myForEachToo([1, 2, 3], (a, i) => console.log(a, i)); // ✅
myForEachToo([1, 2, 3], (a, i) => console.log(i.toFixed())); // ✅
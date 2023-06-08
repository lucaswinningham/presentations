const combine = <T>(a1: T[], a2: T[]): T[] => a1.concat(a2);

const arr = combine([1, 2, 3], ["hello"]); // ❌
// Type 'string' is not assignable to type 'number'.

const shhIsOk = combine<string | number>([1, 2, 3], ["hello"]); // ✅
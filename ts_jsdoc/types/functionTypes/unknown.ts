const f = (a: any) => a.b(); // ✅
const g = (a: unknown) => a; // ✅
const h = (a: unknown) => a.b(); // ❌
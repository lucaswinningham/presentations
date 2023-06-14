const f = (a: any) => a.b(); // ✅ (but also ❌)

const g = (a: unknown) => a.b(); // ❌
// 'a' is of type 'unknown'

const h = (a: unknown) => a; // ✅
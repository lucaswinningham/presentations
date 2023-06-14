import { Circle, Square, Triangle } from './shapes';

const partialCircle: Partial<Circle> = {}; // ✅

const requiredSquare: Required<Square> = { kind: 'square' }; // ❌
// Property 'l' is missing in type '{ kind: "square"; }' but
// required in type 'Required<Square>'

const readonlyTriangle: Readonly<Triangle> = { kind: 'triangle', b: 3, h: 12 };
readonlyTriangle.b = 4; // ❌
// Cannot assign to 'b' because it is a read-only property
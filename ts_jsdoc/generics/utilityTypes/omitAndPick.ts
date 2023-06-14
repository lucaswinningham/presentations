import { Triangle } from './shapes';

// type TriangleKind = { kind: 'triangle' }
type TriangleKind = Omit<Triangle, 'b' | 'h'>;

// type TriangleProperties = { b: number; h: number }
type TriangleProperties = Pick<Triangle, 'b' | 'h'>;
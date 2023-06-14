export type Circle = { kind: 'circle'; r: number };
export type Square = { kind: 'square'; l?: number };
export type Triangle = { kind: 'triangle'; b: number; h: number };
export type Shape = Circle | Square | Triangle;
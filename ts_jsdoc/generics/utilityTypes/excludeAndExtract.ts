import { Shape } from './shapes';

// type NotCircle = Square | Triangle
type NotCircle = Exclude<Shape, { kind: 'circle' }>;

// type ExtractedCircle = Circle
type ExtractedCircle = Extract<Shape, { kind: 'circle' }>;
import { Shape } from './shapes';

const makeShape = <T extends Shape>(params: Shape): Shape => params as T;

// type MakeShapeParams = [params: Shape]
type MakeShapeParams = Parameters<typeof makeShape>;

// type MakeShapeReturn = Circle | Square | Triangle
type MakeShapeReturn = ReturnType<typeof makeShape>;
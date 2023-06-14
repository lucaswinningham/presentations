import { Circle, Shape } from './shapes';

// type AwaitedCircle = Circle
type AwaitedCircle = Awaited<Promise<Circle>>;

// type AwaitedShape = Circle | Square | Triangle
type AwaitedShape = Awaited<Promise<Promise<Promise<Shape>>>>;
const fail = (msg: string): never => {
  throw new Error(msg);
};

const groundhogDay = (): never => {
  while (true) {
    console.log('So put your little hand in mine...');
  }
}

type Rectangle = { kind: 'rectangle'; height: number; width: number };
type Square = { kind: 'square'; length: number };
type Triangle = { kind: 'triangle'; base: number, height: number };
type Shape = Rectangle | Square | Triangle;

// const area: (shape: Shape) => number
const area = (shape: Shape) => {
  if (shape.kind === 'rectangle') {
    return shape.height * shape.width;
  }

  if (shape.kind === 'square') {
    return shape.length * shape.length;
  }

  const _unhandled: never = shape;

  return _unhandled;
}
type Primitive = string | number | boolean | bigint | symbol; // union
type Person = {
  name: Primitive;
  age: Primitive;
  isAwesome?: Primitive; // optional
};

const luke: Person = {
  name: 'Luke',
  age: 25, // at heart
  // isAwesome: ??? // undefined, jury's out
};
// generate types from other types
type OptionsFlags<Type> = { [Property in keyof Type]: boolean };
type TSCompile = { pretty: () => void; strict: () => void; noEmit: () => void };
// type TSCompileOptions = { pretty: boolean; strict: boolean; noEmit: boolean }
type TSCompileOptions = OptionsFlags<TSCompile>;

type WithGetters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

type User = { name: string; age: number; location: string };

// type GettableUser = { getName: () => string; getAge: () => number; getLocation: () => string }
type GettableUser = WithGetters<User>;

// Iterate over union
type Callable<UnionTypes extends { kind: string }> = {
  [Type in UnionTypes as Type['kind']]: (event: Type) => void;
}

type Square = { kind: 'square', l: number };
type Circle = { kind: 'circle', r: number };

// type ShapesCallable = { square: (event: Square) => void; circle: (event: Circle) => void }
type ShapesCallable = Callable<Square | Circle>;
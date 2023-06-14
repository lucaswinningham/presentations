type Flatten<T> = T extends any[] ? T[number] : T;

// type Str = string
type Str = Flatten<string[]>;

// type Num = number
type Num = Flatten<number>;

// Using `infer`
type FlattenToo<Type> = Type extends Array<infer Item> ? Item : Type;
type ReturnTypeToo<T> = T extends (...a: never[]) => infer Return ? Return : never;

// Distribution

type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = string[] | number[]
type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
// type StrOrNumArr = (string | number)[]
type StrOrNumArr = ToArrayNonDist<string | number>;
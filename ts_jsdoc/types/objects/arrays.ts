type MyArray<Type> = Array<Type>;
// same as
type MyArrayToo<Type> = Type[];

type MyImmutableArray<Type> = ReadonlyArray<Type>;
// same as
type MyImmutableArrayToo<Type> = readonly Type[];

const myArray: string[] = [];
myArray.push('hello'); // ✅

const myImmutableArray: readonly string[] = ['hi', 'hey', 'yo'];
myImmutableArray.push('sup'); // ❌
// Property 'push' does not exist on type 'readonly string[]'
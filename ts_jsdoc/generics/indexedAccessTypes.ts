type Person = { age: number; name: string; alive: boolean };
type People = Person[];
const people: People = [{ name: 'Eve', age: 38, alive: false }];

// type Age = number
type Age = Person['age'];
// type AgeOrName = string | number
type AgeOrName = Person['age' | 'name'];
// type KeyOfPerson = string | number | boolean
type KeyOfPerson = Person[keyof Person];

const aliveKey = 'alive';
type Alive = Person[aliveKey]; // ❌
// 'aliveKey' refers to a value, but is being used as a type here. Did you mean 'typeof aliveKey'?
type AliveToo = Person['alve']; // ❌
// Property 'alve' does not exist on type 'Person'

type AliveKeyOrNameKey = 'alive' | 'name';
// type AliveOrName = string | boolean
type AliveOrName = Person[AliveKeyOrNameKey];

// type PeoplePerson = { name: string; age: number; alive: boolean }
type PeoplePerson = typeof people[number];
// type AgeToo = number
type AgeToo = typeof people[number]['age'];
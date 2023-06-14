type DeepPartial<T> = T extends object ? { [P in keyof T]+?: DeepPartial<T[P]>; } : T;

type User = { profile: { address: { street: string; city: string; state: string } } };

const user1: User = {}; // ❌
// Property 'profile' is missing in type '{}' but required in type 'User'

const user2: User = { profile: {} }; // ❌
// Property 'address' is missing in type '{}' but required in type
// '{ address: { street: string; city: string; state: string; }; }'

const user3: User = { profile: { address: { street: '123 Fake St' } } }; // ❌
// Type '{ street: string; }' is missing the following properties from
// type '{ street: string; city: string; state: string; }': city, state

const user1Too: Partial<User> = {}; // ✅
const user1Again: DeepPartial<User> = {}; // ✅

const user2Too: Partial<User> = { profile: {} }; // ❌
// same error as before
const user2Again: DeepPartial<User> = { profile: {} }; // ✅

const user3Too: Partial<User> = { profile: { address: { street: '123 Fake St' } } }; // ❌
// same error as before
const user3Again: DeepPartial<User> = { profile: { address: { street: '123 Fake St' } } }; // ✅
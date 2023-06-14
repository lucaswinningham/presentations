type User = { name: string };
const user: User = { name: 'Luke' };
user.name = '!Luke'; // ✅

type ImmutableUser = { readonly name: string };
const immutableUser: ImmutableUser = { name: 'Luke' };
immutableUser.name = '!Luke'; // ❌
// Cannot assign to 'name' because it is a read-only property.

type Immutable<Type> = Readonly<Type>;
type Mutable<Type> = { -readonly [Property in keyof Type]: Type[Property] };

type MutableUser = Mutable<ImmutableUser>;
const mutableUser: MutableUser = { name: 'Luke' };
mutableUser.name = '!Luke'; // ✅
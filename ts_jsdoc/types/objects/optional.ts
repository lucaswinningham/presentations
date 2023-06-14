type User = { name?: string };
const user1: User = {}; // ✅
const user2: User = { name: 'Luke' }; // ✅
// const username1: string | undefined
const { name: username1 } = user1;
// const username2: string | undefined
const { name: username2 } = user2;

type Concrete<Type> = { [Property in keyof Type]-?: Type[Property] };

type ConfidentUser = Concrete<User>;

const confidentUser1: ConfidentUser = {}; // ❌
// Property 'name' is missing in type '{}' but required in type 'Concrete<User>'

const confidentUser2: ConfidentUser = { name: 'Luke' }; // ✅
// const confidentUserName2: string
const { name: confidentUserName2 } = confidentUser2;
type User = { name?: string, id: string, age?: number };

const validateUser = (user?: User) => {
  if (!user) throw new Error('Missing user!');
}

const processUser = (user?: User) => {
  console.log({ age: user?.age }); // Post-fix safe navigation

  validateUser(user);

  // At this point, we know more than TypeScript:
  // `user` is not undefined because an error would have been thrown

  const { name: badName } = user; // ❌
  // Property 'name' does not exist on type 'User | undefined'

  const badId = user.id; // ❌
  // 'user' is possibly 'undefined'

  const { name } = user!; // ✅ Post-fix non-null assertion
  const id = user!.id; // ✅ Post-fix non-null assertion
}
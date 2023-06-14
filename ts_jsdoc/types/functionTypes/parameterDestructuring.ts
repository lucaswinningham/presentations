type User = { id: string, name: string; age: number; iq: number };

// Require `id`, all other properties optional
type GetUserParams = Partial<User> & Pick<User, 'id'>;

const getUser = ({ id, name = '', age, iq: userIQ }: GetUserParams): User => {
  const userAge = age === undefined ? 39 : age; // ❌ boo hiss

  const averageIQ = getAverageIQ();
  const iq = userIQ ?? averageIQ; // ✅

  return { id, name, age: userAge, iq };
};

const user = getUser({ id: 'a1b2c3d4' }); // ✅
// const myMax: (...nums: number[]) => number
const myMax = (...nums: number[]) => Math.max(...nums);

const theseNumbers = [1, 2];
const thisMax = myMax(...theseNumbers); // ✅
const thatMax = myMax(...[3, 4, 5]); // ✅
const theOtherMax = myMax(6, 7, 8, 9); // ✅

// const fullName: (fname: string, lname: string) => string
const fullName = (fname: string, lname: string) => `${fname} ${lname}`;

const myNames = ['Luke', 'Winningham'];
const myFullName = fullName(...myNames); // ❌
// A spread argument must either have a tuple type or be passed to a rest parameter.

const myNamesToo = ['Luke', 'Winningham'] as const; // `as const`
const myFullNameToo = fullName(...myNamesToo); // ✅

const myNamesAgain = ['Luke', 'Winningham'] as [string, string];
const myFullNameAgain = fullName(...myNamesAgain); // ✅
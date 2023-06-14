type MinLength = <T extends { length: number }>(obj: T, min: number) => T;

const minLength: MinLength = (obj, min) => {
  if (obj.length >= min) {
    return obj;
  } else {
    return { length: min };
// T '{ length: number; }' is not assignable to type 'T'.
//   '{ length: number; }' is assignable to the constraint of type 'T',
//     but 'T' could be instantiated with a different
//     subtype of constraint '{ length: number; }'.
  }
};

// 'arr' gets value { length: 6 }
const arr = minLength([1, 2, 3], 6);
// and crashes here because the returned object doesn't have a 'slice' method!
console.log(arr.slice(0)); // ❌
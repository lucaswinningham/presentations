type MinimumLength = <T extends { length: number }>(obj: T, min: number) => T;

const minLength: MinimumLength = (obj, min) => {
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
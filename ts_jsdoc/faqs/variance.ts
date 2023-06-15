type Animal = {}
type Dog = Animal & {}
type Cat = Animal & {}

const trainDog = (d: Dog) => {}
const cloneAnimal = (source: Animal, done: (result: Animal) => void): void => {}
const animal = {} as Animal;
const cat = {} as Cat;

cloneAnimal(animal, trainDog); // ✅
cloneAnimal(cat, trainDog); // ✅ (should be ❌)
// Expected an error here because we
// end up invoking 'trainDog' with a 'Cat'
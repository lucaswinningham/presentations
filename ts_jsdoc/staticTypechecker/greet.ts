type Person = string;

type Greet = (person: Person, date: Date) => void;

const greet: Greet = (person, date) => {
  console.log(`Hello ${person}, today is ${date}!`);
};
 
greet('Luke');
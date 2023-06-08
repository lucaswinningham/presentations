const greetToo = (person: string, date: Date) => {
  console.log(`Hello ${person}, today is ${date}!`);
};
 
greetToo('Luke', new Date()); // ✅
// type Interjection = "HEY" | "HI"
type Interjection = Uppercase<'hey' | 'hi'>;
// type FormalGreeting = "Greetings" | "Hello"
type FormalGreeting = Capitalize<'greetings' | 'hello'>;
// type Target = "world" | "munda"
type Target = Lowercase<'World' | 'Munda'>;
 
// type Greetings =
//   "HEY, world!" |
//   "HEY, munda!" |
//   "HI, world!" |
//   "HI, munda!" |
//   "Greetings, world!" |
//   "Greetings, munda!" |
//   "Hello, world!" |
//   "Hello, munda!"
type Greetings = `${Interjection | FormalGreeting}, ${Target}!`;
// Honorable mention: Uncapitalize
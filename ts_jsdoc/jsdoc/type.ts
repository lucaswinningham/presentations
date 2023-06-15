

// const numOrStr: "hello" | 100
const numOrStr = Math.random() < 0.5 ? 'hello' : 100;
// const numOrStrAssertedToOnlyNum: number
const numOrStrAssertedToOnlyNum = numOrStr as number;

// const numbers: number[]
let numbers: number[];

// let strAndMaybeBoolToNum: (s: string, b?: boolean) => number
let strAndMaybeBoolToNum: (s: string, b?: boolean) => number;

// let namedNumbers: Record<string, number>
let namedNumbers: Record<string, number>;
 
// const myElement: Element | null
const myElement: Element | null = document.querySelector('.foo');
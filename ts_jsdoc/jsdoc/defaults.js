// @ts-check

// var myObj: { a: number }
var myObj = { a: 1 };
myObj.b = 2; // ✅
// Would be ❌ in a .ts with:
// Property 'b' does not exist on type '{ a: number; }'
// This works because `myObj` is a looser effective type definition in a .js file:
// var myObj: { [x: string]: any }

// var i: any, var j: any, var k: any
var i, j = undefined, k = null;

// var foo: (a: any, b: any) => never[]
var foo = (a, b) => {
  if (!a) a = 1; // ✅

  return [];
};

// const ary: any[]
const ary = foo(); // ✅
ary.push(2); // ✅
foo(1, 'a', []); // ❌
// Expected 0-2 arguments, but got 3
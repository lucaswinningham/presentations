// @ts-check

/** @type {number | string} */
var numOrStr = Math.random() < 0.5 ? 'hello' : 100;
// var numOrStrAssertedToOnlyNum: number
var numOrStrAssertedToOnlyNum = /** @type {number} */ (numOrStr);

/** @type {number[]} */
var numbers;

/** @type {(s: string, b?: boolean) => number} */
var strAndMaybeBoolToNum;

/** @type {Record<string, number>} */
var namedNumbers;
 
/** @type {Element | null} */
var myElement = document.querySelector('.foo');
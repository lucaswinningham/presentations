// @ts-check

/** @type {number | string} */
var numberOrString = Math.random() < 0.5 ? 'hello' : 100;
// var typeAssertedNumber: number
var typeAssertedNumber = /** @type {number} */ (numberOrString);

/** @type {number[]} */
var numbers;

/** @type {(s: string, b?: boolean) => number} */
var stringAndMaybeBooleanToNumber;

/** @type {Record<string, number>} */
var namedNumbers;
 
/** @type {HTMLElement | null} */
var myElement = document.querySelector('input[name="login"]');
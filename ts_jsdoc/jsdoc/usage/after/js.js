// @ts-check
/** @typedef { import('./size').Size } Size */
var { Sizes } = require('./size');
/** @type { (size: Size) => boolean } */
function inStock(size) { return size === Sizes.sm; }
module.exports = { Sizes, inStock };
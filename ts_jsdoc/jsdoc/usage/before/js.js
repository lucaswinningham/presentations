var { Sizes } = require('./size');
function inStock(size) { return size === Sizes.sm; }
module.exports = { Sizes, inStock };
// @ts-check
// /** @typedef { 'SM' | 'MD' | 'LG' } Size */
/** @typedef { { sm: 'SM', md: 'MD', lg: 'LG' } } TSizes */
/** @typedef { TSizes[keyof TSizes] } Size */
/** @type { TSizes } */
var Sizes = { sm: 'SM', md: 'MD', lg: 'LG' };
module.exports = { Sizes };
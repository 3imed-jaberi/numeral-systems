const convert = require('./core');
const validationInputNumerals = require ('./validation');
const { __ERROR_INVALID__ } = require('./constants');



const main = (number, typeResultNumerals ) => (validationInputNumerals(number) === -1) ? new Error(__ERROR_INVALID__).message : convert(number,typeResultNumerals);


module.exports = main;
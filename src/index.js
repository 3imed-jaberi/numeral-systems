const convert = require('./core/numeralSystemConvert');
const validationInputNumerals = require ('./validation');



const main = (number, typeResultNumerals ) => {
  // validate the number .. // you cna passing number or string
  if (validationInputNumerals(number) === -1) {
    return new Error('Error .. invalid number !!').message;
  }  

  return convert(number,typeResultNumerals);
};

module.exports = main ;
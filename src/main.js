
const convert = require('./core/numeralSystemConvert');
const validationInputNumerals = require ('./validation');

const main = ( number , typeResultNumerals ) => {
          // validate the number .. // you cna passing number or string
          if ( validationInputNumerals(number) === -1 ) {
               return "Error .. invalid number !!" ;
          }  
          return convert(number,typeResultNumerals);
};

module.exports = main ;

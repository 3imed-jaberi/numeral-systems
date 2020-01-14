const { getBaseNumerals } = require('../utils');
const { __ALL__ } = require('../constants');



const validationInputNumerals = (number) => {

  number = `${number}`;

// ======================== get all numerals in one table .. ======================== //
  // 1st methode but not support in NODE JS V 10.15.0 ... 
    // let allNumeralsSystem = getBaseNumerals(__ALL__).flat();
  // 2nd methode <complex> ...
    // let allNumeralsSystem = getBaseNumerals(__ALL__).reduce((acc, val) => acc.concat(val), []);
  // 3rd methode ...
    // let allNumeralsSystem = [].concat(...getBaseNumerals(__ALL__));
// ================================================================================== //


  for ( let i = 0; i < number.length; i++ ) {
    let searchInNumerals = ([].concat(...getBaseNumerals(__ALL__))).filter(element => element === number.charAt(i)) ;                    
    if (searchInNumerals.length === 0) {
      return -1;
    }
  }
  
  return 1;
}


module.exports = validationInputNumerals ;
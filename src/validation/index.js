const { getBaseNumerals } = require('../utils');



const validationInputNumerals = (number) => {

  number = `${number}`;

// ======================== get all numerals in one table .. ======================== //
  // 1st methode but not support in NODE JS V 10.15.0 ... 
    // let allNumeralsSystem = getBaseNumerals('all').flat();
  // 2nd methode <complex> ...
    // let allNumeralsSystem = getBaseNumerals('all').reduce((acc, val) => acc.concat(val), []);
  // 3rd methode ...
    // let allNumeralsSystem = [].concat(...getBaseNumerals('all'));
// ================================================================================== //


  for ( let i = 0; i < number.length; i++ ) {
    let searchInNumerals = ([].concat(...getBaseNumerals('all'))).filter(element => element === number.charAt(i)) ;                    
    if (searchInNumerals.length === 0) {
      return -1;
    }
  }
  
  return 1;
}


module.exports = validationInputNumerals ;
const getBaseNumerals = require('./base-numerals');

const validationInputNumerals = (number) => {

          number = number.toString();
          // get all numerals in one table .. 
          // 1st methode but not support in NODE JS V 10.15.0 ... 
                    // let allNumeralsSystem = getBaseNumerals('ALL').flat();
          // 2nd methode  ...
                    // let allNumeralsSystem = getBaseNumerals('ALL').reduce((acc, val) => acc.concat(val), []);
          // 3rd methode ...
          let allNumeralsSystem = [].concat(...getBaseNumerals('ALL')) ;
          //
          for ( let i = 0 ; i < number.length ; i++ ) {
                    let searchInNumerals = allNumeralsSystem.filter( element => element === number.charAt(i)  ) ;                    
                    if ( searchInNumerals.length === 0 ) {
                              return -1 ;
                    }
          }
          return 1 ;   

}

module.exports = validationInputNumerals ;

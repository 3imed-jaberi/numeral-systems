const getBaseNumerals = require('./base-numerals');
const detecteNumeralTypeOfInput = require ('./detected-type-input');
const { DecimalToRomain , RomainToDecimal } = require ('./convert-romain-functions');

const convert = ( number , typeResultNumerals ) => {
       // for updted methode recrusive ... 
              number = number.toString() ;
               
          // number = Number(number); // convert to number
          // number = number.toString(); // convert to string
              
       if ( (typeResultNumerals.toLowerCase() === 'romain') && (detecteNumeralTypeOfInput(number) !== 'romain') ) {
              if ( ( Number(number) < 1 ) || (Number(number) > 3999) ) {
                     return 'Error .. invalid romain number < the numbers should be in [  1 .. 3999 ] >' ;
              }else{
                     number = convert(number , 'modern');
                            // convertion ... 
                     return DecimalToRomain(number);
              }
       }else if (detecteNumeralTypeOfInput(number) === 'romain') {
              if (typeResultNumerals.toLowerCase() === 'modern') {
                     return RomainToDecimal(number);
              } else if (typeResultNumerals.toLowerCase() === 'arabic') {
                     let newDecNumber = RomainToDecimal(number) ;
                     return convert(newDecNumber , 'arabic');
              } else if (typeResultNumerals.toLowerCase() === 'persian') {
                     let newDecNumber = RomainToDecimal(number) ;
                     return convert(newDecNumber , 'persian');
              } else {
                     return number ;
              }        
       }else {             
              // get array basic numeral system ..
              let typeResultConvert = getBaseNumerals(typeResultNumerals) ;
              // set the dedected input type in array .. 
              let typeInputNumber = getBaseNumerals(detecteNumeralTypeOfInput(number)) ;   
              // array of the number .. 
              let inputNumber = number.split('');
              // array of each chiffre in the input number .. 
              let IndexTAB = [];
              // put the same number in the new array .. 
              let arrayConvertNumber = [] ;
              // get the index of each chiffre in the input number .. 
              inputNumber.forEach( element => {
                    typeInputNumber.forEach( ( value , index ) => {
                              (element === value) ? IndexTAB.push(index) : null ;       
                    });
              });
              //
              IndexTAB.forEach( element => arrayConvertNumber.push(typeResultConvert[element]) )
              // translate the new array number to string .. 
                    return arrayConvertNumber.join('');
       }

};

module.exports = convert ;

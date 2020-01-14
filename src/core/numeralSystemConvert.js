const { getBaseNumerals, detecteNumeralTypeOfInput } = require ('../utils');
const { DecimalToRomain } = require ('./decimalToRomain');
const { RomainToDecimal } = require ('./romainToDecimal');
const { __ARABIC__, __MODERN__, __PERSIAN__,  __ROMAIN__ } = require('../constants');



const convert = (number, typeResultNumerals) => {

  number = `${number}`; 


  if ((typeResultNumerals === __ROMAIN__) && (detecteNumeralTypeOfInput(number) !== __ROMAIN__)){
    return ((+number < 1) || (+number > 3999) 
                            ? 
       'Error .. invalid romain number < the numbers should be in [ 1 .. 3999 ] >'
                            :
       DecimalToRomain(convert(number, __MODERN__)));
  }else if (detecteNumeralTypeOfInput(number) === __ROMAIN__) {
    switch (typeResultNumerals) {
      case __MODERN__: {
        return RomainToDecimal(number);
      }
      case __ARABIC__: {
        return convert(RomainToDecimal(number), __ARABIC__);
      }
      case __PERSIAN__: {
       return convert(RomainToDecimal(number), __PERSIAN__);
      }
      default: {
       return number;
      }
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
      typeInputNumber.forEach((value, index) => (element === value) ? IndexTAB.push(index) : null);
    });
    //
    IndexTAB.forEach(element => arrayConvertNumber.push(typeResultConvert[element]));
    // translate the new array number to string .. 
    return arrayConvertNumber.join('');
  }
};


module.exports = convert;
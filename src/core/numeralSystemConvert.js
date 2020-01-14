const { getBaseNumerals, detecteNumeralTypeOfInput } = require ('../utils');
const { DecimalToRomain } = require ('./decimalToRomain');
const { RomainToDecimal } = require ('./romainToDecimal');



const convert = (number, typeResultNumerals) => {

  number = `${number}`; 


  if ((typeResultNumerals === 'romain') && (detecteNumeralTypeOfInput(number) !== 'romain')){
    return ((+number < 1) || (+number > 3999) 
                            ? 
       'Error .. invalid romain number < the numbers should be in [ 1 .. 3999 ] >'
                            :
       DecimalToRomain(convert(number, 'modern')));
  }else if (detecteNumeralTypeOfInput(number) === 'romain') {
    switch (typeResultNumerals) {
      case 'modern': {
        return RomainToDecimal(number);
      }
      case 'arabic': {
        return convert(RomainToDecimal(number), 'arabic');
      }
      case 'persian': {
       return convert(RomainToDecimal(number), 'persian');
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
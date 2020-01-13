import getBaseNumerals from '../data';
import detecteNumeralTypeOfInput from'../utils';
import { DecimalToRomain } from './decimalToRomain';
import { RomainToDecimal } from './romainToDecimal';



const convert = (number:string, typeResultNumerals:string): string => {
              
       if ( (typeResultNumerals.toLowerCase() === 'romain') && (detecteNumeralTypeOfInput(number) !== 'romain') ) {
              if ( ( +number < 1 ) || (+number > 3999) ) {
                     return 'Error .. invalid romain number < the numbers should be in [  1 .. 3999 ] >' ;
              }else{
                     number = convert(number , 'modern');
                            // convertion ... 
                     return DecimalToRomain(+number);
              }
       }else if (detecteNumeralTypeOfInput(number) === 'romain') {
              if (typeResultNumerals.toLowerCase() === 'modern') {
                     return `${RomainToDecimal(number)}`;
              } else if (typeResultNumerals.toLowerCase() === 'arabic') {
                     return convert(`${RomainToDecimal(number)}` , 'arabic');
              } else if (typeResultNumerals.toLowerCase() === 'persian') {
                     return convert(`${RomainToDecimal(number)}` , 'persian');
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
              let IndexTAB: number[] = [];
              // put the same number in the new array .. 
              let arrayConvertNumber: number[] = [] ;
              // get the index of each chiffre in the input number .. 
              inputNumber.forEach( element => {
                    typeInputNumber.forEach((value: any, index: number): void => {
                        (element === value) ? IndexTAB.push(index) : null ;       
                    });
              });
              //
              IndexTAB.forEach( element => arrayConvertNumber.push(+typeResultConvert[element]) )
              // translate the new array number to string .. 
              return arrayConvertNumber.join('');
       }

};


export default convert;
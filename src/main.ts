import convert from './core/numeralSystemConvert';
import validationInputNumerals from './validation';



const main = (number: string, typeResultNumerals: string) => {
     if (validationInputNumerals(number) === -1) {
          return 'Error .. invalid number !!' ;
     } 

     return convert(number, typeResultNumerals);
};


export default main;
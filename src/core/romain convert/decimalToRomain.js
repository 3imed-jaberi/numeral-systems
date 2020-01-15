const { Decimal } = require('./romain.json');



const DecimalToRomain = (number) => {

  let result = [],
  decimal = Decimal.decimal, //base values ..
  symbol = Decimal.symbol, //roman symbols ..
  i = 0;
      
  while(number){  //repeat process until num is not 0 ..
    while(parseInt(number/decimal[i])){  //first base value that divides num is largest base value ..
      result.push(symbol[i]);  //print roman symbol equivalent to largest base value ..
      number -= decimal[i];  //subtract largest base value from num ..
    }
    i++;  //move to next base value to divide num ..
  }

  return result.join('');
};


module.exports = DecimalToRomain;
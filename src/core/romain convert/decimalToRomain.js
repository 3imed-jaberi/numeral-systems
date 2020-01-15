const { Decimal } = require('./romain.json');



const DecimalToRomain = (number) => {

  let result = [],
  decimal = Decimal.decimal,
  symbol = Decimal.symbol,
  i = 0;
      
  while(number){
    while(parseInt(number/decimal[i])){
      result.push(symbol[i]);
      number -= decimal[i];
    }
    i++;
  }

  return result.join('');
};


module.exports = DecimalToRomain;
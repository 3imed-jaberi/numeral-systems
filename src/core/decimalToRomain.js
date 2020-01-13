
exports.DecimalToRomain = (number) => {

  let result = [],
  decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1], //base values ..
  symbol = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'], //roman symbols ..
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
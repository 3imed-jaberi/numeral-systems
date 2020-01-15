const { Romain } = require('./romain.json');



const RomainToDecimal = (number) => {

  let decimal = Romain.decimal, symbol = Romain.symbol, res = 0;

  for (let i = 0; i < number.length; i++){

    let s1 = decimal[symbol.findIndex(element => element === number[i])];
    
    if (i+1 < number.length){
      let s2 = decimal[symbol.findIndex(element => element === number[i+1])]; 
      if (s1 >= s2){
        res = res + s1;
      }else{
        res = res + s2 - s1;
        i++;
      }
    }else{
      res = res + s1;
      i++;
    }
  }

  return res;
};


module.exports = RomainToDecimal;
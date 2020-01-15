const { Romain } = require('./romain.json');



const RomainToDecimal = (number) => {

  let decimal = Romain.decimal, //base values
  symbol = Romain.symbol, //roman symbols
  // Initialize result
  res = 0;

  // Traverse given input
  for (let i = 0; i < number.length; i++){

    // Getting value of symbol s[i]
    let s1 = decimal[symbol.findIndex(element => element === number[i])] ;

    if (i+1 < number.length){
      // Getting value of symbol s[i+1]
      let s2 = decimal[symbol.findIndex(element => element === number[i+1])] ;; 
      // Comparing both values
      if (s1 >= s2){
        // Value of current symbol is greater
        // or equal to the next symbol
        res = res + s1;
      }else{
        res = res + s2 - s1;
        i++; // Value of current symbol is
      }
    }else{
      res = res + s1;
      i++;
    }
  }

  return res;
};


module.exports = RomainToDecimal;
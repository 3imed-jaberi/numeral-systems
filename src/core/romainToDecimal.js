
exports.RomainToDecimal = ( number ) => {
  let decimal = [1,5,10,50,100,500,1000] ; //base values
  let symbol = ["I","V","X","L","C","D","M"] ; //roman symbols
  // Initialize result
  let res = 0;
  // Traverse given input
  for (let i=0; i<number.length; i++)
  {
      // Getting value of symbol s[i]
      let s1 = decimal[symbol.findIndex(element => element === number[i])] ;

      if (i+1 < number.length)
      {
          // Getting value of symbol s[i+1]
          let s2 = decimal[symbol.findIndex(element => element === number[i+1])] ;; 
          // Comparing both values
          if (s1 >= s2)
          {
              // Value of current symbol is greater
              // or equal to the next symbol
              res = res + s1;
          }
          else
          {
              res = res + s2 - s1;
              i++; // Value of current symbol is
                   // less than the next symbol
          }
      }
      else
      {
          res = res + s1;
          i++;
      }
  }

return res;

};
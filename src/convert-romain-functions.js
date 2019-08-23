
exports.DecimalToRomain = (number) => {

   let result = [];
   let decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1] ; //base values
   let symbol = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"] ; //roman symbols
   let i = 0;
       
          while(number){ //repeat process until num is not 0
              while(parseInt(number/decimal[i])){  //first base value that divides num is largest base value
                  result.push(symbol[i]);   //print roman symbol equivalent to largest base value
                  number -= decimal[i];  //subtract largest base value from num
              }
              i++;    //move to next base value to divide num
          }

   return result.join("") ;
   
};

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

const { persian, arabic, modern, romain, all } = require('../data.json');
const { __ARABIC__, __MODERN__, __PERSIAN__,  __ROMAIN__ } = require('../constants');



const getBaseNumerals = (typeResultNumber) => {
  switch (typeResultNumber) {
    case __PERSIAN__: {
      return persian;
    }
    case __ARABIC__: {
      return arabic;
    }
    case __MODERN__: {
      return modern;
    }
    case __ROMAIN__: {
      return romain; 
    }
    default : {
      return all;
    }
  }
};


// ___ private use .. ___ //
const detectedType = (number, type) => {
  let detectedResult = [] ; 
  (number.split('')).forEach(element => {
    let res = getBaseNumerals(type).filter( value => value === element );
    if ( res.length !== 0 ) {
    detectedResult.push(res) ;
    } 
  });
  
  return detectedResult ;
};
// _____________________ //


const detecteNumeralTypeOfInput = (number) => {
  if (detectedType(number, __MODERN__).length !== 0){
    return __MODERN__; 
  } else if (detectedType(number, __ROMAIN__).length !== 0){
    return __ROMAIN__;
  } else if (detectedType(number, __PERSIAN__).length > detectedType(number, __ARABIC__).length){
    return __PERSIAN__;
  }else {
    return __ARABIC__;
  } 
};


module.exports = { detecteNumeralTypeOfInput, getBaseNumerals };
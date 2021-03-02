const { all, arabic, khmer, lao, modern, persian, romain, thai } = require('../data.json');
const { __ARABIC__, __KHMER__, __LAO__, __MODERN__, __PERSIAN__, __ROMAIN__, __THAI__ } = require('../constants');


// ___ private use .. ___ //
const detectedType = (number, type) => {
  let detectedResult = [];
  (number.split('')).forEach(element => {
    let res = getBaseNumerals(type).filter(value => value === element);
    if (res.length !== 0) {
      detectedResult.push(res);
    }
  });

  return detectedResult;
};
// _____________________ //


const getBaseNumerals = (typeResultNumber) => {
  switch (typeResultNumber) {
    case __ARABIC__: {
      return arabic;
    }
    case __KHMER__: {
      return khmer;
    }
    case __LAO__: {
      return lao;
    }
    case __MODERN__: {
      return modern;
    }
    case __PERSIAN__: {
      return persian;
    }
    case __ROMAIN__: {
      return romain;
    }
    case __THAI__: {
      return thai;
    }
    default: {
      return all;
    }
  }
};


const detecteNumeralTypeOfInput = (number) => {
  if (detectedType(number, __KHMER__).length !== 0) {
    return __KHMER__;
  } 
  if (detectedType(number, __LAO__).length !== 0) {
    return __LAO__;
  } 
  if (detectedType(number, __MODERN__).length !== 0) {
    return __MODERN__;
  } 
  if (detectedType(number, __PERSIAN__).length > detectedType(number, __ARABIC__).length) {
    return __PERSIAN__;
  } 
  if (detectedType(number, __ROMAIN__).length !== 0) {
    return __ROMAIN__;
  } 
  if (detectedType(number, __THAI__).length !== 0) {
    return __THAI__;
  } else {
    return __ARABIC__;
  }
};


module.exports = { detecteNumeralTypeOfInput, getBaseNumerals };
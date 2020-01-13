const { persian, arabic, modern, romain, all } = require('./data.json');



const getBaseNumerals = (typeResultNumber) => {
  switch (typeResultNumber.toLowerCase()) {
    case "persian" : {
      return persian;
    }
    case "arabic" : {
      return arabic;
    }
    case "modern" : {
      return modern;
    }
    case "romain" : {
      return romain; 
    }
    default : {
      return all;
    }
  }
};


module.exports = getBaseNumerals ;
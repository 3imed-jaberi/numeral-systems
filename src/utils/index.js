
const getBaseNumerals = require ('../data');

const detectedType = (number , type) => {
        let detectedResult = [] ; 
        (number.split("")).forEach(element => {
                let res = getBaseNumerals(type).filter( value => value === element );
                if ( res.length !== 0 ) {
                detectedResult.push(res) ;
                } 
        });
    return detectedResult ;
};

const detecteNumeralTypeOfInput = (number) => {
        if (detectedType(number,"modern").length !== 0 ) {
            return "modern" ; 
        } else if (detectedType(number,"romain").length !== 0){ // other letter .. 
            return "romain";
        } else if (detectedType(number,"persian").length > detectedType(number,"arabic").length ) {
            return "persian";
        }else {
            return "arabic";
        }     
};

module.exports = detecteNumeralTypeOfInput ;

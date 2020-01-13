import getBaseNumerals from '../data';



const detectedType = (number: string, type: string) => {
    let detectedResult: string[] = [] ; 

    (number.split('')).forEach(element => {
            let res = getBaseNumerals(type).filter( (value: string) => value === element );
            if ( res.length !== 0 ) {
            detectedResult.push(res) ;
            } 
    });

    return detectedResult;
};


const detecteNumeralTypeOfInput = (number: string) => {
    if (detectedType(number,'modern').length !== 0 ) {
        return 'modern' ; 
    } else if (detectedType(number,'romain').length !== 0){ // other letter .. 
        return 'romain';
    } else if (detectedType(number,'persian').length > detectedType(number,'arabic').length ) {
        return 'persian';
    }else {
        return 'arabic';
    }     
};


export default detecteNumeralTypeOfInput;
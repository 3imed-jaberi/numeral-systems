import getBaseNumerals from '../data';



const validationInputNumerals = (number: string) => {

  // get all numerals in one table .. 
  // 1st methode but not support in NODE JS V 10.15.0 ... 
      // let allNumeralsSystem = getBaseNumerals('ALL').flat();
  // 2nd methode  ...
      // let allNumeralsSystem = getBaseNumerals('ALL').reduce((acc, val) => acc.concat(val), []);
  // 3rd methode ...
  let allNumeralsSystem: string[] = [];
  allNumeralsSystem.concat(...getBaseNumerals('all'));
  //
  for ( let i = 0 ; i < number.length ; i++ ) {
    let searchInNumerals = allNumeralsSystem.filter((element: string) => element === number.charAt(i));                    
    if ( searchInNumerals.length === 0 ) {
      return -1;
    }
  }

  return 1;   
}


export default validationInputNumerals;
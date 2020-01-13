
const getBaseNumerals = (typeResultNumber: string) => {
  switch (typeResultNumber.toLowerCase()) {
    case 'persian' : {
      return ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'] ;
    }
    case 'arabic' : {
      return ['۰','۱','۲','۳','٤','٥','٦','۷','۸','۹'] ;
    }
    case 'modern' : {
      return ['0','1','2','3','4','5','6','7','8','9'] ;
    }
    case 'romain' : {
      return ['I','V','X','L','C','D','M'] ; 
    }
    default: {
      return [
        ['۰','۱','۲','۳','٤','٥','٦','۷','۸','۹','۴','۵','۶'] ,
        ['I','V','X','L','C','D','M'] ,
        ['0','1','2','3','4','5','6','7','8','9']
      ] ;
    }
  }
};

export default getBaseNumerals;
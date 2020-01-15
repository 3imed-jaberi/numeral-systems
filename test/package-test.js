const { expect } = require('chai');
const package = require('../index'); 
const { 
  __ARABIC__, 
  __MODERN__, 
  __PERSIAN__, 
  __ROMAIN__,
  __ERROR_INVALID__, 
  __ERROR_ROMAIN__ 
} = require('../src/constants');



describe(
`\n*********************************\n*  WELCOME TO THE Pakcage TEST  *\n*********************************`,
 () => {

     it ('romain to romain', () => {
          let result = package('MCDLVI', __ROMAIN__); 
          expect(result).to.equal('MCDLVI');
     });

     it ('romain to modern', () => {
          let result = package('MCDLVI', __MODERN__); 
          expect(result.toString()).to.equal('1456');
     });

     it ('romain to arabic', () => {
          let result = package('MCDLVI', __ARABIC__); 
          expect(result).to.equal('۱٤٥٦');
     }); 

     it ('romain to persian', () => {
          let result = package('MCDLVI', __PERSIAN__); 
          expect(result).to.equal('۱۴۵۶');
     });     

     it ('modern to modern', () => {
          let result = package('1456', __MODERN__); 
          expect(result).to.equal('1456');
     });

     it ('modern to romain', () => {
          let result = package('1456', __ROMAIN__); 
          expect(result).to.equal('MCDLVI');
     });

     it ('modern to arabic', () => {
          let result = package('1456', __ARABIC__); 
          expect(result).to.equal('۱٤٥٦');
     });

     it ('modern to persian', () => {
          let result = package('1456', __PERSIAN__); 
          expect(result).to.equal('۱۴۵۶');
     });

     it ('arabic to arabic', () => {
          let result = package('۱٤٥٦', __ARABIC__); 
          expect(result).to.equal('۱٤٥٦');
     });  

     it ('arabic to modern', () => {
          let result = package('۱٤٥٦', __MODERN__); 
          expect(result).to.equal('1456');
     });  

     it ('arabic to romain', () => {
          let result = package('۱٤٥٦', __ROMAIN__); 
          expect(result).to.equal('MCDLVI');
     });     
 
     it ('arabic to persian', () => {
          let result = package('۱٤٥٦', __PERSIAN__); 
          expect(result).to.equal('۱۴۵۶');
     });  

     it ('persian to persian', () => {
          let result = package('۱۴۵۶', __PERSIAN__); 
          expect(result).to.equal('۱۴۵۶');
     });

     it ('persian to arabic', () => {
          let result = package('۱۴۵۶', __ARABIC__); 
          expect(result).to.equal('۱٤٥٦');
     }); 

     it ('persian to romain', () => {
          let result = package('۱۴۵۶', __ROMAIN__); 
          expect(result).to.equal('MCDLVI');
     });


     it ('persian to modern', () => {
          let result = package('۱۴۵۶', __MODERN__); 
          expect(result).to.equal('1456');
     });

     it ('romain Error', () => {
          let result = package('45000', __ROMAIN__); 
          expect(result).to.equal(__ERROR_ROMAIN__);
     });

     it ('input error', () => {
          let result = package('45IMED00', __ARABIC__); 
          expect(result).to.equal(__ERROR_INVALID__);
     });
});
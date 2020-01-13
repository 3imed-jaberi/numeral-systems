import { expect } from 'chai';
import { main } from '../src'; 


describe(
`\n*********************************\n*  WELCOME TO THE Pakcage TEST  *\n*********************************`,
 () => {

     it ('romain to romain', () => {
          let result = main ('MCDLVI','romain') ; 
          expect(result).to.equal('MCDLVI');
     });

     it ('romain to modern', () => {
          let result = main ('MCDLVI','modern') ; 
          expect(result.toString()).to.equal('1456');
     });

     it ('romain to arabic', () => {
          let result = main ('MCDLVI','arabic') ; 
          expect(result).to.equal('۱٤٥٦');
     }); 

     it ('romain to persian', () => {
          let result = main ('MCDLVI','persian') ; 
          expect(result).to.equal('۱۴۵۶');
     });     

     it ('modern to modern', () => {
          let result = main ('1456','modern') ; 
          expect(result).to.equal('1456');
     });

     it ('modern to romain', () => {
          let result = main ('1456','romain') ; 
          expect(result).to.equal('MCDLVI');
     });

     it ('modern to arabic', () => {
          let result = main ('1456','arabic') ; 
          expect(result).to.equal('۱٤٥٦');
     });

     it ('modern to persian', () => {
          let result = main ('1456','persian') ; 
          expect(result).to.equal('۱۴۵۶');
     });

     it ('arabic to arabic', () => {
          let result = main ('۱٤٥٦','arabic') ; 
          expect(result).to.equal('۱٤٥٦');
     });  

     it ('arabic to modern', () => {
          let result = main ('۱٤٥٦','modern') ; 
          expect(result).to.equal('1456');
     });  

     it ('arabic to romain', () => {
          let result = main ('۱٤٥٦','romain') ; 
          expect(result).to.equal('MCDLVI');
     });     
 
     it ('arabic to persian', () => {
          let result = main ('۱٤٥٦','persian') ; 
          expect(result).to.equal('۱۴۵۶');
     });  

     it ('persian to persian', () => {
          let result = main ('۱۴۵۶','persian') ; 
          expect(result).to.equal('۱۴۵۶');
     });

     it ('persian to arabic', () => {
          let result = main ('۱۴۵۶','arabic') ; 
          expect(result).to.equal('۱٤٥٦');
     }); 

     it ('persian to romain', () => {
          let result = main ('۱۴۵۶','romain') ; 
          expect(result).to.equal('MCDLVI');
     });


     it ('persian to modern', () => {
          let result = main ('۱۴۵۶','modern') ; 
          expect(result).to.equal('1456');
     });

     it ('romain Error', () => {
          let result = main ('45000','romain') ; 
          expect(result).to.equal('Error .. invalid romain number < the numbers should be in [  1 .. 3999 ] >');
     });

     it ('Input Error', () => {
          let result = main ('45IMED00','arabic') ; 
          expect(result).to.equal('Error .. invalid number !!');
     });
}); 
     
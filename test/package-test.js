const assert = require('assert');
const package = require('../src/main') ; 


describe(
`\n*********************************\n*  WELCOME TO THE Pakcage TEST  *\n*********************************`,
 () => {

     it ('romain to romain', () => {
          let result = package ("MCDLVI","romain") ; 
          assert.equal(result,"MCDLVI");
     });

     it ('romain to modern', () => {
          let result = package ("MCDLVI","modern") ; 
          assert.equal(result,"1456");
     });

     it ('romain to arabic', () => {
          let result = package ("MCDLVI","arabic") ; 
          assert.equal(result,"۱٤٥٦");
     }); 

     it ('romain to persian', () => {
          let result = package ("MCDLVI","persian") ; 
          assert.equal(result,"۱۴۵۶");
     });     

     it ('modern to modern', () => {
          let result = package ("1456","modern") ; 
          assert.equal(result,"1456");
     });

     it ('modern to romain', () => {
          let result = package ("1456","romain") ; 
          assert.equal(result,"MCDLVI");
     });

     it ('modern to arabic', () => {
          let result = package ("1456","arabic") ; 
          assert.equal(result,"۱٤٥٦");
     });

     it ('modern to persian', () => {
          let result = package ("1456","persian") ; 
          assert.equal(result,"۱۴۵۶");
     });

     it ('arabic to arabic', () => {
          let result = package ("۱٤٥٦","arabic") ; 
          assert.equal(result,"۱٤٥٦");
     });  

     it ('arabic to modern', () => {
          let result = package ("۱٤٥٦","modern") ; 
          assert.equal(result,"1456");
     });  

     it ('arabic to romain', () => {
          let result = package ("۱٤٥٦","romain") ; 
          assert.equal(result,"MCDLVI");
     });     
 
     it ('arabic to persian', () => {
          let result = package ("۱٤٥٦","persian") ; 
          assert.equal(result,"۱۴۵۶");
     });  

     it ('persian to persian', () => {
          let result = package ("۱۴۵۶","persian") ; 
          assert.equal(result,"۱۴۵۶");
     });

     it ('persian to arabic', () => {
          let result = package ("۱۴۵۶","arabic") ; 
          assert.equal(result,"۱٤٥٦");
     }); 

     it ('persian to romain', () => {
          let result = package ("۱۴۵۶","romain") ; 
          assert.equal(result,"MCDLVI");
     });


     it ('persian to modern', () => {
          let result = package ("۱۴۵۶","modern") ; 
          assert.equal(result,"1456");
     });

     it ('romain Error', () => {
          let result = package ("45000","romain") ; 
          assert.equal(result,"Error .. invalid romain number < the numbers should be in [  1 .. 3999 ] >");
     });

     it ('Input Error', () => {
          let result = package ("45IMED00","arabic") ; 
          assert.equal(result,"Error .. invalid number !!");
     });
}); 
     
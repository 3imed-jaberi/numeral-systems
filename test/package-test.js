const { expect } = require('chai');
const package = require('../index');
const {
     __ARABIC__,
     __KHMER__,
     __LAO__,
     __MODERN__,
     __PERSIAN__,
     __ROMAIN__,
     __THAI__,
     __ERROR_INVALID__,
     __ERROR_ROMAIN__
} = require('../src/constants');



describe(
`\n*********************************\n*  WELCOME TO THE Pakcage TEST  *\n*********************************`,
 () => {

     // arabic
     it('arabic to arabic', () => {
          let result = package('۱٤٥٦', __ARABIC__);
          expect(result).to.equal('۱٤٥٦');
     });
     
     it('arabic to khmer', () => {
          let result = package('۱٤٥٦', __KHMER__);
          expect(result).to.equal('១៤៥៦');
     });
     
     it('arabic to lao', () => {
          let result = package('۱٤٥٦', __LAO__);
          expect(result).to.equal('໑໔໕໖');
     });
     
     it('arabic to modern', () => {
          let result = package('۱٤٥٦', __MODERN__);
          expect(result).to.equal('1456');
     });
     
     it('arabic to persian', () => {
          let result = package('۱٤٥٦', __PERSIAN__);
          expect(result).to.equal('۱۴۵۶');
     });
     
     it('arabic to romain', () => {
          let result = package('۱٤٥٦', __ROMAIN__);
          expect(result).to.equal('MCDLVI');
     });
     
     it('arabic to thai', () => {
          let result = package('۱٤٥٦', __THAI__);
          expect(result).to.equal('๑๔๕๖');
     });
     
     // khmer
     it('khmer to arabic', () => {
          let result = package('១៤៥៦', __ARABIC__);
          expect(result).to.equal('۱٤٥٦');
     });
     
     it('khmer to khmer', () => {
          let result = package('១៤៥៦', __KHMER__);
          expect(result).to.equal('១៤៥៦');
     });
     
     it('khmer to lao', () => {
          let result = package('១៤៥៦', __LAO__);
          expect(result).to.equal('໑໔໕໖');
     });
     
     it('khmer to modern', () => {
          let result = package('១៤៥៦', __MODERN__);
          expect(result).to.equal('1456');
     });
     
     it('khmer to persian', () => {
          let result = package('១៤៥៦', __PERSIAN__);
          expect(result).to.equal('۱۴۵۶');
     });
     
     it('khmer to romain', () => {
          let result = package('១៤៥៦', __ROMAIN__);
          expect(result).to.equal('MCDLVI');
     });

     it('khmer to thai', () => {
          let result = package('១៤៥៦', __THAI__);
          expect(result).to.equal('๑๔๕๖');
     });

     // lao
     it('lao to arabic', () => {
          let result = package('໑໔໕໖', __ARABIC__);
          expect(result).to.equal('۱٤٥٦');
     });
     
     it('lao to khmer', () => {
          let result = package('໑໔໕໖', __KHMER__);
          expect(result).to.equal('១៤៥៦');
     });
     
     it('lao to lao', () => {
          let result = package('໑໔໕໖', __LAO__);
          expect(result).to.equal('໑໔໕໖');
     });
     
     it('lao to modern', () => {
          let result = package('໑໔໕໖', __MODERN__);
          expect(result).to.equal('1456');
     });
     
     it('lao to persian', () => {
          let result = package('໑໔໕໖', __PERSIAN__);
          expect(result).to.equal('۱۴۵۶');
     });
     
     it('lao to romain', () => {
          let result = package('໑໔໕໖', __ROMAIN__);
          expect(result).to.equal('MCDLVI');
     });

     it('lao to thai', () => {
          let result = package('໑໔໕໖', __THAI__);
          expect(result).to.equal('๑๔๕๖');
     });
     
     // modern
     it('modern to arabic', () => {
          let result = package('1456', __ARABIC__);
          expect(result).to.equal('۱٤٥٦');
     });     

     it('modern to khmer', () => {
          let result = package('1456', __KHMER__);
          expect(result).to.equal('១៤៥៦');
     });     

     it('modern to lao', () => {
          let result = package('1456', __LAO__);
          expect(result).to.equal('໑໔໕໖');
     });     
     
     it('modern to modern', () => {
          let result = package('1456', __MODERN__);
          expect(result).to.equal('1456');
     });
     
     it('modern to persian', () => {
          let result = package('1456', __PERSIAN__);
          expect(result).to.equal('۱۴۵۶');
     });
     
     it('modern to romain', () => {
          let result = package('1456', __ROMAIN__);
          expect(result).to.equal('MCDLVI');
     });
     
     it('modern to thai', () => {
          let result = package('1456', __THAI__);
          expect(result).to.equal('๑๔๕๖');
     });
     
     // persian     
     it('persian to arabic', () => {
          let result = package('۱۴۵۶', __ARABIC__);
          expect(result).to.equal('۱٤٥٦');
     });     

     it('persian to khmer', () => {
          let result = package('۱۴۵۶', __KHMER__);
          expect(result).to.equal('១៤៥៦');
     });     

     it('persian to lao', () => {
          let result = package('۱۴۵۶', __LAO__);
          expect(result).to.equal('໑໔໕໖');
     });     
     
     it('persian to modern', () => {
          let result = package('۱۴۵۶', __MODERN__);
          expect(result).to.equal('1456');
     });
     
     it('persian to persian', () => {
          let result = package('۱۴۵۶', __PERSIAN__);
          expect(result).to.equal('۱۴۵۶');
     });
     
     it('persian to romain', () => {
          let result = package('۱۴۵۶', __ROMAIN__);
          expect(result).to.equal('MCDLVI');
     });
     
     it('persian to thai', () => {
          let result = package('۱۴۵۶', __THAI__);
          expect(result).to.equal('๑๔๕๖');
     });

     // romain
     it('romain to arabic', () => {
          let result = package('MCDLVI', __ARABIC__);
          expect(result).to.equal('۱٤٥٦');
     });     

     it('romain to khmer', () => {
          let result = package('MCDLVI', __KHMER__);
          expect(result).to.equal('១៤៥៦');
     });     

     it('romain to lao', () => {
          let result = package('MCDLVI', __LAO__);
          expect(result).to.equal('໑໔໕໖');
     });     
     
     it('romain to modern', () => {
          let result = package('MCDLVI', __MODERN__);
          expect(result).to.equal('1456');
     });
     
     it('romain to persian', () => {
          let result = package('MCDLVI', __PERSIAN__);
          expect(result).to.equal('۱۴۵۶');
     });
     
     it('romain to romain', () => {
          let result = package('MCDLVI', __ROMAIN__);
          expect(result).to.equal('MCDLVI');
     });
     
     it('romain to thai', () => {
          let result = package('MCDLVI', __THAI__);
          expect(result).to.equal('๑๔๕๖');
     });

     // thai
     it('thai to arabic', () => {
          let result = package('๑๖๘๓', __ARABIC__);
          expect(result).to.equal('۱٦۸۳');
     });
     
     it('thai to khmer', () => {
          let result = package('๑๖๘๓', __KHMER__);
          expect(result).to.equal('១៦៨៣');
     });
     
     it('thai to lao', () => {
          let result = package('๑๖๘๓', __LAO__);
          expect(result).to.equal('໑໖໘໓');
     });
     
     it('thai to modern', () => {
          let result = package('๑๖๘๓', __MODERN__);
          expect(result).to.equal('1683');
     });
     
     it('thai to persian', () => {
          let result = package('๑๖๘๓', __PERSIAN__);
          expect(result).to.equal('۱۶۸۳');
     });
     
     it('thai to romain', () => {
          let result = package('๑๖๘๓', __ROMAIN__);
          expect(result).to.equal('MDCLXXXIII');
     });

     it('thai to thai', () => {
          let result = package('๑๖๘๓', __THAI__);
          expect(result).to.equal('๑๖๘๓');
     });

     // error
     it('romain Error', () => {
          let result = package('45000', __ROMAIN__);
          expect(result).to.equal(__ERROR_ROMAIN__);
     });

     it('input error', () => {
          let result = package('45IMED00', __ARABIC__);
          expect(result).to.equal(__ERROR_INVALID__);
     });
});
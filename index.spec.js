const { expect } = require('chai')

const pkg = require('.')
const {
  __ARABIC__,
  __KHMER__,
  __LAO__,
  __MODERN__,
  __PERSIAN__,
  __ROMAIN__,
  __THAI__
} = require('./consts.json')

describe('numeral-systems', () => {
  // arabic
  it('arabic to arabic', () => {
    const result = pkg('۱٤٥٦', __ARABIC__)
    expect(result).to.equal('۱٤٥٦')
  })

  it('arabic to khmer', () => {
    const result = pkg('۱٤٥٦', __KHMER__)
    expect(result).to.equal('១៤៥៦')
  })

  it('arabic to lao', () => {
    const result = pkg('۱٤٥٦', __LAO__)
    expect(result).to.equal('໑໔໕໖')
  })

  it('arabic to modern', () => {
    const result = pkg('۱٤٥٦', __MODERN__)
    expect(result).to.equal('1456')
  })

  it('arabic to persian', () => {
    const result = pkg('۱٤٥٦', __PERSIAN__)
    expect(result).to.equal('۱۴۵۶')
  })

  it('arabic to romain', () => {
    const result = pkg('۱٤٥٦', __ROMAIN__)
    expect(result).to.equal('MCDLVI')
  })

  it('arabic to thai', () => {
    const result = pkg('۱٤٥٦', __THAI__)
    expect(result).to.equal('๑๔๕๖')
  })

  // khmer
  it('khmer to arabic', () => {
    const result = pkg('១៤៥៦', __ARABIC__)
    expect(result).to.equal('۱٤٥٦')
  })

  it('khmer to khmer', () => {
    const result = pkg('១៤៥៦', __KHMER__)
    expect(result).to.equal('១៤៥៦')
  })

  it('khmer to lao', () => {
    const result = pkg('១៤៥៦', __LAO__)
    expect(result).to.equal('໑໔໕໖')
  })

  it('khmer to modern', () => {
    const result = pkg('១៤៥៦', __MODERN__)
    expect(result).to.equal('1456')
  })

  it('khmer to persian', () => {
    const result = pkg('១៤៥៦', __PERSIAN__)
    expect(result).to.equal('۱۴۵۶')
  })

  it('khmer to romain', () => {
    const result = pkg('១៤៥៦', __ROMAIN__)
    expect(result).to.equal('MCDLVI')
  })

  it('khmer to thai', () => {
    const result = pkg('១៤៥៦', __THAI__)
    expect(result).to.equal('๑๔๕๖')
  })

  // lao
  it('lao to arabic', () => {
    const result = pkg('໑໔໕໖', __ARABIC__)
    expect(result).to.equal('۱٤٥٦')
  })

  it('lao to khmer', () => {
    const result = pkg('໑໔໕໖', __KHMER__)
    expect(result).to.equal('១៤៥៦')
  })

  it('lao to lao', () => {
    const result = pkg('໑໔໕໖', __LAO__)
    expect(result).to.equal('໑໔໕໖')
  })

  it('lao to modern', () => {
    const result = pkg('໑໔໕໖', __MODERN__)
    expect(result).to.equal('1456')
  })

  it('lao to persian', () => {
    const result = pkg('໑໔໕໖', __PERSIAN__)
    expect(result).to.equal('۱۴۵۶')
  })

  it('lao to romain', () => {
    const result = pkg('໑໔໕໖', __ROMAIN__)
    expect(result).to.equal('MCDLVI')
  })

  it('lao to thai', () => {
    const result = pkg('໑໔໕໖', __THAI__)
    expect(result).to.equal('๑๔๕๖')
  })

  // modern
  it('modern to arabic', () => {
    const result = pkg('1456', __ARABIC__)
    expect(result).to.equal('۱٤٥٦')
  })

  it('modern to khmer', () => {
    const result = pkg('1456', __KHMER__)
    expect(result).to.equal('១៤៥៦')
  })

  it('modern to lao', () => {
    const result = pkg('1456', __LAO__)
    expect(result).to.equal('໑໔໕໖')
  })

  it('modern to modern', () => {
    const result = pkg('1456', __MODERN__)
    expect(result).to.equal('1456')
  })

  it('modern to persian', () => {
    const result = pkg('1456', __PERSIAN__)
    expect(result).to.equal('۱۴۵۶')
  })

  it('modern to romain', () => {
    const result = pkg('1456', __ROMAIN__)
    expect(result).to.equal('MCDLVI')
  })

  it('modern to thai', () => {
    const result = pkg('1456', __THAI__)
    expect(result).to.equal('๑๔๕๖')
  })

  // persian
  it('persian to arabic', () => {
    const result = pkg('۱۴۵۶', __ARABIC__)
    expect(result).to.equal('۱٤٥٦')
  })

  it('persian to khmer', () => {
    const result = pkg('۱۴۵۶', __KHMER__)
    expect(result).to.equal('១៤៥៦')
  })

  it('persian to lao', () => {
    const result = pkg('۱۴۵۶', __LAO__)
    expect(result).to.equal('໑໔໕໖')
  })

  it('persian to modern', () => {
    const result = pkg('۱۴۵۶', __MODERN__)
    expect(result).to.equal('1456')
  })

  it('persian to persian', () => {
    const result = pkg('۱۴۵۶', __PERSIAN__)
    expect(result).to.equal('۱۴۵۶')
  })

  it('persian to romain', () => {
    const result = pkg('۱۴۵۶', __ROMAIN__)
    expect(result).to.equal('MCDLVI')
  })

  it('persian to thai', () => {
    const result = pkg('۱۴۵۶', __THAI__)
    expect(result).to.equal('๑๔๕๖')
  })

  // romain
  it('romain to arabic', () => {
    const result = pkg('MCDLVI', __ARABIC__)
    expect(result).to.equal('۱٤٥٦')
  })

  it('romain to khmer', () => {
    const result = pkg('MCDLVI', __KHMER__)
    expect(result).to.equal('១៤៥៦')
  })

  it('romain to lao', () => {
    const result = pkg('MCDLVI', __LAO__)
    expect(result).to.equal('໑໔໕໖')
  })

  it('romain to modern', () => {
    const result = pkg('MCDLVI', __MODERN__)
    expect(result).to.equal('1456')
  })

  it('romain to persian', () => {
    const result = pkg('MCDLVI', __PERSIAN__)
    expect(result).to.equal('۱۴۵۶')
  })

  it('romain to romain', () => {
    const result = pkg('MCDLVI', __ROMAIN__)
    expect(result).to.equal('MCDLVI')
  })

  it('romain to thai', () => {
    const result = pkg('MCDLVI', __THAI__)
    expect(result).to.equal('๑๔๕๖')
  })

  // thai
  it('thai to arabic', () => {
    const result = pkg('๑๖๘๓', __ARABIC__)
    expect(result).to.equal('۱٦۸۳')
  })

  it('thai to khmer', () => {
    const result = pkg('๑๖๘๓', __KHMER__)
    expect(result).to.equal('១៦៨៣')
  })

  it('thai to lao', () => {
    const result = pkg('๑๖๘๓', __LAO__)
    expect(result).to.equal('໑໖໘໓')
  })

  it('thai to modern', () => {
    const result = pkg('๑๖๘๓', __MODERN__)
    expect(result).to.equal('1683')
  })

  it('thai to persian', () => {
    const result = pkg('๑๖๘๓', __PERSIAN__)
    expect(result).to.equal('۱۶۸۳')
  })

  it('thai to romain', () => {
    const result = pkg('๑๖๘๓', __ROMAIN__)
    expect(result).to.equal('MDCLXXXIII')
  })

  it('thai to thai', () => {
    const result = pkg('๑๖๘๓', __THAI__)
    expect(result).to.equal('๑๖๘๓')
  })

  // error
  it('romain Error', () => {
    expect(() => pkg('45000', __ROMAIN__)).to.throw()
  })

  it('input error', () => {
    expect(() => pkg('45IMED00', __ARABIC__)).to.throw()
  })
})

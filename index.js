/*!
 * numeral-systems
 *
 * Copyright(c) 2019-2021 Imed Jaberi
 * MIT Licensed
 */

'use strict'

/**
 * Modules as JSON files.
 */

const BASE_NUMERALS = require('./base_numerals.json')

/**
 * const global types
 */

const __ALL__ = 'all'
const __ARABIC__ = 'arabic'
const __KHMER__ = 'khmer'
const __LAO__ = 'lao'
const __MODERN__ = 'modern'
const __PERSIAN__ = 'persian'
const __ROMAIN__ = 'romain'
const __THAI__ = 'thai'

/**
 * Same as Array.prototype.flat()
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
 * @api private
 */

function flat (array) {
  // we don't need valdiation here because we use it internel.
  return process.version.startsWith('v10')
    ? [].concat(...array)
    : array.flat()
}

/**
 * get base numeral from the type param.
 *
 * @api private
 */

function getBaseNumerals (typeResultNumber) {
  return BASE_NUMERALS[typeResultNumber]
}

/**
 * get type of the number param.
 *
 * @api private
 */

function getType (number) {
  const inputNumberList = number.toString().split('')
  // const specialPersianNumbersOverArabic = ['۴', '۵', '۶']

  const keysList = [
    // __ARABIC__,
    __KHMER__,
    __LAO__,
    __MODERN__,
    // __PERSIAN__,
    __ROMAIN__,
    __THAI__
  ]

  for (const itemNumber of inputNumberList) {
    for (const itemKey of keysList) {
      if (getBaseNumerals(itemKey).includes(itemNumber)) return itemKey
    }
  }

  // NOTE: Keep this to be not breaking change.
  // TODO: remove this behave into next major bump release.
  // look to use other options like override PERSIAN over ARABIC and/or inverse.
  const getCharLengthBy = (type) =>
    inputNumberList
      .map((element) => {
        const result = getBaseNumerals(type).filter(value => value === element)
        return result.length !== 0 ? result : null
      })
      .filter((el) => el !== null)

  const persianLength = getCharLengthBy(__PERSIAN__).length
  const arabicLength = getCharLengthBy(__ARABIC__).length
  return (persianLength > arabicLength) ? __PERSIAN__ : __ARABIC__
}

/**
 * check if the passed type value was romain type.
 *
 * @api private
 */

function isRomainType (value) {
  return value === __ROMAIN__
}

/**
 * convert from decimal to romain handler.
 *
 * @api private
 */

function decimalToRomain (number) {
  const result = []
  const {
    romain_decimal: {
      chiffre: decimal,
      symbol
    }
  } = BASE_NUMERALS
  let i = 0

  while (number) {
    while (parseInt(number / decimal[i])) {
      result.push(symbol[i])
      number -= decimal[i]
    }
    i++
  }

  return result.join('')
}

/**
 * convert from romain to decimal handler.
 *
 * @api private
 */

function romainToDecimal (number) {
  const {
    romain_raw: {
      chiffre: decimal,
      symbol
    }
  } = BASE_NUMERALS
  let result = 0

  for (let i = 0; i < number.length; i++) {
    const s1 = decimal[symbol.findIndex(element => element === number[i])]

    if (i + 1 < number.length) {
      const s2 = decimal[symbol.findIndex(element => element === number[i + 1])]
      if (s1 >= s2) {
        result += s1
      } else {
        result += s2 - s1
        i++
      }
    } else {
      result += s1
      i++
    }
  }

  return result
}

/**
 * the convert handler.
 *
 * @api private
 */

function convertHandler (number, typeResultNumerals) {
  if (isRomainType(typeResultNumerals) && !isRomainType(getType(number))) {
    if (+number < 1 || +number > 3999) {
      throw new Error(
        'invalid romain number: please check your number' +
        'and make sure that\'s valid because the supported' +
        'romain number should be in this interval [1 .. 3999] \n' +
        'you can find more details here:' +
        'https://github.com/3imed-jaberi/numeral-systems#some-informations'
      )
    }
    return decimalToRomain(convertHandler(number, __MODERN__))
  }

  if (isRomainType(getType(number))) {
    return !isRomainType(typeResultNumerals)
      ? convertHandler(romainToDecimal(number), typeResultNumerals)
      : number
  }

  // get array basic numeral system.
  const typeResultConvert = getBaseNumerals(typeResultNumerals)
  // set the dedected input type in array.
  const typeInputNumber = getBaseNumerals(getType(number))
  // array of the number.
  const inputNumber = number.toString().split('')
  // get the index of each chiffre in the input number.
  const indexTAB = inputNumber
    .map((element) =>
      typeInputNumber
        .map((value, index) => {
          if (element === value) {
            return index
          }
          return null
        })
        .filter((el) => el !== null)
    )
  // put the same number in the new array.
  const arrayConvertNumber = indexTAB.map(element => typeResultConvert[element])
  // translate the new array number to string.
  return arrayConvertNumber.join('')
}

/**
 * check if the passed number is supported or not.
 *
 * @api private
 */

function isSupportedNumber (number) {
  const allNumeralsSystem = flat(getBaseNumerals(__ALL__))
  const inputNumberList = number.toString().split('')
  for (const itemNumber of inputNumberList) {
    if (!allNumeralsSystem.includes(itemNumber)) return false
  }

  return true
}

/**
 * convert any type of numbers to other type you want.
 *
 * @api public
 */

function numeralSystems (number, typeResultNumerals) {
  if (!isSupportedNumber(number)) {
    throw new Error(
      `input number ${number} is invalid or not supported. \n` +
      'this module support only ["arabic", "khmer", "lao", "modern"' +
      ', "persian", "romain", "thai"]. \n you can find more about this types' +
      'here: https://github.com/3imed-jaberi/numeral-systems#some-informations'
    )
  }

  return convertHandler(number, typeResultNumerals)
}

/**
 * Expose `numeralSystems()`.
 */
module.exports = numeralSystems

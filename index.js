/*!
 * numeral-systems
 *
 *
 * Copyright(c) 2019-2021 Imed Jaberi
 * MIT Licensed
 */

'use strict'

/**
 * Modules as JSON files.
 */
const {
  all,
  arabic,
  khmer,
  lao,
  modern,
  persian,
  romain,
  thai,
  romain_payload: {
    Decimal,
    Romain
  }
} = require('./payload.json')
const {
  __ALL__,
  __ARABIC__,
  __KHMER__,
  __LAO__,
  __MODERN__,
  __PERSIAN__,
  __ROMAIN__,
  __THAI__
} = require('./consts.json')

/**
 * check if the number have x type.
 *
 * @api private
 */
function haveType (number, type) {
  const detectedResult = [];
  (number.toString().split('')).forEach(element => {
    const res = getBaseNumerals(type).filter(value => value === element)
    if (res.length !== 0) {
      detectedResult.push(res)
    }
  })
  return detectedResult
}

/**
 * get base numeral from the type param.
 *
 * @api private
 */
function getBaseNumerals (typeResultNumber) {
  switch (typeResultNumber) {
    case __ARABIC__: { return arabic }
    case __KHMER__: { return khmer }
    case __LAO__: { return lao }
    case __MODERN__: { return modern }
    case __PERSIAN__: { return persian }
    case __ROMAIN__: { return romain }
    case __THAI__: { return thai }
    default: { return all }
  }
}

/**
 * get type of the number param.
 *
 * @api private
 */
function getType (number) {
  if (haveType(number, __KHMER__).length !== 0) {
    return __KHMER__
  }

  if (haveType(number, __LAO__).length !== 0) {
    return __LAO__
  }

  if (haveType(number, __MODERN__).length !== 0) {
    return __MODERN__
  }

  if (haveType(number, __PERSIAN__).length > haveType(number, __ARABIC__).length) {
    return __PERSIAN__
  }

  if (haveType(number, __ROMAIN__).length !== 0) {
    return __ROMAIN__
  }

  if (haveType(number, __THAI__).length !== 0) {
    return __THAI__
  }

  return __ARABIC__
}

/**
 * convert from decimal to romain handler.
 *
 * @api private
 */
function decimalToRomain (number) {
  const result = []
  const decimal = Decimal.decimal
  const symbol = Decimal.symbol
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
const romainToDecimal = (number) => {
  const decimal = Romain.decimal
  const symbol = Romain.symbol
  let res = 0

  for (let i = 0; i < number.length; i++) {
    const s1 = decimal[symbol.findIndex(element => element === number[i])]

    if (i + 1 < number.length) {
      const s2 = decimal[symbol.findIndex(element => element === number[i + 1])]
      if (s1 >= s2) {
        res += s1
      } else {
        res += s2 - s1
        i++
      }
    } else {
      res += s1
      i++
    }
  }

  return res
}

/**
 * the convert handler.
 *
 * @api private
 */
function convertHandler (number, typeResultNumerals) {
  if (typeResultNumerals === __ROMAIN__ && getType(number) !== __ROMAIN__) {
    if (+number < 1 || +number > 3999) {
      throw new Error('Invalid romain number <the numbers should be in [1 .. 3999]>')
    }
    return decimalToRomain(convertHandler(number, __MODERN__))
  }

  if (getType(number) === __ROMAIN__) {
    switch (typeResultNumerals) {
      case __ARABIC__: {
        return convertHandler(romainToDecimal(number), __ARABIC__)
      }
      case __KHMER__: {
        return convertHandler(romainToDecimal(number), __KHMER__)
      }
      case __LAO__: {
        return convertHandler(romainToDecimal(number), __LAO__)
      }
      case __MODERN__: {
        return convertHandler(romainToDecimal(number), __MODERN__)
      }
      case __PERSIAN__: {
        return convertHandler(romainToDecimal(number), __PERSIAN__)
      }
      case __THAI__: {
        return convertHandler(romainToDecimal(number), __THAI__)
      }
      default: {
        return number
      }
    }
  }

  // get array basic numeral system.
  const typeResultConvert = getBaseNumerals(typeResultNumerals)
  // set the dedected input type in array.
  const typeInputNumber = getBaseNumerals(getType(number))
  // array of the number.
  const inputNumber = number.toString().split('')
  // array of each chiffre in the input number.
  const indexTAB = []
  // get the index of each chiffre in the input number.
  inputNumber.forEach(element => {
    typeInputNumber.forEach((value, index) => {
      if (element === value) {
        indexTAB.push(index)
      }
    })
  })
  // put the same number in the new array.
  const arrayConvertNumber = indexTAB.map(element => typeResultConvert[element])
  // translate the new array number to string.
  return arrayConvertNumber.join('')
}

/**
 * convert any type of numbers to other type you want.
 *
 * @api public
 */
function numeralSystems (number, typeResultNumerals) {
  // 1st method (not supported with Node.js v10): getBaseNumerals(__ALL__).flat()
  // 2nd method: getBaseNumerals(__ALL__).reduce((acc, val) => acc.concat(val), [])
  // 3rd method
  const allNumeralsSystem = [].concat(...getBaseNumerals(__ALL__))

  number.toString().split('').forEach(char => {
    const searchInNumerals = allNumeralsSystem.filter(element => element === char)
    if (searchInNumerals.length === 0) {
      throw new Error('Invalid number !')
    }
  })

  return convertHandler(number, typeResultNumerals)
}

/**
 * Expose `numeralSystems()`.
 */
module.exports = numeralSystems

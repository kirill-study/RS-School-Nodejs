const { parse } = require('./parse-args.js')
const { program } = require('commander')

exports.caesar = function caesar(input) {
  let value = program.shift
  let act = program.action
  let result = []
  input.toString().split('').forEach(char => {
    if (char.codePointAt(0) > 96 && char.codePointAt(0) < 123) {
      if (act === 'encode' && value >= 0) {
        result.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 97) % 26 + 97
          ))
        return
      }
      if (act === 'encode' && value < 0) {
        value = 26 + (+value % 26)
        result.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 97) % 26 + 97
          ))
        return
      }
      else result.push(String.fromCodePoint(
        (char.codePointAt(0) + 26 - (+value % 26) - 97) % 26 + 97
        ))
      return
    }
    if (char.codePointAt(0) > 64 && char.codePointAt(0) < 91) {
      if (act === 'encode' && value >= 0) {
        result.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 65) % 26 + 65
          ))
        return
      }
      if (act === 'encode' && value < 0) {
        value = 26 + (+value % 26)
        result.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 65) % 26 + 65
          ))
        return
      }
      else result.push(String.fromCodePoint(
        (char.codePointAt(0) + 26 - (+value % 26) - 65) % 26 + 65
        ))
      return
    }
    result.push(char)
    return
  })
  return result.join('')
}

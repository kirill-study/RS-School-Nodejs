exports.caesar = function caesar(value, act, input = process.stdin, output = process.stdout) {
  input.split('').forEach(char => {
    if (char.codePointAt(0) > 96 && char.codePointAt(0) < 123) {
      if (act === 'encode' && value >= 0) {
        output.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 97) % 26 + 97
          ))
        return
      }
      if (act === 'encode' && value < 0) {
        value = 26 + (+value % 26)
        output.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 97) % 26 + 97
          ))
        return
      }
      else output.push(String.fromCodePoint(
        (char.codePointAt(0) + 26 - (+value % 26) - 97) % 26 + 97
        ))
      return
    }
    if (char.codePointAt(0) > 64 && char.codePointAt(0) < 91) {
      if (act === 'encode' && value >= 0) {
        output.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 65) % 26 + 65
          ))
        return
      }
      if (act === 'encode' && value < 0) {
        value = 26 + (+value % 26)
        output.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 65) % 26 + 65
          ))
        return
      }
      else output.push(String.fromCodePoint(
        (char.codePointAt(0) + 26 - (+value % 26) - 65) % 26 + 65
        ))
      return
    }
    output.push(char)
    return
  })
  //TODO: transform array to string?
}

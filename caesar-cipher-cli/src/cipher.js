exports.caesar = function caesar(value, act, input = process.stdin, output = process.stdout) {
  if (value < 0) {
    console.error('input a non-negative value for shifting')
    return
  }
  input.split('').forEach(char => {
    if (char.codePointAt(0) > 96 && char.codePointAt(0) < 123) {
      if (act === 'encode') {
        output.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 97) % 26 + 97
          ))
        return
      }
      else output.push(String.fromCodePoint(
        (char.codePointAt(0) - +value - 97) % 26 + 97
        ))
      return
    }
    if (char.codePointAt(0) > 64 && char.codePointAt(0) < 91) {
      if (act === 'encode') {
        output.push(String.fromCodePoint(
          (char.codePointAt(0) + +value - 65) % 26 + 65
          ))
        return
      }
      else output.push(String.fromCodePoint(
        (char.codePointAt(0) - +value - 65) % 26 + 65
        ))
      return
    }
    output.push(char)
    return
  })
}

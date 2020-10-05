const { program } = require('commander')
const fs = require('fs');

exports.parse = function parse() {
    program.storeOptionsAsProperties(true)
    program.version('0.0.1')
    program
        .option('-s, --shift <value>', '')
        .option('-i, --input <file>', '')
        .option('-o, --output <file>', '')
        .option('-a, --action <type>', '')
    program.parse(process.argv)

    if (program.action !== 'encode' && program.action !== 'decode') {
        console.error('Unknown or no action passed, please pass either "encode" or "decode"')
        process.exit(1)
    }

    if (!Number.isInteger(+program.shift)) {
        console.error('Float or not a number float is passed, please pass an integer')
        process.exit(1)
    }
    if (program.input !== undefined) {
        fs.access(program.input, err => {
            if (err) {
                console.error('Input file either does not exist, or can\'t be read')
                process.exit(1)
            }
        })
    }
    if (program.output !== undefined) {
        fs.access(program.output, err => {
            if (err) {
                console.error('Output file either does not exist, or can\'t be read')
                process.exit(1)
            }
        })
    }
}
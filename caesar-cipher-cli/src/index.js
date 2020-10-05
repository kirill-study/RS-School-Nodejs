const { program } = require('commander')
const { parse } = require('./parse-args.js')
const { caesar } = require('./cipher.js')

const through2 = require('through2')
const { pipeline } = require('stream')
const fs = require('fs')

let inputStream
let outputStream

parse()

if (program.input === 'undefined') inputStream = fs.createReadStream(process.stdin, "utf8")
else readStream = fs.createReadStream(program.input, "utf8")

if (program.output === 'undefined') outputStream = fs.createWriteStream(process.stdout)
else writeStream = fs.createWriteStream(program.output, {flags: 'a'})

const theFunction = through2((data, enc, cb) => {
  cb(null, Buffer.from(caesar(data.toString())))
})

readStream.pipe(theFunction).pipe(writeStream)
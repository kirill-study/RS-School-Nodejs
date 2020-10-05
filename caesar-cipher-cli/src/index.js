const { program } = require('commander')
const { parse } = require('./parse-args.js')
const { caesar } = require('./cipher.js')

const through2 = require('through2')
const { pipeline } = require('stream')
const fs = require('fs')

let readStream
let writeStream

parse()

if (program.input === undefined) readStream = process.stdin
else readStream = fs.createReadStream(program.input, "utf8")

if (program.output === undefined) writeStream = process.stdout
else writeStream = fs.createWriteStream(program.output, {flags: 'a'})

const caesarPipe = through2((data, enc, cb) => {
  cb(null, Buffer.from(caesar(data.toString())))
})

readStream.pipe(caesarPipe).pipe(writeStream)
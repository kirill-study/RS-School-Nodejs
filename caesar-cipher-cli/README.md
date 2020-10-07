# Caesar cipher cli tool (RS School task #1)

## Description
This simple tool encodes and decodes text using [Caesar cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## Installation

###  Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

###  Download this tool

```
git clone https://github.com/kirillpogo-study/RS-School-nodejs
```

###  Install NPM modules

Navigate to caesar-cipher-cli directory inside the repository and run:

```
npm install
```

## Using application

CLI tool accepts 4 options (short alias and full name):

    -s, --shift: a shift value for the cipher
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an expected action (encode or decode)

Input/output options are optional, if they are not passed, tool works interactively in
the terminal.

Only English characters get encoded (or decoded) -- symbols, digits and other
languages are kept untouched.

You can perform several operations to the same output file and it will keep previous
ones, adding new ones on the new lines.

###  Usage example

```
node caesar-cipher-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```
```
node caesar-cipher-cli --action encode --shift 7 --input plain.txt --output encoded.txt
```
```
node caesar-cipher-cli --action decode --shift 7 --input decoded.txt --output plain.txt
```

### input.txt:
```
This is secret. Message about "_" symbol!
```

### output.txt:
```
Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!
```

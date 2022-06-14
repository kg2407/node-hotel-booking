const fs = require('fs');
const path = require('path')

const textIn = fs.readFileSync(path.join(__dirname,'./txt/input.txt'), 'utf-8')

console.log(textIn)

const textOut = `This is what we know about avocado: ${textIn}. \n Created on ${Date.now()}`

fs.writeFileSync(path.join(__dirname, './txt/output.txt'), textOut)

console.log('File has been written!')
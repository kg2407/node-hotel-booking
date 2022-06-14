const fs = require('fs');
const path = require('path')

// Blocking, synchronous way
// const textIn = fs.readFileSync(path.join(__dirname,'./txt/input.txt'), 'utf-8')
// console.log(textIn)
// const textOut = `This is what we know about avocado: ${textIn}. \n Created on ${Date.now()}`
// fs.writeFileSync(path.join(__dirname, './txt/output.txt'), textOut)
// console.log('File has been written!')

// Non-blocking, asynchronous way
fs.readFile(path.join(__dirname,'./txt/start.txt'), 'utf-8', (err, data)=>{
  if (err){
    throw err
  }
  console.log(data)
})
console.log('Will read the file asynchronously!')
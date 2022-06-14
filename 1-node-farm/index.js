const fs = require('fs');
const http = require('http');
const path = require('path');

const PORT = 3000;
////////////////////////////
//FILES
// Blocking, synchronous way
// const textIn = fs.readFileSync(path.join(__dirname,'./txt/input.txt'), 'utf-8')
// console.log(textIn)
// const textOut = `This is what we know about avocado: ${textIn}. \n Created on ${Date.now()}`
// fs.writeFileSync(path.join(__dirname, './txt/output.txt'), textOut)
// console.log('File has been written!')

// Non-blocking, asynchronous way
// fs.readFile(path.join(__dirname,'./txt/startt.txt'), 'utf-8', (err, data1)=>{
//   if (err) return console.log('ERROR! 💥')
//   fs.readFile(path.join(__dirname,`./txt/${data1}.txt`), 'utf-8', (err, data2)=>{
//     console.log(data2)
//     fs.readFile(path.join(__dirname,`./txt/append.txt`), 'utf-8', (err, data3)=>{
//       console.log(data3)

//       fs.writeFile(path.join(__dirname, './txt/final.txt'), `${data2} \n ${data3}`, 'utf-8', err => {
//         console.log('Your file has been written 😁😍')
//       })
//     })
//   })
// })
// console.log('Will read the file asynchronously!')

////////////////////////////
//SERVER
const server = http.createServer((req, res)=>{
  res.end('Hello from the server!')
});

server.listen(PORT, '127.0.0.1', ()=>{
  console.log('Listening to the request on PORT: ', PORT)
});
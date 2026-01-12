const fs = require('fs')

fs.readFile('file.txt','utf8',(err,data)=>{
    console.log(err, data)
}) 
// 
console.log("finish reading file")

//read file sync fs.readfillesync to intantonaly block 

//have same write file option like fs.writefile argument are file path, data,callback 
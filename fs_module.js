const fs = require('fs') 

let data = "this is line\n"

fs.appendFile('mytext.txt', data, {
    encoding: 'utf-8',
    mode: 0o666
}, (err) => {
    if(err) throw err;
    console.log('File created and wrote')
})

fs.readFile('mytext.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
})

fs.rename('mytext.txt','maintext.txt',function(err){
    if(err) throw err;
    console.log('File Renamed')
})
    
fs.unlink('maintext.txt',function(err){
    if(err) throw err;
    console.log('File Deleted')
})
// console.log("Welcome to NodeJS!");

import fs from 'fs';

fs.writeFile("message.txt", "Hello from NodeJS!", (err)=>{
    if (err) {
        throw err;
    }
    console.log("This file has been saved!");
    
});

fs.readFile('message.txt', 'utf-8',(err, data)=>{
    if (err) throw err;
    console.log(data);
})
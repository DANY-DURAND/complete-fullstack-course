import express from "express";
import morgan from "morgan";
// import fs from 'fs';
import { dirname } from "path";
import { fileURLToPath } from "url";
 
// import * as rfs from 'rotating-file-stream';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


// var accessLogStream = fs.createWriteStream( __dirname +'access.log', {flags: 'a'});
// var accessLogStream = rfs.createStream( 'access.log',{
//   interval: '1d',
//   path: `${__dirname}log`
// });

// app.use(morgan('combined', { stream: accessLogStream }));

app.use((req, res, next)=>{
  console.log(`Request method: ${req.method}`);
  next();
})

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

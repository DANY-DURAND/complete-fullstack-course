import express from "express";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var bandName='';

function bandNameGenerator(req, res, next) {
  bandName = req.body.street +req.body.pet + `✌️✌️`;
  next();
}

app.use(express.static('./public'))

// Body parser
// Allows us to receive information from the html
app.use(express.urlencoded({extended:true}));

app.use(bandNameGenerator);

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res)=>{
  console.log(req.body);
  res.send(`<h1>Your Band Name is:<br/>${bandName}.</h1>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

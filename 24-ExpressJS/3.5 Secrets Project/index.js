//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import {dirname} from 'path';
import {fileURLToPath} from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsLogin=false;

app.use(express.static('./public'))

// Body parser
// Allows us to receive information from the html
app.use(express.urlencoded({extended:true}));

function validPassword(req, res, next){
    const password = req.body.password;
    if (password === "ILoveProgramming") {
        userIsLogin = true;
    }
    next();
}

app.use(validPassword);

app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/check', (req, res)=>{
  console.log(req.body.password);
  if (userIsLogin) {
    res.sendFile(__dirname + "/public/secret.html");
  }else{
    // console.log("You entered the wrong password!");
    // res.sendFile(__dirname + "/public/index.html");
    res.redirect("/")
  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
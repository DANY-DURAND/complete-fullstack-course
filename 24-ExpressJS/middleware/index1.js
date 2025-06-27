import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Static files
app.use(express.static('./public'));

// Body parser
// Allows us to receive information from the html
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post('/submit', (req, res)=>{
  console.log(req.body);
  // res.redirect(__dirname + "/public/index.html")
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

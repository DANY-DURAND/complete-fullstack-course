import express from 'express'

const app = express();

const port = 3000;

app.get("/", (req,res)=>{
    // console.log(req.rawHeaders); 
    res.send('<h1>Hello, world!</h1>');
});
app.get("/about", (req,res)=>{
    // console.log(req.rawHeaders); 
    res.send('<h1>About me</h1><p>I live in Burundi. I am passionate about developing softwares</p>');
});
app.get("/contact", (req,res)=>{
    // console.log(req.rawHeaders); 
    res.send('<h1>Contact</h1><p>Email: hello@example.com</p>');
});

app.post("/register", (req, res)=>{
    res.sendStatus(201);
});

app.put("/user/angela", (req, res)=>{
    res.sendStatus(200);
});

app.patch("/user/angela", (req, res)=>{
    res.sendStatus(200);
});

app.delete("/user/angela", (req, res)=>{
    res.sendStatus(200);
});

app.listen(port,()=>{
    console.log(`Server running on port: ${port}`);   
})

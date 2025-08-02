import express from 'express'
import bodyParser from 'body-parser'


const app = express();
const port = 3000;



app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index.ejs', {data})
});

app.get('/about', (req, res)=>{
    res.render('about.ejs')
})

app.listen(port,()=>{
    console.log(`Listening to port: ${port}`);
})

const data = [
    {
        "title":"Hello, World!",
        "content": "I am learning programming for a career change. Here is what I have learnt so far."
    },
    {
        "title":"Hello, World!",
        "content": "I am learning programming for a career change. Here is what I have learnt so far."
    }
]
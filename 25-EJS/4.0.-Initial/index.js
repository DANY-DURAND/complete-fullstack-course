import express from 'express';

const app = express();

const port = 3000;

let bowl = ['Apples', 'Oranges', "Pears"];

app.get('/', (req, res)=>{

    // const today = new Date("June 28, 2025");
    // const day = today.getDay();
    // let type = "a week day";
    // let adv = "it's time to work hard.";

    // if (day === 0 || day ===6){
    //     type = "the weekend";
    //     adv = "it's time to have fun";
    // }

    // res.render('index.ejs',{
    //     dataType: type,
    //     advice: adv
    // });

    res.render("index.ejs", {fruits: bowl});


});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
    
});
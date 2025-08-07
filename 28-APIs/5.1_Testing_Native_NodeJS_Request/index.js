import https from 'https';
import express from 'express';
// import { hostname } from 'os';

const app = express();

const port = 3000;


app.get("/",()=>{
    const options = {
        hostname:"bored-api.appbrewery.com",
        path: "/random",
        method: "GET",
    };
    const request = https.request(options, (response)=>{
        let data = "";
        response.on('data', (chunk)=>{
            data = chunk;
        });

        response.on("end", ()=>{
            try{
                const result = JSON.parse(data);
                res.render("index.ejs", {activity: result});
            }catch{
                console.error(`Failed to parse repsonse: ${error.message}`);
                res.status(500).send('Failed to fetch activity. Please try again.');
            }
        });

    })

    request.on('error', (error)=>{
        console.error(`Failed to make request: ${error.message}`);
        res.status(500).send('Failed to fetch activity. Please try again.');
    });

    request.end();
})

app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`); 
})
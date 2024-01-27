const express = require("express")
const hbs = require('hbs')
const path = require("path")

const app = express();
const weatherData = require("../utils/weatherData");

const port = process.env.PORT || 3000;

app.get("/", (req,res) => { 
    res.send('weather data')
})

app.get('/weather', (req,res) => {
    if(!req.query.address) {
    return res.send('address required')
    }
    weatherData(req.query.address,(error,result)=> {
        if(error) {
            return res.send(error);
        }
        res.send(result)
    })
})

app.get("*",(req,res) => {
    res.send("This route doesn't exist")
})

app.listen(port, ()=> {
    console.log('Server port: '+ port)
})


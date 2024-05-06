const express= require('express');
const app=express();
const path=require('path');
const axios= require('axios');

app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.static('public'));

app.get('/search',(req,res)=>{
    res.render('search');
})
app.get('/results',(req,res)=>{
    let query=req.query.search;
    const apiurl='https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid=94f7cbd1590671d01901a0ad1575c58c'
    axios.get(apiurl)
    .then((response)=>{
        let data=response.data;
        console.log(data.main.temp-273.15)
        res.render('weather',{data:data})
    })
    .catch((error)=>{
        console.log(error);
    })

    
})

app.listen(3000,()=>{
    console.log("Server started at 3000");
})
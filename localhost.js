const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('hellow,word');
});

app.listen(80,()=>{
    console.log("server is runing at http://localhost:80/");
});
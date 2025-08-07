const express=require('express')
const app=express();
const PORT=80;

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello,BCA students!");
});

app.get("/show/:id",(req,res)=>{
    res.send("hello,student\nId:${req.params.id}");
});

app.post("/store",(req,res)=>{
    res.send("successfully stored record\n ${req.body.name},${req.body.city}");

});

app.put("/update/:id",(req,res)=>{
    res.send("successfully update record \n ID:${req.params.id},Name:${req.body.name},${req.body,city}");
});

app.delete("/delete/:id",(req,res)=>{
    res.send("successfully deleted with ID:${req.params.id}");
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}/`);
});
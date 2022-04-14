const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res)=> {
    console.log("request handled");
    res.send({response: "Hello World"})
})

app.listen(PORT, ()=>{
    console.log("app running on port: " + PORT)
})
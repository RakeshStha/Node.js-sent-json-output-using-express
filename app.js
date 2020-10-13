const express = require("express");
const app = express();

app.get("/",(req, res)=>{
    //MongoDB
    res.json({ people : [{ name: "Rakesh"}] });
    res.end();
});

app.listen("8080");
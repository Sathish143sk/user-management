const express = require("express");
const db=require("./db");
const cors=require("cors");
const userRoutes=require("./routes/userRoutes");
const app=express();


app.use(cors());
app.use(express.json());
app.use("/api/users",userRoutes);

app.listen(5001,()=>{
    console.log("server run http://localhost:5001");
});
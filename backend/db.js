const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mycurd")

.then(()=>{
    console.log("databsce connect");
})
.catch((err)=>{
    console.log("connection",err);
    
})

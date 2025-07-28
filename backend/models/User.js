const mongoose=require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type:"string",
        required:true
    },
    email:{
        type:"string",
        required:true
    },
    phone:{
        type:"string",
        required:true
    },
    location:{
        type:"string",
        required:true
    }

});

module.exports=mongoose.model('User',userSchema);
const express = require("express");
const User=require("../models/User");
const routes=express.Router();

// create api
routes.post("/",async(req,res) => {
    try{
        const users=new User(req.body);
        const data=await users.save();
        res.status(201).json(data);
    }catch(error){
        res.status(400).json({ error: error.message });
    }   
});
// get all api
routes.get("/",async(req,res) => {
    try{
        const data=await User.find();
        res.status(200).json(data);
    }catch(error){
        res.status(500).json({ error: error.message });
    }   
});
// update api
routes.put("/:id",async(req,res) => {
    try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!updated) return res.status(404).json({ error: "User not found" });
    res.status(200).json(updated);
    }catch (error) {
    res.status(400).json({ error: error.message });
    }
});
// get id api
routes.get("/:id",async(req,res)=>{
    try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
routes.delete("/:id", async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "User not found" });
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = routes;
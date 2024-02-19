// console.log("the server is running on the port")
import  Express from "express";
import mongoose from "mongoose"
const app = Express()

app.listen(3000,()=>{
    console.log("server is running on port 3000 !!!");
})
const express = require("express");
const multer = require("multer");
const app = express();
const path= require("path")

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req,file,cb) {
            cb(null , "uploads")
        },
        filename: function (req,file,cb) {
            cb(null,file.fieldname+"_"+Date.now()+path.extname(file.originalname));
        }
    })
}).single("user_file")

app.post("/upload",upload,async(req,resp)=>{
    resp.send("file uploadeds")
}) 

app.listen(5000);
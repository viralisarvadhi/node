const express = require("express")
const getuserfromdb = require("./db")

const app = express();

app.get("/users",async(req,res)=>{
    try{
        const users = await getuserfromdb();
        res.json({
            success: true,
            users
        });
    }catch(error){
        res.status(500).json({success:false});
    }
});
app.listen(3000,()=> {
    console.log("server running on port 3000")
})
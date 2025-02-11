const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req, res)=>{
 try{
    return res.status(200).json({
        success: true,
        message : "this is get api with Get method"
    })
 }catch(error){
    return res.status(500).json({
        success: false,
        message : error.message
    })
 }
})

app.get("/:id", (req, res)=>{
    try{
        const {id} =  req.params
       return res.status(200).json({
           success: true,
           message : "this is get api to get single use detail with Get method",
           data:{id}
       })
    }catch(error){
       return res.status(500).json({
           success: false,
           message : error.message
       })
    }
   })

app.post("/", (req, res)=>{
    try{
        const {name , email} = req.body
       return res.status(200).json({
           success: true,
           message : "this is post api with Post method",
           data: {name, email}
       })
    }catch(error){
       return res.status(500).json({
           success: false,
           message : error.message
       })
    }
 })


   app.patch("/:id", (req, res)=>{
    try{
        const {id} = req.params
       return res.status(200).json({
           success: true,
           message : "this is update api with Patch method",
           data: {id}
       })
    }catch(error){
       return res.status(500).json({
           success: false,
           message : error.message
       })
    }
   })


   app.delete("/:id", (req, res)=>{
    try{
        const {id} = req.params
       return res.status(200).json({
           success: true,
           message : "this is delete api with Delete method",
           data: {id}
       })
    }catch(error){
       return res.status(500).json({
           success: false,
           message : error.message
       })
    }
   })


app.listen(8080, ()=>{
    console.log("server is running at 8080 port")
})
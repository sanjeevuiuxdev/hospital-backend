const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const morgan = require("morgan")
require("dotenv").config()

const patient_Routes = require("./Routes/Patient_Route")

// middleware
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded())

// api middleware
app.use("/api",patient_Routes)

app.get("/",(req,res)=>{
    res.send("hello")
})

const myPort = process.env.PORT || 4000
app.listen(myPort,()=>{
    console.log(process.env.PORT,"server is running ......");
    mongoose.connect(process.env.mongoDbUrl)
    .then(()=>{
        console.log("Db Connected");
    }).catch(err=>{
        console.log(err,"Db is not connected");
    })
})
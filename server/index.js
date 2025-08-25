const express = require("express")
const libRouter = require("./route/lms.route")
const cors = require("cors")
const connectToDB = require("./db/db")
const app =express()
app.use(cors({
    origin : "*",
    credentials:true
}))
require("dotenv").config()

app.use(express.json())

app.use("/api/lms" , libRouter)

app.listen(3000 , async()=>{
    try {
        await connectToDB()
        console.log(">>>>>>>>>server is running>>>>>>>>>>>")
    } catch (error) {
        console.log(error)
    }
})
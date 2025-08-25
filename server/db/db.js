const mongoose = require("mongoose")
require("dotenv").config()

async function connectToDB(){
   try {
     await mongoose.connect(process.env.Mongo_Url + "LMS-System")
    console.log("Connect to Db >>>>")
   } catch (error) {
    console.log(error)
   }
}

module.exports = connectToDB
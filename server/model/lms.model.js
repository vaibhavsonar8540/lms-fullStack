const mongoose = require("mongoose")

const libSchema = new mongoose.Schema({
    bookImage : {
        type : String ,
        default : "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
    } ,
    title : {
        type : String ,
        required : true
    },
    author : {
        type : String ,
        required : true
    } ,
    category : {
        type : String ,
        default : "Uncategorized"
    } ,
    content : {
        type : String ,
        required : true
    } ,
    status : {
        type : String , 
        required:true
    } ,
    dateofissue : {
        type : Date ,
        default : Date.now ,
    }
    
})

const libModel = mongoose.model("lms" , libSchema)

module.exports = libModel
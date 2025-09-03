const express = require("express");
const libController = require("../controller/lms.controller");
const libRouter = express.Router();



libRouter.get("/test",libController.test)
libRouter.post("/create" , libController.create)
libRouter.get("/allBooks" , libController.getAllBooks)
libRouter.get("/getbyid/:bookId",libController.getbyId)
libRouter.delete("/delete/:bookId",libController.deleteBook)
libRouter.patch("/update/:bookId",libController.updateStatus)
libRouter.get("/search" , libController.search)
libRouter.post("/filter" , libController.filterBooks)

module.exports = libRouter


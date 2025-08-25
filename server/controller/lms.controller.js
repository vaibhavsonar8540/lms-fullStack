const libModel = require("../model/lms.model")

const libController = {
    test : (req,res)=>{
       res.status(201).json({message:"test route is working"}) 
    } ,

    create :async(req , res) => {
        const{title,author,category,content} = req.body

        if(!title || !author || !category || !content ){
            return res.status(501).json({message:"All fields are required"})
        }
        
        try {
            await libModel.create({...req.body})
            res.status(201).json({message:"Book created successfully"})
        } catch (error) {
            res.status(401).json({message:error.message || "error while creating book"})
        }
    } ,

    getAllBooks : async(req,res)=>{
        try {
           const books = await libModel.find({})
            res.json(books)
        } catch (error) {
               res.status(401).json({message:error.message || "error while fetching book data"})
        }
    } ,

    getbyId : async(req,res)=>{
        const{bookId} = req.params

     const isExistBook = await libModel.find({bookId})
     if(!isExistBook){
        return res.status(501).json({message:"book not found"})
     }
     try {
      const book =  await libModel.findById(bookId)
        res.status(201).json({message:"book found" , book})
     } catch (error) {
        res.status(401).json({message:error.message})
     }
    },

    deleteBook : async(req,res)=>{
         const{bookId} = req.params

     const isExistBook = await libModel.find({bookId})
     if(!isExistBook){
        return res.status(501).json({message:"book not found"})
     }

     try {
        const deletedbook =  await libModel.findByIdAndDelete(bookId)
        res.status(201).json({message:"book deleted successfully" , deletedbook})
     } catch (error) {
        res.status(401).json({message:error.message})
     }
    } ,

    updateStatus : async(req,res)=>{
        const{bookId} = req.params
 const { status } = req.body

        if(!status){
            return res.status(501).json({message:"field is empty"})
        }

     const isExistBook = await libModel.find({bookId})
     if(!isExistBook){
        return res.status(501).json({message:"book not found"})
     }

     try {
        const updatedbook =  await libModel.findByIdAndUpdate(bookId,{status},{new:true})
        res.status(201).json({message:"status updated successfully" , updatedbook})
     } catch (error) {
        res.status(401).json({message:error.message})
     }
    } ,

    // search

     search : async(req,res)=>{
    const {q} = req.query 
    try {
      if (!q) {
        const allBooks = await libModel.find();
        return res.json(allBooks);
      }

      const books = await libModel.find({
      title: { $regex: q, $options: "i" }
    });
    res.json(books);

    } catch (error) {
       res.status(500).json({ error: error.message});
    }
  }
}

module.exports= libController
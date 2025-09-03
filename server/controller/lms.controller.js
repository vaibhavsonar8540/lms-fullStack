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

    // getbyId
getbyId: async (req, res) => {
  const { bookId } = req.params;
  try {
    const book = await libModel.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book found", book });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

// update
updateStatus: async (req, res) => {
  const { bookId } = req.params;
  const { status } = req.body;

  if (!status) {
    return res.status(400).json({ message: "Status field is empty" });
  }

  try {
    const updatedBook = await libModel.findByIdAndUpdate(
      bookId,
      { status },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Status updated successfully", updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
},

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
  },



// controller/lms.controller.js
 filterBooks : async (req, res) => {
  try {
    const { status, author, category } = req.body;
    let filter = {};

    if (status && status !== "") {
      filter.status ={ $regex: `^${status}$`, $options: "i" };  // "available" | "unavailable"
    }
    if (author) {
      filter.author = { $regex: author, $options: "i" };
    }
    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    const books = await libModel.find(filter);
    res.status(200).json({ success: true, count: books.length, books });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}




}

module.exports= libController
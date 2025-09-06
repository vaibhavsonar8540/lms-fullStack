import React from "react";
import { Route, Routes } from "react-router-dom";
import AllBooks from "./pages/AllBooks";
import Nav from "./component/nav";
import UploadBook from "./pages/uploadBook";
import UpdateStatus from "./pages/UpdateStatus";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/update/:bookId" element={<UpdateStatus />} />
      </Routes>

    </div>
  );
};

export default App;

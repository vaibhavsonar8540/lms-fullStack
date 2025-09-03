import React from "react";

import AllBooks from "./pages/AllBooks";

import { Route, Routes } from "react-router-dom";
import Nav from "./component/nav";
import UploadBook from "./pages/uploadBook";
import UpdateStatus from "./pages/UpdateStatus";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/upload" element={<UploadBook />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/update/:bookId" element={<UpdateStatus />} />
      </Routes>
    </div>
  );
};

export default App;

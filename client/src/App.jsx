import React from 'react'
import Nav from './component/nav'
import UploadBook from './pages/uploadBook'
import AllBooks from './pages/AllBooks'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/upload' element={<UploadBook/>}></Route>
        <Route path='/books' element={<AllBooks/>}></Route>
         
      </Routes>
    </div>
  )
}

export default App
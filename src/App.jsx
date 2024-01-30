import React from 'react'
import { BrowserRouter as Router,  Routes, Route  } from 'react-router-dom';
import Home from './pages/home/Home';
import AddProduct from './pages/addProduct/AddProduct';
import UpdateProduct from './pages/updateProduct/UpdateProduct';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element= {<Home />} />
      <Route path="/addproduct" element= {<AddProduct />} />
      <Route path="/updateproduct" element= {<UpdateProduct />} />
    </Routes>
   </Router>
  )
}

export default App
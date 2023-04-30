import React from 'react'
import './App.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";

import Bar from './Pages/Bar';
import ProductCatalog from './Pages/ProductCatalog';
import AddProduct from './Pages/AddProduct';
import DeleteProduct from './Pages/DeleteProduct';
import EditProduct from './Pages/EditProduct';

function App() {
  return (
    <div data-testid="checkingLandingPageRender" className="App" >
      <Bar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductCatalog />} />
          <Route path="adding" element={<AddProduct />} />
          <Route path="delete" element={<DeleteProduct />} />
          <Route path="updated" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

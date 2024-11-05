// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import CategoryView from './view/CategoryView';
import AddCategory from './routes/AddCategory';
import EditCategory from './routes/EditCategory';
import DeleteCategory from './routes/DeleteCategory';
import ProductView from './view/ProductView';
import AddProduct from './routes/AddProduct';
import EditProduct from './routes/EditProduct';
import DeleteProduct from './routes/DeleteProduct';



function App() {
  return (
    <Router>
      <div className="container">
        <h1>Quản Lý Sản Phẩm</h1>
        <div className="button-container">
          <Link to="/categories">
            <button className="manage-button">Quản lý Category</button>
          </Link>
          <Link to="/products">
            <button className="manage-button">Quản lý Product</button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/categories" element={<CategoryView />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path="/delete-category/:id" element={<DeleteCategory />} />
        <Route path="/products" element={<ProductView />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/delete-product/:id" element={<DeleteProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

// src/routes/ProductView.js
import React, { useEffect, useState } from 'react';
import productController from '../controllers/ProductController';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductView.css';

function ProductView() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    productController.getAllProducts(setProducts);
  }, []);

  const handleAddProductPage = () => {
    navigate('/add-product');
  };

  const handleEditProductPage = (id) => {
    navigate(`/edit-product/${id}`);
  };

  const handleDeleteProductPage = (id) => {
    navigate(`/delete-product/${id}`);
  };

  return (
    <div className="container">
      <h1>Sản Phẩm</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Ảnh</th>
            <th>Tên Sản Phẩm</th>
            <th>Mô Tả</th>
            <th>Giá</th>
            <th>Thương Hiệu</th>
            <th>Đánh Giá</th>
            <th>Số Lượng</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>
                {product.images && product.images.length > 0 ? (
                  <img src={product.images[1]} alt="Product" style={{ width: '50px', height: '50px' }} />
                ) : (
                  <span>https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5yFEEaLV5sTkXmHgAz2zbBIVfsWDRbtkW3w&s</span>
                )}
              </td>
              <td>{product.name}</td>
              <td className="description-cell">{product.description}</td>
              <td>{product.price}</td>
              <td>{product.brand}</td>
              <td>{product.rating}</td>
              <td>{product.quantity}</td>
              <td className="action-buttons">
                <button onClick={handleAddProductPage}>➕</button>
                <button onClick={() => handleEditProductPage(product.id)}>✏️</button>
                <button onClick={() => handleDeleteProductPage(product.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductView;

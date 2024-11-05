// src/routes/DeleteProduct.js
import React from 'react';
import productController from '../controllers/ProductController';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    productController.deleteProduct(id, () => {
      navigate('/products');
    });
  };

  const handleCancel = () => {
    navigate('/products');
  };

  return (
    <div className="container">
      <h2>Xóa Sản Phẩm</h2>
      <p>Bạn có chắc chắn muốn xóa sản phẩm này không?</p>
      <button onClick={handleDelete}>Xóa</button>
      <button onClick={handleCancel}>Hủy</button>
    </div>
  );
}

export default DeleteProduct;

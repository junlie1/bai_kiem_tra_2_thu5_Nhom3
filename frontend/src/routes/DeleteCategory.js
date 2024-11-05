// src/routes/DeleteCategory.js
import React from 'react';
import categoryController from '../controllers/CategoryController';
import { useNavigate, useParams } from 'react-router-dom';

function DeleteCategory() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    categoryController.deleteCategory(id, () => {
      navigate('/categories');
    });
  };

  const handleCancel = () => {
    navigate('/categories');
  };

  return (
    <div className="container">
      <h2>Xóa Danh Mục</h2>
      <p>Bạn có chắc chắn muốn xóa danh mục này không?</p>
      <button onClick={handleDelete}>Xóa</button>
      <button onClick={handleCancel}>Hủy</button>
    </div>
  );
}

export default DeleteCategory;

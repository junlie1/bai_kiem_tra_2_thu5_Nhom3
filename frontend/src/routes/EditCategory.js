// src/routes/EditCategory.js
import React, { useState, useEffect } from 'react';
import categoryController from '../controllers/CategoryController';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/AddCategory.css';

function EditCategory() {
  const { id } = useParams(); 
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy chi tiết danh mục để điền vào form
    categoryController.getCategoryById(id).then((category) => {
      setName(category.name);
      setIcon(category.icon);
    });
  }, [id]);

  const handleSaveChanges = () => {
    const updatedCategory = { name, icon };
    categoryController.updateCategory(id, updatedCategory, () => {
      navigate('/categories');
    });
  };

  return (
    <div className="container">
      <h2>Sửa Danh Mục</h2>
      <input
        type="text"
        placeholder="Tên danh mục"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Biểu tượng danh mục"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}
      />
      <button onClick={handleSaveChanges}>Lưu</button>
    </div>
  );
}

export default EditCategory;

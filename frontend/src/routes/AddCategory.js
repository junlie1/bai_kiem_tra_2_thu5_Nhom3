// src/routes/AddCategory.js
import React, { useState } from 'react';
import categoryController from '../controllers/CategoryController';
import { useNavigate } from 'react-router-dom';
import '../styles/AddCategory.css';

function AddCategory() {
  const [name, setName] = useState('');
  const [icon, setIcon] = useState('');
  const navigate = useNavigate();

  // Xử lý tải lên và chuyển đổi ảnh thành base64
  const handleIconUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setIcon(reader.result); // Kết quả là chuỗi base64
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveCategory = () => {
    const newCategory = { name, icon };
    categoryController.createCategory(newCategory, () => {
      // Chuyển hướng về trang danh sách danh mục sau khi lưu thành công
      navigate('/categories');
    });
  };

  return (
    <div className="container">
      <h2>Thêm Danh Mục Mới</h2>
      <input
        type="text"
        placeholder="Tên danh mục"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleIconUpload}
      />
      {icon && <img src={icon} alt="Icon Preview" style={{ width: '50px', height: '50px', marginTop: '10px' }} />}
      <button onClick={handleSaveCategory}>Lưu</button>
    </div>
  );
}

export default AddCategory;

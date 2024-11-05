import React, { useEffect, useState } from 'react';
import categoryController from '../controllers/CategoryController';
import { useNavigate } from 'react-router-dom';
import '../styles/CategoryView.css';

function CategoryView() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy tất cả danh mục khi component được mount
    categoryController.getAllCategories(setCategories);
  }, []);

  const handleAddCategoryPage = () => {
    // Chuyển hướng tới trang thêm danh mục mới
    navigate('/add-category');
  };

  const handleEditCategoryPage = (id) => {
    navigate(`/edit-category/${id}`);
  };

  const handleDeleteCategoryPage = (id) => {
    navigate(`/delete-category/${id}`);
  };

  return (
    <div className='container'>
      <h1>Danh Mục</h1>
      <table>
        <thead>
          <tr>
            <th>Tên Danh Mục</th>
            <th>Biểu Tượng</th>
            <th>Hành Động</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td><img src={category.icon} alt="icon" style={{ width: '20px', height: '20px' }} /></td>
              <td>
                <button onClick={handleAddCategoryPage}>➕</button>
                <button onClick={() => {
                  console.log("Category object:", category);
                  handleEditCategoryPage(category.id); 
                }}>
                  ✏️
                </button>
                <button onClick={() => handleDeleteCategoryPage(category.id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryView;
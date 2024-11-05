// src/routes/AddProduct.js
import React, { useState } from 'react';
import productController from '../controllers/ProductController';
import { useNavigate } from 'react-router-dom';
import '../styles/AddProduct.css';

function AddProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [rating, setRating] = useState('');
  const [numberReviews, setNumberReviews] = useState('');
  const [images, setImages] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [isBestSeller, setIsBestSeller] = useState(false);
  const navigate = useNavigate();

  // Xử lý tải lên và chuyển đổi ảnh thành base64
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages(reader.result); // Kết quả là chuỗi base64
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProduct = () => {
    const newProduct = { name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller };
    productController.createProduct(newProduct, () => {
      // Chuyển hướng về trang danh sách sản phẩm sau khi lưu thành công
      navigate('/products');
    });
  };

  return (
    <div className="container">
      <h2>Thêm Sản Phẩm Mới</h2>
      <input
        type="text"
        placeholder="Tên sản phẩm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Mô tả sản phẩm"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Giá"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Thương hiệu"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
      />
      <input
        type="number"
        placeholder="Đánh giá"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <input
        type="number"
        placeholder="Số lượt đánh giá"
        value={numberReviews}
        onChange={(e) => setNumberReviews(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
      />
      {images && <img src={images} alt="Image Preview" style={{ width: '50px', height: '50px', marginTop: '10px' }} />}
      <input
        type="number"
        placeholder="Số lượng"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <input
        type="text"
        placeholder="Danh mục"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isBestSeller}
          onChange={(e) => setIsBestSeller(e.target.checked)}
        />
        Sản phẩm bán chạy
      </label>
      <button onClick={handleSaveProduct}>Lưu</button>
    </div>
  );
}

export default AddProduct;

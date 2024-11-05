// src/routes/EditProduct.js
import React, { useState, useEffect } from 'react';
import productController from '../controllers/ProductController';
import { useNavigate, useParams } from 'react-router-dom';
// import '../styles/AddProduct.css';

function EditProduct() {
  const { id } = useParams();
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

  useEffect(() => {
    // Lấy chi tiết sản phẩm để điền vào form
    productController.getProductById(id).then((product) => {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setBrand(product.brand);
      setRating(product.rating);
      setNumberReviews(product.numberReviews);
      setImages(product.images);
      setQuantity(product.quantity);
      setCategory(product.category);
      setIsBestSeller(product.isBestSeller);
    });
  }, [id]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImages(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    const updatedProduct = { name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller };
    productController.updateProduct(id, updatedProduct, () => {
      navigate('/products');
    });
  };

  return (
    <div className="container">
      <h2>Sửa Sản Phẩm</h2>
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
      <button onClick={handleSaveChanges}>Lưu</button>
    </div>
  );
}

export default EditProduct;

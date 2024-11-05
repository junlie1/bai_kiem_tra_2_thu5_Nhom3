// src/models/Product.js

class Product {
    constructor(_id, name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller) {
      this.id = _id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.brand = brand;
      this.rating = rating;
      this.numberReviews = numberReviews;
      this.images = images;
      this.quantity = quantity;
      this.category = category;
      this.isBestSeller = isBestSeller;
    }
  
    // Lấy tất cả sản phẩm từ backend
    static async fetchAll() {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/getAllProduct`);
        const data = await response.json();
        return data.map(item => new Product(item._id, item.name, item.description, item.price, item.brand, item.rating, item.numberReviews, item.images, item.quantity, item.category, item.isBestSeller));
      } catch (error) {
        console.error("Error fetching products:", error);
        return [];
      }
    }
  
    // Thêm sản phẩm mới
    static async addProduct(product) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/addProduct`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product)
        });
        return await response.json();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  
    // Xóa sản phẩm
    static async deleteProduct(id) {
      try {
        await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/deleteProduct/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  
    // Cập nhật sản phẩm
    static async updateProduct(id, updatedProduct) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/updateProduct/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedProduct)
        });
        return await response.json();
      } catch (error) {
        console.error("Error updating product:", error);
      }
    }
  
    // Lấy chi tiết sản phẩm theo ID
    static async fetchById(id) {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/getProductById/${id}`);
        return await response.json();
      } catch (error) {
        console.error("Error fetching product by ID:", error);
      }
    }
  }
  
  export default Product;
  
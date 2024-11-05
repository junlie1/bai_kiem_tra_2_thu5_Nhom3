import Product from "../models/Product";

const productController = {
  async getAllProducts(setProducts) {
    const products = await Product.fetchAll();
    setProducts(products);
  },

  async createProduct(newProduct, callback) {
    const createdProduct = await Product.addProduct(newProduct);
    if (createdProduct && callback) callback();
  },

  async getProductById(id) {
    const product = await Product.fetchById(id);
    return product;
  },

  async updateProduct(id, updatedProduct, callback) {
    await Product.updateProduct(id, updatedProduct);
    if (callback) callback();
  },

  async deleteProduct(id, callback) {
    await Product.deleteProduct(id);
    if (callback) callback();
  },
};

export default productController;

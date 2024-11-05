import Category from "../models/Category";

const categoryController = {
  async getAllCategories(setCategories) {
    const categories = await Category.fetchAll();
    setCategories(categories);
  },

  async createCategory(newCategory, callback) {
    const createdCategory = await Category.addCategory(newCategory);
    if (createdCategory && callback) callback();
  },

  async getCategoryById(id) {
    const category = await Category.fetchById(id);
    return category;
  },

  async updateCategory(id, updatedCategory, callback) {
    await Category.updateCategory(id, updatedCategory);
    if (callback) callback();
  },

  async deleteCategory(id, callback) {
    await Category.deleteCategory(id);
    if (callback) callback();
  },
};

export default categoryController;
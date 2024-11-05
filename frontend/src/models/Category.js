class Category {
  constructor(_id,name, icon) {
    this.id = _id;
    this.name = name;
    this.icon = icon;
  }

  // Lấy tất cả danh mục từ backend
  static async fetchAll() {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/getAllCategory`);
      const data = await response.json();
      return data.map(item => new Category(item._id,item.name, item.icon));
    } catch (error) {
      console.error("Error fetching categories:", error);
      return [];
    }
  }

  // Thêm danh mục mới
  static async addCategory(category) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/addCategory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(category)
      });
      return await response.json();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  }

  // Xóa danh mục
  static async deleteCategory(id) {
    try {
      await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/deleteCategory/${id}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  }

  // Cập nhật danh mục
  static async updateCategory(id, updatedCategory) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/updateCategory/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedCategory)
      });
      return await response.json();
    } catch (error) {
      console.error("Error updating category:", error);
    }
  }
  // Lấy chi tiết danh mục theo ID
  static async fetchById(id) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL_BACKEND}/getCategoryById/${id}`);
      
      return await response.json();
    } catch (error) {
      console.error("Error fetching category by ID:", error);
    }
  }
}
  
  export default Category;
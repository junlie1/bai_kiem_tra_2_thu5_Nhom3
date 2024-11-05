const express = require('express');
const Category = require('../models/category');
const categoryRouter = express.Router();

// Lấy tất cả danh mục
categoryRouter.get("/api/getAllCategory", async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Thêm danh mục mới
categoryRouter.post("/api/addCategory", async (req, res) => {
    try {
        const { name, icon } = req.body;
        const category = new Category({ name, icon });
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Xóa danh mục theo ID
categoryRouter.delete("/api/deleteCategory/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Cập nhật danh mục theo ID
categoryRouter.put("/api/updateCategory/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, icon } = req.body;
        const category = await Category.findByIdAndUpdate(id, { name, icon }, { new: true });
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

categoryRouter.get("/api/getCategoryById/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = categoryRouter;

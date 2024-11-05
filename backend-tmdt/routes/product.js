const express = require('express');
const Product = require('../models/product');
const productRouter = express.Router();

// Lấy tất cả sản phẩm
productRouter.get("/api/getAllProduct", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Thêm sản phẩm mới
productRouter.post("/api/addProduct", async (req, res) => {
    try {
        const { name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller } = req.body;
        const product = new Product({ name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller });
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Xóa sản phẩm theo ID
productRouter.delete("/api/deleteProduct/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Cập nhật sản phẩm theo ID
productRouter.put("/api/updateProduct/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller } = req.body;
        const product = await Product.findByIdAndUpdate(id, { name, description, price, brand, rating, numberReviews, images, quantity, category, isBestSeller }, { new: true });
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Lấy sản phẩm theo ID
productRouter.get("/api/getProductById/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = productRouter;

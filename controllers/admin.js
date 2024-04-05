import { Product } from "../Schema/product.js";
import {Category} from '../Schema/Categories.js'
export const getAllProducts = async (req, res, next) => {
    try {
        const Products = await Product.find({}, { password: 0 });
        if (Products.length === 0) return res.status(404).json({ success: false, message: "No Product exist" })
        return res.status(200).json({ Products })
    } catch (error) {
        next(error)
    }
}
export const addProduct = async (req, res, next) => {
    try {
        const { Id, img, Title, price, category } = req.body;
        const n = await Product.create({ Id, img, Title, price, category });
        let p = await Category.findOne();
        switch(category)
        {
            case "Laptop":{
                if(!p)
        {
            p = new Category();
            p.Laptop.push(n)
        }
        else{
            p.Laptop.push(n)
        }
break;
            }
            case "Phone":{
                if(!p)
        {
            p = new Category();
            p.Phone.push(n)
        }
        else{
            p.Phone.push(n)
        }
break;
            }
        }
        
        await p.save();
        res.status(201).json({
            success: true,
            message: "Product added successfully"
        });
    } catch (error) {
        next(error);
    }
}
export const updateProduct = async (req, res, next) => {
    try {
        const { Id } = req.params;
        const { img, Title, price, category } = req.body;
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID",
            });
        }
        const updatePost = await Product.findOneAndUpdate(
            { Id },
            { img, Title, price, category },
            { new: true }
        )

        if (!updatePost) {
            return res.status(404).json({
                success: false,
                message: "Post not updated",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Post Updated successfully",
            post: updatePost,
        });


    } catch (error) {
        next(error)
    }
};

export const deleteProduct = async (req, res, next) => {
    try {
        const { Id } = req.params;

        // Validate ID format (optional)
        if (isNaN(Number(Id))) {
            return res.status(400).json({
                success: false,
                message: "Invalid post ID",
            });
        }

        // Delete the post by Id
        const deletedPost = await Product.findOneAndDelete({ Id });

        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};

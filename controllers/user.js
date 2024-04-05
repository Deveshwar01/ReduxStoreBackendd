import { Product } from "../Schema/product.js";
import { Category } from '../Schema/Categories.js';


import { User } from "../Schema/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email }).select("+password");

        if (!user)
            return res.status(404).json({
                success: false,
                messsage: "invalid email or password"
            })

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(404).json({
                success: false,
                messsage: "invalid email or password"
            })

        sendCookie(user, res, `Welcome back,${user.userName}`, 200);
    } catch (error) {
        next(error);
    }
};
export const Register = async (req, res, next) => {
    try {
        const { userName, email, password } = req.body;
        let user = await User.findOne({ email });

        if (user)
            return res.status(404).json({
                success: false,
                messsage: "User already exist"
            })

        const hashedPassword = await bcrypt.hash(password, 10);
        user = await User.create({ userName, email, password: hashedPassword });

        sendCookie(user, res, "Registered Succesnbfkjf,sfully", 201);
    } catch (error) {
        next(error);
    }
};
export const Logout = (req, res) => {
    res.status(200)
        .cookie("token", "", { expires: new Date(Date.now()) })
        .json({
            success: true,
            user: req.user,
        })
};

export const getAllProducts = async (req, res, next) => {
    try {
        const Products = await Product.find({}, { password: 0 });
        if (Products.length === 0) return res.status(404).json({ success: false, message: "No Product exist" })
        return res.status(200).json({ Products })
    } catch (error) {
        next(error)
    }
}

// export const getCategories = async (req, res) => {
//     try {
//         const categories = await Category.find();
//         const cat = req.params.cat;
//         res.json(categories);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };
export const getAllCategories = async (req, res) => { }
export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if (req.params.cat == "Laptop") {
            res.status(200).json(categories[0].Laptop)
        }
        else if (req.params.cat == "Phone") {
            res.status(200).json(categories[0].Phone)
        }

        // res.json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


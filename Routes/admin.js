import express from "express"
import { getAllProducts, addProduct, deleteProduct, updateProduct } from "../controllers/admin.js";

const router = express.Router();
router.get('/allproduct', getAllProducts);
router.post('/add', addProduct);
router.patch('/update/:Id', updateProduct);
router.delete('/delete/:Id', deleteProduct);
export default router;

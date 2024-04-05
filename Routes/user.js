import express from "express"
import { getAllProducts, getCategories,Login,Register } from "../controllers/user.js";
const router = express.Router();
router.post('/login', Login);
router.post('/register', Register);
router.get('/products', getAllProducts);
router.get('/products/:cat', getCategories)

export default router;

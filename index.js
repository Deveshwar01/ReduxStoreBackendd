import express from "express";
import userRouter from "./Routes/user.js";
import adminRouter from './Routes/admin.js'
import { connectDB } from "./DB/data.js";
import cookieParser from "cookie-parser";
import cors from "cors"
const App = express();
const PORT = 4000;
connectDB();
// middlewares
App.use(express.json());
App.use(cookieParser());
App.use(cors());

/* user Routers */
App.use('/api/v1/user', userRouter);
/* admin Routers */
App.use('/api/v1/admin', adminRouter);


App.listen(PORT, (req, res) => {
    console.log(`server is working at ${PORT}`);
})
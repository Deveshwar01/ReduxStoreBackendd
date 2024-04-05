import mongoose from "mongoose"

export const connectDB = () => {
    mongoose
        .connect('mongodb+srv://deveshwork01:ljGl29Thg45UVPak@cluster0.ziffjlr.mongodb.net/myDb', {
            dbName: "E-COMMERCE",
        })
        .then((c) => console.log(`Database Connected`))
        .catch((e) => console.log(e))
} 

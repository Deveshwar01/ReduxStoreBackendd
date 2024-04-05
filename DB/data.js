import mongoose from "mongoose"

export const connectDB = () => {
    mongoose
        .connect('mongodb://localhost:27017', {
            dbName: "E-COMMERCE",
        })
        .then((c) => console.log(`Database Connected`))
        .catch((e) => console.log(e))
} 

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    Id: {
        type: Number,
    },
    img: {
        type: String,
    },
    Title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);

export { Product };



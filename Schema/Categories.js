import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    Laptop:[],
    Phone:[]
});

const Category = mongoose.model('Category', CategorySchema);

export { Category };



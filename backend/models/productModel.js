import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    Name: String,
    url: String,
    Category: String,
    Price: Number,
    stock: Number,
    Description: String,
    selectedImage: String
})

const product = mongoose.model("Products",productSchema);
export default product
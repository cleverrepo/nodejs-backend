import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String
        },
    },
    { timestamps: true }
);

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;

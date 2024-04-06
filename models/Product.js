import { model, Schema } from "mongoose";

// Define the Product schema
const ProductSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
  },
  { timestamps: true } // Add timestamps (createdAt, updatedAt)
);

// Create the Product model
const Product = model("Product", ProductSchema);
export default Product;
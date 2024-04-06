import Layout from "@/components/Layout";
import { useState } from "react";
import axios from "axios";

const NewProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const createProduct = async (e) => {
    e.preventDefault();
    if (!product.title || !product.description || !product.price) {
      alert("Please fill in all fields.");
      return;
    }
    const data = { ...product };
    await axios.post("/api/products", data);
    setProduct({ title: "", description: "", price: "" });
  };

  return (
    <Layout>
      <form onSubmit={createProduct}>
        <h1>New Product</h1>
        <label>Product name</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleInputChange}
        />

        <label>Price</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
};
export default NewProduct;

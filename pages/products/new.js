import Layout from "@/components/Layout";

const NewProduct = () => {
  return (
    <Layout>
      <h1>New Product</h1>
      <input type="text" placeholder="product name" />
      <textarea placeholder="description"></textarea>
    </Layout>
  );
};
export default NewProduct;

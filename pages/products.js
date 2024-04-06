import Layout from "@/components/Layout";
import Link  from "next/link";

const Products = () => {
  return (
    <Layout>
      <Link className="btn-primary" href={'/products/new'}>Add new product</Link>
    </Layout>
  );
};
export default Products;

import Layout from "@/components/Layout";
import Link  from "next/link";

const Products = () => {
  return (
    <Layout>
      <Link className="bg-blue-600 text-white rounded-md py-2 px-4" href={'/products/new'}>Add new product</Link>
    </Layout>
  );
};
export default Products;

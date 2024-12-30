import { Product } from "@/sanity.types";

const ProductThumb = ({ product }: { product: Product }) => {
  return <div>{product.name}</div>;
};
export default ProductThumb;

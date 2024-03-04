import "./Shop.scss";
import { ProductsContext } from "../../../context/ProductsContext";
import { useContext } from "react";
import ProductCard from "../../molecules/ProductCard/ProductCard";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};
export default Shop;

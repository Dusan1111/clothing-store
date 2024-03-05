// import "./App.css";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.scss";
import { Fragment } from "react";

const CategoryPreview = ({ title, products }) => {
  return (
    <Fragment>
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="category-preview-container">
        <div className="preview">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </Fragment>
  );
};

export default CategoryPreview;

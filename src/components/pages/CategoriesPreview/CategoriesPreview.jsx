import "./CategoriesPreview.scss";
import { CategoriesContext } from "../../../context/CategoriesContext";
import { useContext } from "react";
import CategoryPreview from "../../molecules/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="category-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </div>
  );
};
export default CategoriesPreview;

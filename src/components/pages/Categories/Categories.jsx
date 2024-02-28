// import "./App.css";
import CategoryItem from "../../molecules/CategoryItem/CategoryItem";
import "./Categories.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}></CategoryItem>
      ))}
    </div>
  );
};

export default Categories;

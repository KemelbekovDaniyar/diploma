import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../App";
import AddCategoryJs from "../AddCategoryJs/AddCategoryJs";

export default function CategoryList() {
  const { categories } = useContext(AppContext);

  const output = categories.map((category) => (
    // <li key={category.id}>
    //   <NavLink to={`/categories/${category.slug}`}>
    //     {category.name}
    //   </NavLink>
    // </li>
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        <img src={category.picture} alt={category.name} />
        <span>{category.name}</span>
      </NavLink>
    </li>
  ));


  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
      <AddCategoryJs />
    </div>
  );
}
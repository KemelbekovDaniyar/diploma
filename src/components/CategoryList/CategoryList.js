import { NavLink } from "react-router-dom";
import "./CategoryList.css";

export default function CategoryList(props) {
  const categories = [
    { name: "All", id: "all", slug: "in-containers" },
    { name: "Guitars", id: "guitars", slug: "in-cones" },
    { name: "Basses", id: "basses", slug: "classic" },
    { name: "Drums", id: "drums", slug: "in-bags" },
    { name: "Keyboards", id: "keyboards", slug: "in-bags" },
  ];

  const output = categories.map((category) => (
    <li className="CategoryItem" key={category.id}>
      <NavLink to={"/categories/" + category.slug} > {category.name}</NavLink>
    </li>
  )); 

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  );
}
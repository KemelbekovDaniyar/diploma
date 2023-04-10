import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { categories } from "../../firebase";
import { getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

export default function CategoryList() {

  const [сategoryList, setCategories] = useState([]);

  useEffect(() => {
    getDocs(categories).then(snapshot => {
      const newCategoryList = []
      snapshot.forEach(doc => {
        const category = doc.data();
        category.id = doc.id;
        newCategoryList.push(category);
      });
      setCategories(newCategoryList);
    });
  }, []);


  const output = сategoryList.map((category) => (
    <li key={category.id}>
      <NavLink to={`/categories/${category.slug}`}>
        {category.name}
      </NavLink>
    </li>
  ));

  return (
    <div className="CategoryList">
      <h3>Categories</h3>
      <ul>{output}</ul>
    </div>
  );
}
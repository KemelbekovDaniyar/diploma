import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map(products => (
    <div>
      <img src={products.image} alt={products.name} />
      <NavLink to={'/products/' + products.slug}>
        {products.name}
      </NavLink>
      <span>{products.price} $</span>

    </div>
  ))

  return (
    <div className="ProductList">
      {output}
    </div>
  )
}
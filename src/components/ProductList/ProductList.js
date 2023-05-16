import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import AddToCart from "../AddToCart/AddToCart";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import CategoryList from "../CategoryList/CategoryList";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products.filter(product => product.category === category.id)
    .map(products => (
      <div key={products.id} className="BoxList">
        <img src={products.picture} alt={products.name} />
        <NavLink to={'/products/' + products.slug}>
          {products.name}
        </NavLink>
        <span>{products.price} $</span>
        <AddToCart product={products} />
        <DeleteProduct product={products} />
      </div>
    ))

  return (
    <div className="ProductList">
      <div className="Categoryin">
        <CategoryList />
      </div>
      <div className="Productin">
        <h1>{category.name}</h1>
        <div className="content">
          {output}
          <AddProduct category={category} />
        </div>
      </div>
    </div>
  )
}
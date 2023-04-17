import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./CartList.css"

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  const productIds = Object.keys(cart);

  const output = products
    .filter(product => productIds.includes(product.id))
    .map(product => (
      <div className="CartItem" key={product.id}>
        <img src={product.picture} alt={product.name} />
        <Link to={`/products/` + product.slug}> {product.name}</Link>
        <input type="number" value={cart[product.id]} min={1} />
        <span>{cart[product.id] * product.price} $</span>
        <button>Remove</button>
      </div>
    ));



  return (
    <div className="CartList">
      {output}
    </div>
  )
}
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  let menuBtn = document.querySelectorAll('.NavItem a')
  let menu = document.querySelector('.Drawer')
  menuBtn.forEach(el => {
    el.addEventListener('click', function () {
      menu.classList.remove('open')
    })
  })
  return (
    <div className="Nav">
      <nav className="topbar">
        <ul>
          <li className="NavItem">
            <NavLink to="/" className="underline-one">Home</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/about" className="underline-one">About</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/contact" className="underline-one">Contact</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/deliver" className="underline-one">Deliver</NavLink>
          </li>
          <li className="NavItem">
            <NavLink to="/orders" className="underline-one">Orders</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
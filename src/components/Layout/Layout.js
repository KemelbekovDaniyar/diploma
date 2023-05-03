import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import { useState } from "react";
import Drawer from "../Drawer/Drawer";
import NavToggle from "../NavToggle/NavToggle";

export default function Layout(props) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }
  return (
    <div className="Layout">
      <header>
        <div className="spacer">
          <NavToggle callback={toggleDrawer} />
          <Logo />
          <Nav />
          <Drawer open={drawerOpen} toggle={toggleDrawer} />
          <div>
            <CartLink />
            <Auth />
          </div>
        </div>
      </header >
      <aside>
        <CategoryList />
      </aside>
      <main>
        {props.children}
      </main>
      <footer>Footer</footer>
    </div >
  );
}
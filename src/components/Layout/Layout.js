import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Home from "../../pages/Home";
import Video from "../Video/Video";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <div className="spacer">
          <Logo />
          <Nav />
          <CartLink />
          <Auth />
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
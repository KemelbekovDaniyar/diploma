import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Logo />
        <Nav />
        {/* <Nav>
        <img src={Logo} alt="logo" className="logo" />
        </Nav> */}
      </header>
      <aside>
          <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
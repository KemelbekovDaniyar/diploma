import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../Logo/Logo";
import CategoryList from "../CategoryList/CategoryList";
import Header from "../Header/Header";

export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <div className="spacer">
          <Logo />
          <Nav />
        </div>
        <Header />


      </header>
      <aside>
        <CategoryList />
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
import Nav from "../Nav/Nav";
import "./Layout.css"
import Logo from "../Logo/Logo";

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
        <nav>Nav</nav>
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
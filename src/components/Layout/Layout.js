import Nav from "../Nav/Nav";
import "./Layout.css";


export default function Layout(props) {
  return (
    <div className="Layout">
      <header>
        <Nav />
      </header>
      <aside>
        <nav>Nav</nav>
      </aside>
      <main>{props.children}</main>
      <footer>Footer</footer>
    </div>
  );
}
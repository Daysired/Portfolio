import Nav from "./Nav/Navbar";
import Footer from "./Footer/Footer";


export default function Layout(props) {
  return (
    <div className="layout">
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

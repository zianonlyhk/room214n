import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    
    <div style={{ backgroundColor: "#fdf6e3" }}>
      <link
            rel="preload"
            href="/fonts/Arvo/Arvo-Regular.ttf"
            as="font"
            crossOrigin=""
          />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

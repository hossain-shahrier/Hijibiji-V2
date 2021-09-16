import Navbar from "../../components/navbar";
import Announcement from "../../components/announcement";
import Products from "../../components/products";
import Silder from "../../components/slider";
import Footer from "../../components/footer";
import Newsletter from "../../components/newsletter";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Silder />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

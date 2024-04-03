import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import FeaturedProduct from "./components/FeaturedProduct/FeaturedProduct";
import ExploreXiomi from "./components/ExploreXiomi/ExploreXiomi";
import XiomiSupport from "./components/XiomiSupport/XiomiSupport";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <XiomiSupport />
      <Footer />
      <ExploreXiomi />
      <FeaturedProduct />
    </>
  );
};

export default App;

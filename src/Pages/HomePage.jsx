import Header from "../Components/Header/Header";
import HeroSlider from "../Components/Home-1/HeroSlider";
// import Footer from "../Components/Footer/Footer";
import PopularMovie from "./PopularMovie";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSlider />
      <PopularMovie />
      {/* <Footer /> */}
    </>
  );
}

export default HomePage;

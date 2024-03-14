import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import ResponsiveCarousel from "./components/ResponsiveCarousel/ResponsiveCarousel";
import FirstSection from "./components/FirstSection/FirstSection";
import SecondSection from "./components/SecondSection/SecondSection";
import ThirdSection from "./components/ThirdSection/ThirdSection";
import FourthSection from "./components/FourthSection/FourthSection";
import FifthSection from "./components/FifthSection/FifthSection";
import FooterSection from "./components/FooterSection/FooterSection";
function App() {
  return (
    <>
      <Header />
      <NavBar />
      <ResponsiveCarousel/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
      <FifthSection/>
      <FooterSection/>
      </>
  );
}

export default App;

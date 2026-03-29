import "./App.css";
import Footer from "./components/homePage/footer/Footer";
import Hero from "./components/homePage/hero/Hero";
import NavBar from "./components/homePage/NavBar/NavBar";
import Stat from "./components/homePage/stat/Stat";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Stat/>
      <Footer/>
    </>
  );
}

export default App;

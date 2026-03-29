import "./App.css";
import Footer from "./components/homePage/footer/Footer";
import Hero from "./components/homePage/hero/Hero";
import NavBar from "./components/homePage/NavBar/NavBar";
import Pricing from "./components/homePage/pricing/Pricing";
import Stat from "./components/homePage/stat/Stat";
import Workflow from "./components/homePage/workflow/Workflow";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Stat/>
      <Pricing/>
      <Workflow/>
      <Footer/>
    </>
  );
}

export default App;

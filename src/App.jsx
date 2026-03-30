import { Suspense, useState } from "react";
import "./App.css";
import DigitalTools from "./components/homePage/digitalTools/DigitalTools";
import Footer from "./components/homePage/footer/Footer";
import Hero from "./components/homePage/hero/Hero";
import NavBar from "./components/homePage/NavBar/NavBar";
import Pricing from "./components/homePage/pricing/Pricing";
import Stat from "./components/homePage/stat/Stat";
import Steps from "./components/homePage/steps/Steps";
import Workflow from "./components/homePage/workflow/Workflow";
import Products from "./components/products/Products";
import Carts from "./components/carts/Carts";

const fetchProductsData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const productsPromise = fetchProductsData();

function App() {
  // const productsPromise = fetchProductsData();

  const [activeTab, setActiveTab] = useState("product");

  const [carts, setCarts] = useState([]);
  // console.log(carts);

  return (
    <>
      <NavBar carts={carts} />

      <Hero />
      <Stat />
      <DigitalTools
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        carts={carts}
      />

      {activeTab === "product" ? (
        // <Suspense
        //   fallback={
        //     <div className="flex justify-center items-center h-[50vh]">
        //       <span className="loading loading-spinner text-primary"></span>
        //     </div>
        //   }
        // >
        //   <Products
        //     productsPromise={productsPromise}
        //     carts={carts}
        //     setCarts={setCarts}
        //   />
        // </Suspense>
        <Products
          productsPromise={productsPromise}
          carts={carts}
          setCarts={setCarts}
        />
      ) : (
        <Carts carts={carts} setCarts={setCarts} />
      )}

      <Steps />
      <Pricing />
      <Workflow />
      <Footer />
    </>
  );
}

export default App;

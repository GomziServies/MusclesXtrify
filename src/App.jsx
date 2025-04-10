import React from "react";
import { Route, Routes } from "react-router-dom";

//User Account
import Home from "./pages/home";
import PureGoCreatine from "./pages/products/creatine-supplements";
import AddToCart from "./pages/nutrition/add-to-cart";
import PureGoWheyProtein from "./pages/products/whey-protein-powder";
import NotFoundPage from "./pages/404";
import CheckOut from "./pages/check-out";
import ScrollRestoration from "./components/scroll-restoration";
import PureGoPreWorkout from "./pages/products/pre-workout-supplements";
import AboutUs from "./pages/nutrition/about-us";
import ContactUs from "./pages/nutrition/contact-us";
import Supplements from "./pages/nutrition/supplements";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-to-cart" element={<AddToCart />} />
        <Route path="/check-out" element={<CheckOut />} />
        {/* Products */}
        <Route path="/creatine-supplements" element={<PureGoCreatine />} />
        <Route path="/whey-protein-powder" element={<PureGoWheyProtein />} />
        <Route path="/pre-workout" element={<PureGoPreWorkout />} />
        <Route path="/supplements" element={<Supplements />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/404" element={<NotFoundPage />} />
      </Routes>
      <ScrollRestoration />
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import ImgSwipe from "./components/ImgSwipe";
import AboutUs from "./components/AboutUs";
import LevelUp from "./components/LevelUp";
import CollectableCard from "./components/CollectableCard";
import Desktop from "./components/Desktop";
import OurTeam from "./components/OurTeam";
import WhatNext from "./components/WhatNext";
import Form from "./components/Form";
import Footer from "./components/Footer";
import BackTop from "./components/BacktoTop";
import RoadMap from "./components/RoadMap";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "./components/Preloader";
document.body.classList.add("overflow_hidden");
function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
    });
  }, []);
  const [load, setload] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("overflow_hidden");
      setload(false);
    }, 4000);
  });

  return (
    <div className=" overflow-xclip">
      {load && <Preloader />}
      <Header />
      <ImgSwipe />
      <AboutUs />
      <LevelUp />
      <CollectableCard />
      <Desktop />
      <OurTeam />
      <WhatNext />
      <RoadMap />
      <Form />
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;

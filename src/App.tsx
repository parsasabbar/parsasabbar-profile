import React, { useEffect } from "react";
import RouteManager from "./infrastructures/route/RouteManager";
import "./assets/sass/Main.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    delay: 500,
    offset: 160,
  });
  return <RouteManager />;
}

export default App;

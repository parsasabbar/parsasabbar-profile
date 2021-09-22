import React, { lazy, Suspense, useEffect, useState } from "react";
//import RouteManager from "./infrastructures/route/RouteManager";
import "./assets/sass/Main.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { resolve } from "path";
import test from "./assets/images/backgrounds/undraw_contact_us_15o2.svg";
import PreloadImages from "./components/loading/preload-images/PreloadImages";
import TwoCircleLoading from "./components/loading/two-circle-loading/TwoCircleLoading";

const RouteManager = lazy(() => import("./infrastructures/route/RouteManager"));

function App() {
  AOS.init({
    delay: 350,
    offset: 130,
  });

  // const cacheImage = () => {
  //   return new Promise((resolve, reject) => {
  //     let image = new Image();
  //     image.src = test;
  //     image.onload = () => resolve("");
  //     image.onerror = () => reject();
  //   });
  // };

  return (
    <Suspense fallback={<TwoCircleLoading />}>
      <PreloadImages>
        <RouteManager />
      </PreloadImages>
    </Suspense>
  );
}

export default App;

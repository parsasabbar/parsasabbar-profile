import React, { useEffect, useLayoutEffect } from "react";
import styles from "./MainLayout.module.scss";
import { animated, useSpring } from "react-spring";
//import Particles from "react-particles-js";
import Particles from "react-tsparticles";
import EffectivePageMove from "../components/effective-page-move/EffectivePageMove";

function MainLayout(props: any) {
  useEffect(() => {
    //settest(true);
    //console.log("test");
  }, []);
  return (
    <div className={styles.main_layout}>
      <div className={styles.particles_container}>
        {window.innerWidth > 670 && (
          <Particles
            id="tsparticles"
            // init={this.particlesInit}
            // loaded={this.particlesLoaded}
            options={{
              background: {
                color: {
                  value: "transparent",
                },
              },
              fpsLimit: 60,
              particles: {
                color: {
                  value: "#000000",
                },
                links: {
                  color: "#000000",
                  distance: 200,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 1.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 50,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 3,
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>

      <div className={styles.layout_content}>
        <EffectivePageMove>{props.children}</EffectivePageMove>
      </div>
    </div>
  );
}

export default MainLayout;

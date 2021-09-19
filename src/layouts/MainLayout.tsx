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
            // interactivity: {
            //   detectsOn: "canvas",
            //   events: {
            //     onClick: {
            //       enable: true,
            //       mode: "repulse",
            //     },
            //     onHover: {
            //       enable: true,
            //       mode: "repulse",
            //     },
            //     resize: true,
            //   },
            //   modes: {
            //     bubble: {
            //       distance: 400,
            //       duration: 2,
            //       opacity: 0.8,
            //       size: 40,
            //     },
            //     push: {
            //       quantity: 4,
            //     },
            //     repulse: {
            //       distance: 200,
            //       duration: 0.4,
            //     },
            //   },
            // },
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
      </div>

      <div className={styles.layout_content}>
        <EffectivePageMove>{props.children}</EffectivePageMove>
      </div>
    </div>
  );
}

export default MainLayout;

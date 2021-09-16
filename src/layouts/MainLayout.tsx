import React from "react";
import styles from "./MainLayout.module.scss";
import { animated, useSpring } from "react-spring";

function MainLayout(props: any) {
  const style = useSpring({
    from: {
      transform: "scale(0.75,0.75)",
    },
    to: {
      transform: "scale(1,1)",
    },
    //config: { duration: 3000 },
  });
  return (
    <div className={styles.main_layout}>
      <div className={styles.layout_content}>
        <animated.div style={style}>{props.children}</animated.div>
      </div>
    </div>
  );
}

export default MainLayout;

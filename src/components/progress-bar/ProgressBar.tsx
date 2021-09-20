import React, { useEffect, useRef, useState } from "react";
import styles from "./ProgressBar.module.scss";
import VisibilitySensor from "react-visibility-sensor";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import useMeasure from "react-use-measure";

function ProgressBar(props: { percentage: number }) {
  const [visited, setVisited] = useState(false);
  const [progressWidth, setProgressWidth] = useState(0);
  // const [progressRef, { width }] = useMeasure();
  const springStyle = useSpring({ width: visited ? progressWidth : 0 });
  const progressRef = useRef<HTMLDivElement>(null);

  //methods
  const updateProgressWidth = () => {
    setProgressWidth(
      props.percentage *
        (progressRef.current?.getBoundingClientRect().width || 0)
    );
  };
  useEffect(() => {
    setTimeout(() => {
      updateProgressWidth();
    }, 500);

    window.addEventListener("resize", updateProgressWidth);
    return () => {
      window.removeEventListener("resize", updateProgressWidth);
    };
  }, []);

  return (
    <div className={styles.progress_bar}>
      <VisibilitySensor onChange={(isVisibale) => setVisited(isVisibale)}>
        <div className={styles.bar} ref={progressRef}>
          <animated.div style={springStyle}></animated.div>
        </div>
      </VisibilitySensor>
    </div>
  );
}

export default ProgressBar;

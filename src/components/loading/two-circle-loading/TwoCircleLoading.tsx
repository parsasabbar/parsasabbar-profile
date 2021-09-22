import React, { CSSProperties } from "react";
import styles from "./TwoCircleLoading.module.scss";

function TwoCircleLoading() {
  return (
    <div className={styles.two_circle_loading}>
      <div className={styles.cotainer}>
        <svg
          className={styles.loading_circle1}
          width={200}
          height={200}
          viewBox="0 0 52.916666 52.916666"
          version="1.1"
          id="svg8"
        >
          <g id="layer1">
            <path
              id="path839"
              style={{
                fill: "none",
                fillRule: "evenodd",
                strokeMiterlimit: 4,
              }}
              d="M 190.89648,98.214844 C 189.92441,48.709667 149.51472,9.0857875 100,9.0859375 h -0.08984 C 50.430383,9.1346832 10.07488,48.744582 9.1035156,98.214844"
              transform="scale(0.26458333)"
            ></path>
          </g>
        </svg>
        <svg
          className={styles.loading_circle2}
          width={200}
          height={200}
          viewBox="0 0 52.916666 52.916666"
          version="1.1"
          id="svg8"
        >
          <g id="layer1">
            <path
              id="path839"
              style={{
                fill: "none",
                fillRule: "evenodd",
                strokeMiterlimit: 4,
              }}
              d="M 190.89648,98.214844 C 189.92441,48.709667 149.51472,9.0857875 100,9.0859375 h -0.08984 C 50.430383,9.1346832 10.07488,48.744582 9.1035156,98.214844"
              transform="scale(0.26458333)"
            ></path>
          </g>
        </svg>
      </div>
      <div className={styles.inner}>
        <div>loading...</div>
      </div>
    </div>
  );
}

export default TwoCircleLoading;

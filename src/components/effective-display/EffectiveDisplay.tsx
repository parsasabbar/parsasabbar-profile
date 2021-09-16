import React, { useEffect, useState } from "react";
import styles from "./EffectiveDisplay.module.scss";
import refreshImage from "../../assets/images/icons/refresh.svg";
import leftChevronImage from "../../assets/images/icons/left-chevron.svg";
import rightChevronImage from "../../assets/images/icons/right-chevron.svg";
import IEffectiveDisplayProps from "./EffectiveDisplayModel";

function EffectiveDisplay(props: IEffectiveDisplayProps) {
  //states
  const [allowRender, setAllowRender] = useState(false);

  //useEffects
  useEffect(() => {
    if (props.delay) {
      setTimeout(() => {
        setAllowRender(true);
      }, props.delay);
    } else {
      setAllowRender(true);
    }
  }, []);
  return (
    <div className={styles.effective_display + " " + props.className}>
      {allowRender && (
        <>
          <div className={styles.content}>
            <div className={styles.overlay}>
              <div className={styles.left_chevron_container}>
                <img src={leftChevronImage} />
              </div>
              <div className={styles.component}>{props.children}</div>
              <div className={styles.right_chevron_container}>
                <img src={rightChevronImage} />
              </div>
            </div>
          </div>
          <div className={styles.orbit}>
            <img src={refreshImage} />
          </div>
        </>
      )}
    </div>
  );
}

export default EffectiveDisplay;

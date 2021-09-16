import React from "react";
import styles from "./DefaultPage.module.scss";
import parsaSabbarImage from "../../assets/images/parsa-sabbar1.jpg";
import { Link } from "react-router-dom";
import EffectiveDisplay from "../../components/effective-display/EffectiveDisplay";

function DefaultPage() {
  return (
    <div className={styles.default_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          <img src={parsaSabbarImage} />
        </div>
        <div className={styles.content}>
          <h1>پارسا صبار</h1>
          <div className={styles.links}>
            <EffectiveDisplay>
              <Link to="">hello</Link>
            </EffectiveDisplay>
          </div>
          <div className={styles.links}>
            <EffectiveDisplay>
              <Link to="">hello</Link>
            </EffectiveDisplay>
          </div>
          <div className={styles.links}>
            <EffectiveDisplay>
              <Link to="">hello</Link>
            </EffectiveDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;

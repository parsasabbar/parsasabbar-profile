import React from "react";
import styles from "./DefaultPage.module.scss";
import parsaSabbarImage from "../../assets/images/parsa-sabbar1.jpg";
import { Link } from "react-router-dom";
import EffectiveDisplay from "../../components/effective-display/EffectiveDisplay";
import MyLink from "../../components/my-link/MyLink";

function DefaultPage() {
  return (
    <div className={styles.default_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          {/* <img src={parsaSabbarImage} /> */}
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
              <MyLink to="/contact">contact</MyLink>
            </EffectiveDisplay>
          </div>
          <div className={styles.links}>
            <EffectiveDisplay>
              <MyLink to="/about-me">hello</MyLink>
            </EffectiveDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;

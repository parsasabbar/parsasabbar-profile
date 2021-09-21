import React from "react";
import styles from "./DefaultPage.module.scss";
import parsaSabbarImage from "../../assets/images/parsa-sabbar1.jpg";
import { Link } from "react-router-dom";
import EffectiveDisplay from "../../components/effective-display/EffectiveDisplay";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import Button from "../../components/button/Button";

function DefaultPage() {
  return (
    <div className={styles.default_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          {/* <img src={parsaSabbarImage} /> */}
        </div>
        <div className={styles.content}>
          <div className={styles.main_info_container}>
            <h1>Parsa Sabbar</h1>
            <h5>Full Stack Developer</h5>
          </div>
          <div className={styles.button_container}>
            <EffectiveDisplay delay={300}>
              <MyLink to={Routes.ABOUT_ME}>
                <Button className={styles.links}>About Me</Button>
              </MyLink>
            </EffectiveDisplay>
          </div>
          <div className={styles.button_container}>
            <EffectiveDisplay delay={500}>
              <MyLink to={Routes.WORK_EXPERIENCES}>
                <Button className={styles.links}>Work Experiences</Button>
              </MyLink>
            </EffectiveDisplay>
          </div>
          <div className={styles.button_container}>
            <EffectiveDisplay delay={700}>
              <MyLink to={Routes.CONTACT}>
                <Button className={styles.links}>Contact</Button>
              </MyLink>
            </EffectiveDisplay>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPage;

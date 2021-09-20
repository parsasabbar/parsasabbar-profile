import React, { useEffect, useRef } from "react";
import Button from "../../components/button/Button";
import MyLink from "../../components/my-link/MyLink";
import Percentage from "../../components/progress-bar/ProgressBar";
import Routes from "../../models/Routes";
import styles from "./AboutMePage.module.scss";
import backIcon from "../../assets/images/icons/arrow.svg";
import titleImage from "../../assets/images/backgrounds/undraw_Profile_re_4a55.svg";

function AboutMePage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   console.log("hi");
    // });
    // setInterval(() => {
    //   console.log(ref.current?.getBoundingClientRect());
    // }, 1000);
  }, []);
  return (
    <div className={styles.about_me_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          <img src={titleImage} draggable={false} />
        </div>
        <h2>About Me</h2>
        <p>
          hello i am parsa sabbar hello i am parsa sabbar hello i am parsa
          sabbar hello i am parsa sabbar hello i am parsa sabbar
        </p>
        <h2>skills</h2>
        <div className={styles.skills_container}>
          <div className={styles.skill}>
            <span>test</span>
            <Percentage percentage={0.5} />
          </div>
          <div className={styles.skill}>
            <span>test</span>
            <Percentage percentage={1} />
          </div>
          <div className={styles.skill}>
            <span>test</span>
            <Percentage percentage={0.5} />
          </div>
        </div>

        <MyLink to={Routes.DEFAULT}>
          <Button icon={backIcon}>back</Button>
        </MyLink>
      </div>
    </div>
  );
}

export default AboutMePage;

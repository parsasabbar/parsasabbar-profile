import React, { useEffect, useRef } from "react";
import MyLink from "../../components/my-link/MyLink";
import Percentage from "../../components/percentage/Percentage";
import styles from "./AboutMePage.module.scss";
function AboutMePage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("hi");
    });
    // setInterval(() => {
    //   console.log(ref.current?.getBoundingClientRect());
    // }, 1000);
  }, []);
  return (
    <div className={styles.about_me_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}></div>
        {/* #00BFA6 */}
        <h2>about me</h2>
        <p>
          hello i am parsa sabbar hello i am parsa sabbar hello i am parsa
          sabbar hello i am parsa sabbar hello i am parsa sabbar
        </p>
        <MyLink to="/">test</MyLink>
        <h2>skills</h2>
        <div className={styles.skills_container}>
          <div className={styles.skill}>
            <span>test</span>
            <Percentage />
          </div>
          <div className={styles.skill}>
            <span>test</span>
            <Percentage />
          </div>
          <div className={styles.skill}>
            <span>test</span>
            <Percentage />
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div ref={ref}>hello world</div>
      </div>
    </div>
  );
}

export default AboutMePage;

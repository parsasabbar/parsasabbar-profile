import React, { useEffect } from "react";
import MyLink from "../../components/my-link/MyLink";
import styles from "./AboutMePage.module.scss";
function AboutMePage() {
  return (
    <div
      className={styles.about_me_page}
      style={{ padding: "10rem", border: "3px solid" }}
    >
      <MyLink to="/">test</MyLink>
    </div>
  );
}

export default AboutMePage;

import styles from "./ContactPage.module.scss";
import gmailIcon from "../../assets/images/icons/contact/gmail.svg";
import linkedinIcon from "../../assets/images/icons/contact/linkedin.svg";
import telegramIcon from "../../assets/images/icons/contact/telegram.svg";
import instagramIcon from "../../assets/images/icons/contact/instagram.svg";
import callIcon from "../../assets/images/icons/contact/call.svg";
import Button from "../../components/button/Button";
import backIcon from "../../assets/images/icons/arrow.svg";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import titleImage from "../../assets/images/backgrounds/undraw_contact_us_15o2.svg";
import { useEffect, useRef } from "react";
function ContactPage() {
  return (
    <div className={styles.contact_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          <img src={titleImage} draggable={false} />
        </div>
        <h2>contact</h2>
        <div className={styles.social_container}>
          <div className={styles.social} data-aos="zoom-out">
            <div>
              <img src={callIcon} />
            </div>
            <div className={styles.info}>hello world</div>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <a href="">
              <div>
                <img src={linkedinIcon} />
              </div>
              <div className={styles.info}>hello world</div>
            </a>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <div>
              <img src={gmailIcon} />
            </div>
            <div className={styles.info}>hello world</div>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <div>
              <img src={telegramIcon} />
            </div>
            <div className={styles.info}>hello world</div>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <div>
              <img src={instagramIcon} />
            </div>
            <div className={styles.info}>hello world</div>
          </div>
        </div>
        <MyLink to={Routes.DEFAULT}>
          <Button icon={backIcon}>back</Button>
        </MyLink>
      </div>
    </div>
  );
}

export default ContactPage;

import styles from "./ContactPage.module.scss";
import gmailIcon from "../../assets/images/icons/contact/gmail.svg";
import linkedinIcon from "../../assets/images/icons/contact/linkedin.svg";
import telegramIcon from "../../assets/images/icons/contact/telegram.svg";
import instagramIcon from "../../assets/images/icons/contact/instagram.svg";
import mtnIrancellIcon from "../../assets/images/icons/contact/mtn-irancell.svg";
import callIcon from "../../assets/images/icons/contact/call.svg";
import linkIcon from "../../assets/images/icons/contact/exit-top-right.svg";
import Button from "../../components/button/Button";
import backIcon from "../../assets/images/icons/arrow.svg";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import titleImage from "../../assets/images/backgrounds/undraw_contact_us_15o2.svg";

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
            <a href="tel:+989388547745">
              <div>
                <img src={callIcon} />
              </div>
              <div className={styles.info}>+98 9388547745</div>
              <div className={styles.linkIcon}>
                <img src={linkIcon} />
              </div>
            </a>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <a
              href="https://www.linkedin.com/in/parsa-sabbar-a1184819b"
              target="_blank"
            >
              <div>
                <img src={linkedinIcon} />
              </div>
              <div className={styles.info}>parsa-sabbar</div>
              <div className={styles.linkIcon}>
                <img src={linkIcon} />
              </div>
            </a>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <a
              href="https://mail.google.com/mail/u/0/#search/parsasabbar%40gmail.com"
              target="_blank"
            >
              <div>
                <img src={gmailIcon} />
              </div>
              <div className={styles.info}>parsasabbar@gmail.com</div>
              <div className={styles.linkIcon}>
                <img src={linkIcon} />
              </div>
            </a>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <a href="https://t.me/parsasabbar" target="_blank">
              <div>
                <img src={telegramIcon} />
              </div>
              <div className={styles.info}>@parsasabbar</div>
              <div className={styles.linkIcon}>
                <img src={linkIcon} />
              </div>
            </a>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <a href="https://www.instagram.com/parsasabbar" target="_blank">
              <div>
                <img src={instagramIcon} />
              </div>
              <div className={styles.info}>parsasabbar</div>
              <div className={styles.linkIcon}>
                <img src={linkIcon} />
              </div>
            </a>
          </div>
          <div className={styles.social} data-aos="zoom-out">
            <Link to={Routes.CONTACT}>
              <div>
                <img src={mtnIrancellIcon} />
              </div>
              <div className={styles.info}>parsa.s@mtnirancell.ir</div>
              {/* <div className={styles.linkIcon}>
                <img src={linkIcon} />
              </div> */}
            </Link>
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

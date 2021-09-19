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

function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={styles.box_container}>
        <div className={styles.image_container}></div>
        <h2>contact</h2>
        <div className={styles.social_container}>
          <div className={styles.social}>
            <div>
              <img src={callIcon} />
            </div>
            <div>hello world</div>
          </div>

          <div className={styles.social}>
            <div>
              <img src={telegramIcon} />
            </div>
            <div>hello world</div>
          </div>
          <div className={styles.social}>
            <div>
              <img src={gmailIcon} />
            </div>
            <div>hello world</div>
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

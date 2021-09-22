import styles from "./ExperiencesPage.module.scss";
import titleImage from "../../assets/images/backgrounds/undraw_Project_completed_re_pqqq.svg";
import Button from "../../components/button/Button";
import backIcon from "../../assets/images/icons/arrow.svg";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import Stepper from "../../components/stepper/Stepper";
import sajImg from "../../assets/images/icons/experiences/Saj.png";
import matnaImg from "../../assets/images/icons/experiences/matna.jpeg";

function ExperiencesPage() {
  return (
    <div className={styles.experiences_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          <img src={titleImage} draggable={false} />
        </div>
        <h2>Work Experiences</h2>
        <div className={styles.details_container}>
          <h3>Companies</h3>
          <Stepper
            items={[
              { image: sajImg, explain: "test" },
              { image: matnaImg, explain: "test" },
            ]}
          />
          <h3>Demos</h3>
          <ul className={styles.demos_container}>
            <li data-aos="zoom-out">
              <h5>Pars Boksel</h5>
              <a href="http://parsboksel.ir">parsboksel.ir</a>
              <p>
                this is my first website project created using asp.net webforms
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Perspolis Pitch</h5>
              <a href="http://perspolispitch.com">perspolispitch.com</a>
              <p>this project is created using asp.net webform too</p>
            </li>
            <li data-aos="zoom-out">
              <h5>Samo Persian</h5>
              <a href="http://www.hozoorchain-iranchain.com/">
                hozorchain-iranchain.com
              </a>
              <p>this project is created using asp.net core and rezor pages</p>
            </li>
            <li data-aos="zoom-out">
              <h5>Folad Press</h5>
              <a href="http://perspolispitch.com">perspolispitch.com</a>
              <p>
                for backed, I used asp.net core Rest Api and for frontend i used
                html and vanilla js
              </p>
            </li>
          </ul>
        </div>

        <MyLink to={Routes.DEFAULT}>
          <Button icon={backIcon}>back</Button>
        </MyLink>
      </div>
    </div>
  );
}

export default ExperiencesPage;

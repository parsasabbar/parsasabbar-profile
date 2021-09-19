import styles from "./ExperiencesPage.module.scss";
import titleImage from "../../assets/images/backgrounds/undraw_Project_completed_re_pqqq.svg";
import Button from "../../components/button/Button";
import backIcon from "../../assets/images/icons/arrow.svg";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import Stepper from "../../components/stepper/Stepper";

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
          <Stepper />
          <h3>Demos</h3>
          <ul>
            <li>
              <h5>Pars Boksel</h5>
              <a href="https://google.com">google.com</a>
              <p>as a freelancer project</p>
            </li>
            <li>
              <h5>Pars Boksel</h5>
              <a href="https://google.com">google.com</a>
              <p>as a freelancer project</p>
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

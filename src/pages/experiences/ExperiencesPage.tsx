import styles from "./ExperiencesPage.module.scss";
import titleImage from "../../assets/images/backgrounds/undraw_Project_completed_re_pqqq.svg";
import Button from "../../components/button/Button";
import backIcon from "../../assets/images/icons/arrow.svg";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import Stepper from "../../components/stepper/Stepper";
import sajImg from "../../assets/images/icons/experiences/Saj.png";
import matnaImg from "../../assets/images/icons/experiences/matna.png";

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
              {
                image: sajImg,
                title: "Sepand Asa Jonob",
                explain: "Sepand Asa Jonob",
              },
              {
                image: matnaImg,
                title: "Pars System Energy",
                explain: "Pars System Energy",
              },
            ]}
          />
          <h3>Demos</h3>
          <ul className={styles.demos_container}>
            <li data-aos="zoom-out">
              <h5>Pars Boksel</h5>
              <a href="http://parsboksel.ir" target="_blank">
                parsboksel.ir
              </a>
              <p>
                this is my website,
                <br />
                technologies:
                <ul>
                  <li>Asp.net web forms</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Perspolis Pitch</h5>
              <a href="http://perspolispitch.com" target="_blank">
                perspolispitch.com
              </a>
              <p>
                this project is created using asp.net webform too
                <br />
                technologies:
                <ul>
                  <li>Asp.net web forms</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Samo Persian</h5>
              <a href="http://www.hozoorchain-iranchain.com/" target="_blank">
                hozorchain-iranchain.com
              </a>
              <p>
                this project is created using asp.net core and rezor pages
                <br />
                technologies:
                <ul>
                  <li>Asp.net core</li>
                  <li>Razor Pages</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Vanilla Javascript</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Folad Press</h5>
              <a href="http://foladpress.ir" target="_blank">
                foladpress.ir
              </a>
              <p>
                for backed, I used asp.net core Rest Api and for frontend i used
                html and vanilla js
                <br />
                technologies:
                <ul>
                  <li>Asp.net core</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Vanilla Javascript</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>TDMS</h5>
              <a href="http://saj-tdms.ir" target="_blank">
                saj-tdms.ir (private)
              </a>
              <p>
                for backed, I used asp.net core Rest Api and for frontend i used
                html and vanilla js
                <br />
                technologies:
                <ul>
                  <li>React</li>
                  <li>Asp.net MVC</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Pnete</h5>
              <a href="https://matna.pnete.com" target="_blank">
                matna.pnete.com
              </a>
              <p>
                for backed, I used asp.net core Rest Api and for frontend i used
                html and vanilla js
                <br />
                technologies:
                <ul>
                  <li>React</li>
                  <li>Asp.net MVC</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Setare Yab</h5>
              <a href="https://setareyab.ir" target="_blank">
                setareyab.ir
              </a>
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

import styles from "./ExperiencesPage.module.scss";
import titleImage from "../../assets/images/backgrounds/undraw_Project_completed_re_pqqq.svg";
import Button from "../../components/button/Button";
import backIcon from "../../assets/images/icons/arrow.svg";
import MyLink from "../../components/my-link/MyLink";
import Routes from "../../models/Routes";
import Stepper from "../../components/stepper/Stepper";
import sajImg from "../../assets/images/icons/experiences/Saj.png";
import matnaImg from "../../assets/images/icons/experiences/matna.png";
import { Link } from "react-router-dom";
import { useRef } from "react";

function ExperiencesPage() {
  const sajBoxRef = useRef<HTMLDivElement>(null);
  const pmmBoxRef = useRef<HTMLDivElement>(null);

  //event handlers
  const onClickLinkCompany = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    company: "saj" | "pmm"
  ) => {
    e.preventDefault();
    switch (company) {
      case "pmm": {
        pmmBoxRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }
      case "saj": {
        sajBoxRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
        return;
      }
      default:
        return;
    }
  };

  return (
    <div className={styles.experiences_page}>
      <div className={styles.box_container}>
        <div className={styles.image_container}>
          <img src={titleImage} draggable={false} />
        </div>
        <h2>Work Experiences</h2>
        <div className={styles.details_container}>
          <h3>Companies</h3>
          <div className={styles.stepper_container}>
            <Stepper
              items={[
                {
                  image: sajImg,
                  title: "Sepand Asa Jonob",
                  ref: sajBoxRef,
                  explain: (
                    <>
                      1 year as Full Stack developer
                      <br />
                      Install, configure and maintaining web services
                      <br />
                      Managing project infrastructure operations and services.
                      <br />
                      <a href="http://sepand-asa.ir" target="_blank">
                        sepand-asa.ir
                      </a>
                    </>
                  ),
                },
                {
                  image: matnaImg,
                  title: "Pishro Net Energy",
                  ref: pmmBoxRef,
                  explain: (
                    <>
                      1 year as Frontend developer
                      <br />
                      configure and developing whole react project
                      <br />
                      <a href="https://pnete.com" target="_blank">
                        pnete.com
                      </a>
                    </>
                  ),
                },
              ]}
            />
          </div>
          <h3>Demos</h3>
          <ul className={styles.demos_container}>
            <li data-aos="zoom-out">
              <h5>Pars Boksel</h5>
              <a href="http://parsboksel.ir" target="_blank">
                parsboksel.ir
              </a>
              <p>
                This is my first website.
                <br />
                Technologies:
                <ul>
                  <li>Asp.net web forms</li>
                  <li>MSSQL</li>
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
                Technologies:
                <ul>
                  <li>Asp.net web forms</li>
                  <li>MSSQL</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Samo Persian</h5>
              <a href="http://www.hozoorchain-iranchain.com/" target="_blank">
                hozoorchain-iranchain.com
              </a>
              <p>
                In this website, I used Asp.net core mvc architecture.
                <br />
                Technologies:
                <ul>
                  <li>Asp.net core</li>
                  <li>MSSQL</li>
                  <li>Entity Framework</li>
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
                In this website, I used rest api for backend webservice and
                vanilla js for front end.
                <br />
                Technologies:
                <ul>
                  <li>Asp.net core</li>
                  <li>MSSQL</li>
                  <li>Entity Framework</li>
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
                This is the project I worked on at{" "}
                <Link to="" onClick={(e) => onClickLinkCompany(e, "saj")}>
                  Sepand Asa Jonob
                </Link>{" "}
                company.
                <br />
                Technologies:
                <ul>
                  <li>React</li>
                  <li>Asp.net MVC</li>
                  <li>MSSQL</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Matna</h5>
              <a href="https://matna.pnete.com" target="_blank">
                matna.pnete.com
              </a>
              <p>
                Matna is the main project of{" "}
                <Link to="" onClick={(e) => onClickLinkCompany(e, "pmm")}>
                  Pishro Net Energy
                </Link>{" "}
                company; <br /> I worked there as frontend developer and
                maintaining the project.
                <br />
                Matna is used by lots of big companies such as Iranmall, Medical
                Equipment Department, Pasargad insurance, Razi serum production
                and ...
                {/* <br />
                In backend have a ton of python code but I have not had the
                opportunity to work on python projects. */}
                <br />
                Technologies:
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>PostgreSQL</li>
                  <li>Django</li>
                  <li>Docker</li>
                </ul>
                Features:
                <ul>
                  <li>Use PWA</li>
                  <li>
                    Submit reports offline and send data to server when device
                    become online
                  </li>
                  <li>
                    Save all report fields for offline usage (via indexedDB)
                  </li>
                  <li>Barcode scanner</li>
                  <li>Draggable items</li>
                  <li>Real time data from sensors</li>
                  <li>Real time graphs</li>
                  <li>Attendance via camera and check location</li>
                </ul>
              </p>
            </li>
            <li data-aos="zoom-out">
              <h5>Setare Yab</h5>
              <a href="https://setareyab.ir" target="_blank">
                setareyab.ir
              </a>
              <p>
                In this project I worked as technical manager and backend
                developer. <br />
                Supervise team of 3 programmer and 1 designer.
                <br />
                Automated build, delivery and release project.
                <br />
                Mange tasks via trello.
                <br /> Technologies:
                <ul>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Express</li>
                  <li>Socket.IO</li>
                  <li>MongoDB</li>
                  <li>Docker</li>
                  <li>Nginx</li>
                  <li>Gitlab CI/CD</li>
                </ul>
                Features:
                <ul>
                  <li>Upload huge files</li>
                  <li>Streaming video</li>
                  <li>Real time chat (via websocket)</li>
                  <li>Real time notification (via websocket)</li>
                  <li>SMS notification</li>
                  <li>Bank portal</li>
                  <li>Load balancer</li>
                </ul>
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

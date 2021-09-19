import styles from "./Stepper.module.scss";
import sajImg from "../../assets/images/icons/experiences/Saj.png";
import matnaImg from "../../assets/images/icons/experiences/matna.jpeg";
function Stepper() {
  return (
    <div className={styles.stepper}>
      <div className={styles.dot}>
        <div className={styles.explain_right}>
          <img src={sajImg} />
          <p>hello world hello world hello world</p>
        </div>
      </div>
      <div className={styles.vertical_line}></div>
      <div className={styles.dot}>
        <div className={styles.explain_left}>
          {" "}
          <img src={matnaImg} />
          <p>hello world</p>
        </div>
      </div>
    </div>
  );
}

export default Stepper;

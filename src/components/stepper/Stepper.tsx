import styles from "./Stepper.module.scss";

function Stepper(props: {
  items?: { image: string; title: string; explain: string }[];
}) {
  return (
    <div className={styles.stepper}>
      {props.items &&
        props.items.map((item, index) =>
          index % 2 === 0 ? (
            props.items!.length - 1 === index ? (
              <div className={styles.dot} data-aos="fade-right">
                <div className={styles.explain_right}>
                  <img src={item.image} />
                  <h5>{item.title}</h5>
                  <p></p>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.dot} data-aos="fade-right">
                  <div className={styles.explain_right}>
                    <img src={item.image} />
                    <h5>{item.title}</h5>
                    <p>hello world hello world hello world</p>
                  </div>
                </div>
                <div className={styles.vertical_line}></div>
              </>
            )
          ) : props.items!.length - 1 === index ? (
            <div className={styles.dot} data-aos="fade-left">
              <div className={styles.explain_left}>
                <img src={item.image} />
                <h5>{item.title}</h5>
                <p>hello world</p>
              </div>
            </div>
          ) : (
            <>
              <div className={styles.dot} data-aos="fade-left">
                <div className={styles.explain_left}>
                  <img src={item.image} />
                  <h5>{item.title}</h5>
                  <p>hello world</p>
                </div>
              </div>
              <div className={styles.vertical_line}></div>
            </>
          )
        )}
    </div>
  );
}

export default Stepper;

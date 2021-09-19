import styles from "./Button.module.scss";

function Button(props: { children?: any; icon?: string }) {
  return (
    <button className={styles.button}>
      {props.icon && <img src={props.icon} />}
      {props.children}
    </button>
  );
}

export default Button;

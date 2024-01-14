import styles from "./switch.module.css";

export const Switch = ({ condition, setStatus, status, label }) => {

  return (
    <div
      className={styles.wrapper}
      onClick={() => {
        setStatus(status)
      }}
    >
      <div className={condition ? styles.switchOn : styles.switchOff}>
        <div
          className={condition ? styles.circleOn : styles.circleOff}
        ></div>
      </div>
      <div className={condition ? styles.labelOn : styles.labelOff}>
        {label}
      </div>
    </div>
  );
};

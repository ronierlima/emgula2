import styles from "./Footer.module.css";
import logo from "../../assets/logo.png";
function Footer(props) {
  const temaDark = props.dark;

  return (
    <footer className={`${styles["footer"]} ${temaDark ? styles["dark"] : ""}`}>
      <div className={styles["footer__top"]}>
        <div className={styles["footer-top-logo__container"]}>
          <img className={styles["footer-top__logo"]} src={logo} alt="" />
          desde "só Deus sabe quando"
        </div>
      </div>
      <div className={styles["footer__bottom"]}>
        <p>Criado por Ronier Lima</p>
      </div>
    </footer>
  );
}

export default Footer;

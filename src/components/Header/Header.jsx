import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
function Header(props) {
  const temaDark = props.dark;

  return (
    <header className={`${styles["header"]} ${temaDark ? styles["dark"] : ""}`}>
      <div className={styles["header__container"]}>
        <a href="#">
          <img
            className={`${styles["logo"]} ${temaDark ? styles["dark"] : ""}`}
            src={logo}
            alt="Logo Em gula"
          />
        </a>
        <nav className={styles["nav"]}>
          <ul className={styles["nav__list"]}>
            <li className={`${styles["nav__item"]} ${styles["active"]}`}>
              <a href="#"></a>HOME
            </li>
            <li className={styles["nav__item"]}>SOBRE</li>
            <li className={styles["nav__item"]}>MENU</li>
            <li className={`${styles["nav__item"]} active`}>CONTATO</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

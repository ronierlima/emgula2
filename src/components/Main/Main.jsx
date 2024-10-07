import Section from "../Section/Section";
import styles from "./Main.module.css";
import { MdPhoneInTalk } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";

function Main(props) {
  const temaDark = props.dark;

  return (
    <main className={`${styles["main"]} ${temaDark ? styles["dark"] : ""}`}>
      <Section>
        <div className={styles["section__sobre"]}>
          <div className={styles["section-sobre__container"]}>
            <h2 className={styles["section-sobre-container__title"]}>Sobre</h2>
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles["section__cardápio"]}>
          <h2 className={styles["section-cardápio__title"]}>Cardápio</h2>
          <div className={styles["section-cardápio__container"]}>
            <div className={styles["section-cardápio-container__item"]}></div>
            <div className={styles["section-cardápio-container__item"]}></div>
            <div className={styles["section-cardápio-container__item"]}></div>
            <div className={styles["section-cardápio-container__item"]}></div>
            <div className={styles["section-cardápio-container__item"]}></div>
            <div className={styles["section-cardápio-container__item"]}></div>
          </div>
        </div>
      </Section>
      <Section>
        <div className={styles["section__contatos"]}>
          <h2 className={styles["section-contatos__title"]}>Contatos</h2>
          <div className={styles["section-contatos-container__icons"]}>
            <MdPhoneInTalk
              size={50}
              className={styles["section-contatos__icons"]}
            />
            <MdAlternateEmail
              size={50}
              className={styles["section-contatos__icons"]}
            />
          </div>
        </div>
      </Section>
    </main>
  );
}

export default Main;

import Section from "../Section";
import styles from "./Main.module.css";

function Main(props) {
  const temaDark = props.dark;

  return (
    <main className={`${styles["main"]} ${temaDark ? styles["dark"] : ""}`}>
      <Section>Sobre</Section>
      <Section>Cardápio</Section>
      <Section>Contato</Section>
    </main>
  );
}

export default Main;

import styles from "./Footer.module.css";
import { useState } from "react";

function handleInstragram() {
  window.open("https://www.instagram.com/samzaksistemaseguranca?igsh=OHhzY3U0cnoycHp5");
}

export default function Footer() {
  const telNumber = "(11)99649-5733";
  const [message, setMessage] = useState("");

  function handleCel() {
    navigator.clipboard.writeText("(11)99649-5733").then(() => {
      setMessage("Copiado");
      setTimeout(() => {
        setMessage("(11)99649-5733");
      }, 3000); 
    });
  }

  return (
    <footer className={styles.Footer}>
      <div className={styles.iconsFooter}>
        <div onClick={handleInstragram} className={styles.iconItem}>
          <img className={styles.iconsImg} src="src/assets/instagram-footer.png" alt="instagram" />
          <p>Instagram</p>
        </div>
        <div onClick={handleCel} className={styles.iconItem}>
          <img className={styles.iconsImg} src="src/assets/celular-footer.png" alt="celular" />
          <p>{message || telNumber}</p>
        </div>
      </div>
      <p>&copy; {new Date().getFullYear()} Samzak. Todos os direitos reservados.</p>
    </footer>
  );
}

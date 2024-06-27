import styles from "./Footer.module.css"

export default function Footer(){
    return <footer className={styles.Footer}>
    <div className={styles.container}>
      <p>&copy; {new Date().getFullYear()} Samzak. Todos os direitos reservados.</p>
    </div>
  </footer>
}
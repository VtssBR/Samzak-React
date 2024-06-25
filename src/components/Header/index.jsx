import propTypes from "prop-types"
import styles from "./Header.module.css"

Header.propTypes = {
    title1: propTypes.string,
    title2: propTypes.string,
    title3: propTypes.string,
}

export default function Header({cover,title1,title2,title3}){
    return <div className={styles.Header}>
        <div className={styles.logo}>
        <img src={cover} alt="Logo" className={styles.logoImg}/>
        <h2>SAMZAK</h2>
        </div>
        <div className={styles.List}>
            <ul className={styles.buttons}>
                <button>{title1}</button>
                <button>{title2}</button>
                <button>{title3}</button>
            </ul>
        </div>
    </div>
}
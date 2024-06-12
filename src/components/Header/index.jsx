import PropTypes from "prop-types"
import styles from "./Header.module.css"

Header.PropTypes = {
    title1: PropTypes.string,
    title2: PropTypes.string,
    title3: PropTypes.string,
}

export default function Header({cover,title1,title2,title3}){
    return <div className={styles.Header}>
        <div className={styles.logo}>
        <img src={cover} alt="Logo" className={styles.logoImg}/>
        <h2>SAMZAK</h2>
        </div>
        <div className="List">
            <ul className={styles.buttons}>
                <button>{title1}</button>
                <button onclick="document.getElementById('title-services').scrollIntoView({ behavior: 'smooth' });">{title2}</button>
                <button>{title3}</button>
            </ul>
        </div>
    </div>
}
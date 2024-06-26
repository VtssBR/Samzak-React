import propTypes from "prop-types"
import styles from "./Header.module.css"

Header.propTypes = {
    title1: propTypes.string,
    title2: propTypes.string,
    title3: propTypes.string,
    onLogoClick: propTypes.func,
    onButtonClick1: propTypes.func,
    onButtonClick2: propTypes.func,
    onButtonClick3: propTypes.func,
}

export default function Header({cover,title1,title2,title3,onLogoClick,onButtonClick1, onButtonClick2, onButtonClick3}){
    return <div className={styles.Header}>
        <div onClick={onLogoClick} className={styles.logo}>
                <img src={cover} alt="Logo" className={styles.logoImg}/>
                <h2>SAMZAK</h2>
        </div>
        <div className={styles.List}>
            <ul className={styles.buttons}>
                <button onClick={onButtonClick1}>{title1}</button>
                <button onClick={onButtonClick2}>{title2}</button>
                <button onClick={onButtonClick3}>{title3}</button>
            </ul>
        </div>
    </div>
}
import { useState } from "react";
import PropTypes from "prop-types"
import styles from "./Card.module.css"

Card.PropTypes = {
    titleCard: PropTypes.string,
    textCard: PropTypes.string,
}


export default function Card({titleCard, textCard, imgCard}){
    return (
        <>
            <div className={styles.Card}>
                <img src={imgCard} alt="Teste" className={styles.imgCard}/>
                <span className={styles.textContent}>
                    <h3>{titleCard}</h3>
                    <p>{textCard}</p>
                </span>
            </div>
        </>
    )
}
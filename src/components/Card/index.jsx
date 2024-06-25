import { useState } from "react";
import propTypes from "prop-types"
import styles from "./Card.module.css"

Card.propTypes = {
    titleCard: propTypes.string,
    textCard: propTypes.string,
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
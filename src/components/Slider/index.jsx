import { useState } from "react";
import styles from "./Slider.module.css"
import setaDireita from "../../assets/seta-direita.png";
import setaEsquerda from "../../assets/seta-esquerda.png";

export default function Slider({ images }){
        const [currentImageIndex, setCurrentImageIndex] = useState(0);
      
        const goToPrevious = () => {
          setCurrentImageIndex((prevIndex) =>
          // prevIndex = currentImageIndex está sendo usado como referência direta para o estado atual
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
        };
      
        const goToNext = () => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        };
      
        return (
          <div className={styles.carrosel}>
            <button onClick={goToPrevious} className={styles.arrowButton}>
              <img src={setaEsquerda} alt="Previous" className={styles.arrowRight} />
            </button>
            <img src={images[currentImageIndex]}  className={styles.images} alt="carrosel" />
            <button onClick={goToNext} className={styles.arrowButton}>
              <img src={setaDireita} alt="Next" className={styles.arrowRight} />
            </button>
          </div>
          );
}
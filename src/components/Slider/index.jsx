import { useState, useEffect, useRef } from "react";
import styles from "./Slider.module.css";
import setaDireita from "../../assets/seta-direita.png";
import setaEsquerda from "../../assets/seta-esquerda.png";

export default function Slider({ images, captions }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageContainerRef = useRef(null);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (imageContainerRef.current) {
      imageContainerRef.current.style.transform = `translateX(-${currentImageIndex * 100}%)`;
    }
  }, [currentImageIndex]);

  return (
    <div className={styles.carrosel}>
      <button onClick={goToPrevious} className={`${styles.arrowButton} ${styles.arrowLeft}`}>
        <img src={setaEsquerda} alt="Previous" />
      </button>
      <div className={styles.imageContainer} ref={imageContainerRef}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageSlide}>
            <img src={image} className={styles.images} alt={`Slide ${index}`} />
            <div className={styles.overlayText}>
              <p className={styles.title}>{captions[index].title}</p>
              <p className={styles.subtitle}>{captions[index].subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={goToNext} className={`${styles.arrowButton} ${styles.arrowRight}`}>
        <img src={setaDireita} alt="Next" />
      </button>
    </div>
  );
}

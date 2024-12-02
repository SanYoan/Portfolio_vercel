import { useState } from "react";
import styles from "../Cards/cards.module.scss";
import PopupProject from "../PopupProject/PopupProject";

const CardList = ({ datas }) => {
  // État pour contrôler l'ouverture du popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Fonction pour fermer le popup
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const getCurrentImageType = () => {
    const width = window.innerWidth;
    if (width <= 480) return "mobile";
    if (width <= 1024) return "tablet";
    return "desktop";
  };

  const currentImageType = getCurrentImageType();

  const isExternalImage = (url) => {
    return url.startsWith('http');
  };

  return (
    <>
      <button className={styles.container__card} onClick={() => setIsPopupOpen(true)}>
        <h2 className={styles.card__title}>{datas.title}</h2>
        <div className={styles.degrade_img}></div>
        <img className={styles.card__img} src={isExternalImage(datas.cover) ? datas.cover : `${process.env.PUBLIC_URL}${(currentImageType, datas.cover)}`} alt={datas.altCover} />
      </button>

      {/* Si isPopupOpen est true, on affiche le PopupProject */}
      {isPopupOpen && <PopupProject datas={datas} onClose={handleClosePopup} />}
    </>
  );
};

export default CardList;

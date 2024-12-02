import "./PopupProject.css";
import { useEffect, useState } from "react";

const PopupProject = ({ datas, onClose }) => {
    const [fullImage, setFullImage] = useState(null); // État pour l'image pleine page
    const [closeTimeout, setCloseTimeout] = useState(null); // État pour le timeout de fermeture

    // Ferme la modale si on clique en dehors du contenu (sur l'overlay)
    const handleOverlayClick = (e) => {
        if (e.target.id === "overlay") {
            onClose();
        }
    };

    // Fonction pour obtenir le type d'image en fonction de la taille de l'écran
    const getCurrentImageType = () => {
        const width = window.innerWidth;
        if (width <= 480) return "mobile";
        if (width <= 1024) return "tablet";
        return "desktop";
    };

    // Obtient le type d'image actuel
    const currentImageType = getCurrentImageType();

    useEffect(() => {
        const navbar = document.querySelector("nav.navbar.bootsnav.navbar-fixed");
        if (navbar) {
            navbar.style.display = "none"; // Cache la navbar quand la modale s'ouvre
        }

        const handleEscapeKey = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            if (navbar) {
                navbar.style.display = "block"; // Réaffiche la navbar quand la modale se ferme
            }
            window.removeEventListener("keydown", handleEscapeKey);
            if (closeTimeout) {
                clearTimeout(closeTimeout); // Nettoie le timeout si le composant est démonté
            }
        };
    }, [onClose, closeTimeout]);

    const handleImageClick = (imageType, imageSrc) => {
        let finalImageSrc = imageSrc;

        // Si on est sur mobile, on prend l'image du type "tablet"
        if (getCurrentImageType() === "mobile") {
            finalImageSrc = `${process.env.PUBLIC_URL}${datas.images.tablet[imageType]}`;
        }

        setFullImage(finalImageSrc); // Met à jour l'état avec l'image cliquée
    };

    const closeFullImage = () => {
        setFullImage(null); // Réinitialise l'image pleine page
    };

    const handleCloseClick = () => {
        // Nettoie le timeout précédent s'il existe
        if (closeTimeout) {
            clearTimeout(closeTimeout);
        }

        // Définit un nouveau timeout pour fermer la modale
        const timeoutId = setTimeout(() => {
            onClose(); // Appelle la fonction de fermeture après un délai
        }, 200); // Délai de 500 ms
        setCloseTimeout(timeoutId); // Enregistre l'ID du timeout
    };

    return (
        <>
            <div id="overlay" onClick={handleOverlayClick}>
                <div id="popup_message">
                    <button className="close-button" onClick={handleCloseClick}>✖</button>
                    <h3>{datas.title}</h3>
                    <div className="border-title"></div>
                    <div className="content_modal">
                        <div className="section">
                            <div className="img-container" onClick={() => handleImageClick('pictureone', `${process.env.PUBLIC_URL}${datas.images[currentImageType].pictureone}`)}>
                                <img
                                    src={`${process.env.PUBLIC_URL}${datas.images[currentImageType].pictureone}`}
                                    alt={datas.altOne}
                                />
                                <div className="degrade_imgModal"></div>
                            </div>
                            <h4>Compétences apprises :</h4>
                            <div className="border-title"></div>
                            <ul>
                                {datas.skills && datas.skills.length > 0 ? (
                                    datas.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))
                                ) : (
                                    <li>Aucune compétence spécifiée</li>
                                )}
                            </ul>
                        </div>
                        <div className="border-image"></div>
                        <div className="section">
                            <div className="img-container" onClick={() => handleImageClick('picturetwo', `${process.env.PUBLIC_URL}${datas.images[currentImageType].picturetwo}`)}>
                                <div className="degrade_imgModal"></div>
                                <img
                                    src={`${process.env.PUBLIC_URL}${datas.images[currentImageType].picturetwo}`}
                                    alt={datas.altTwo}
                                />
                            </div>
                            <h4>Concept du projet :</h4>
                            <div className="border-title"></div>
                            <p>{datas.description}</p>
                        </div>
                    </div>
                    <div className="border-title"></div>
                    <div className="button">
                        <a
                            href={datas.urlsite ? datas.urlsite : '#'}
                            target={datas.urlsite ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={datas.urlsite ? '' : 'hidden'}
                        >
                            <button className="popup-button" id="yesButton">
                                Visitez le site
                            </button>
                        </a>

                        <a
                            href={datas.github ? datas.github : '#'}
                            target={datas.github ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={datas.github ? '' : 'hidden'}
                        >
                            <button className="popup-button" id="noButton">
                                Code sur GitHub
                            </button>
                        </a>
                    </div>
                </div>
            </div>

            {fullImage && (
                <div id="full-image-overlay" onClick={closeFullImage}>
                    <img src={fullImage} alt={datas.altCover} />
                </div>
            )}
        </>
    );
};

export default PopupProject;

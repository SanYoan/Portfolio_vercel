import { useEffect, useState } from "react";
import "../../components/typingAnimation/typinganimation.css";

const TypingAnimation = () => {
  // Texte à animer
  const textParts = [
    "<",
    " je suis ",
    " Yoan ",
    " Sannier ",
    { type: "br" }, // Ajout d'un saut de ligne avant "Développeur Web"
    " Développeur Web", // Nouveau texte ajouté
    " ...", // Remplacer <span> ...</span> par trois points
    " />",
  ];

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0); // Gérer l'index avec l'état
  const [isErasing, setIsErasing] = useState(false); // État pour savoir si nous effaçons

  useEffect(() => {
    if (index < textParts.length) {
      const type = () => {
        const nextPart = textParts[index];

        // Gérer les parties de texte
        if (typeof nextPart === "string") {
          setDisplayedText((prev) => prev + nextPart);
        } else if (nextPart.type === "br") {
          // Ajoute un saut de ligne sans l'afficher comme texte
          setDisplayedText((prev) => prev + "\n"); // Utiliser \n pour le rendu
        }

        setIndex((prev) => prev + 1); // Incrémenter l'index
      };

      // Vitesse de frappe avec variation
      const timeoutId = setTimeout(type, Math.random() * (150 - 50) + 50); // Vitesse entre 50 et 150 ms

      return () => clearTimeout(timeoutId); // Nettoyer le timeout lors de la désactivation
    } else if (!isErasing) {
      // Si le texte a été entièrement tapé et que nous ne sommes pas en train d'effacer
      const timeoutId = setTimeout(() => {
        setIsErasing(true); // Commence l'effacement
      }, 10000); // Délai avant de commencer à effacer

      return () => clearTimeout(timeoutId); // Nettoyer le timeout lors de la désactivation
    } else {
      // Effacement du texte
      const erase = () => {
        setDisplayedText((prev) => {
          // Supprime le dernier caractère
          return prev.slice(0, -1); // Retourner le texte modifié
        });

        // Vérifier si tout le texte a été effacé
        if (displayedText.length === 1) {
          // Si le texte est réduit à un seul caractère
          setIsErasing(false); // Arrête l'effacement

          // Introduire un délai avant de commencer à réécrire
          setTimeout(() => {
            setIndex(0); // Réinitialiser l'index pour recommencer l'animation
          }, 3000); // Délai avant de recommencer à taper (modifiable)
        }
      };

      // Vitesse d'effacement avec pause
      const timeoutId = setTimeout(erase, 50); // Vitesse d'effacement (50 ms)

      return () => clearTimeout(timeoutId); // Nettoyer le timeout lors de la désactivation
    }
  }, [index, isErasing, displayedText]); // Dépendre des états pertinents

  useEffect(() => {
    const blinkCursor = setInterval(() => {
      // Alterner le style de display du curseur
      const cursor = document.getElementById("cursor");
      cursor.style.display =
        cursor.style.display === "none" ? "inline-block" : "none";
    }, 500); // Clignotement du curseur à 500 ms

    return () => clearInterval(blinkCursor); // Nettoyer l'intervalle à la désactivation
  }, []); // Pas de dépendance, s'exécute une fois

  return (
    <h2
      className="typing-animation"
      style={{ whiteSpace: "pre-wrap", color: "#fff", position: "relative" }}
    >
      {displayedText.split(/(\n)/g).map((part, i) => {
        // Gérer les sauts de ligne pour un rendu fluide
        if (part === "\n") {
          return <br key={i} />; // Rendre le saut de ligne
        }

        // Gérer les parties de texte, en mettant les virgules et les points en violet
        return part.split(/(,|\.)/g).map((subPart, j) => {
          if (subPart === ",") {
            return (
              <span key={j} style={{ color: "#d92cf9" }}>
                ,
              </span>
            ); // Style pour la virgule
          } else if (subPart === ".") {
            return (
              <span key={j} style={{ color: "#d92cf9" }}>
                .
              </span>
            ); // Style pour le point
          }
          return subPart; // Autres parties du texte
        });
      })}
      <span id="cursor" className="cursor" style={{ display: "inline-block" }}>
        |
      </span>{" "}
      {/* Curseur */}
    </h2>
  );
};

export default TypingAnimation;

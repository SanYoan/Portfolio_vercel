import React, { useState, useRef } from "react";
import Projets from "../../components/Projets/Projets";
import ProjetsDatas from "../../datas/projets.json";
import styles from "../../components/Projets/Cards/cards.module.scss";

function Project() {
  const [visibleProjects, setVisibleProjects] = useState(3); // Combien de projets sont visibles
  const projectSectionRef = useRef(null); // Création de la référence

  const projectsToShow = ProjetsDatas.slice(0, visibleProjects); // Affiche les projets selon le nombre visible

  const toggleShowMore = () => {
    if (visibleProjects + 3 >= ProjetsDatas.length) {
      setVisibleProjects(ProjetsDatas.length); // Afficher tous les projets si on dépasse la limite
    } else {
      setVisibleProjects(visibleProjects + 3); // Ajouter 3 projets supplémentaires
    }
  };

  const toggleShowLess = () => {
    setVisibleProjects(3); // Réinitialiser à 3 projets affichés
    if (projectSectionRef.current) {
      projectSectionRef.current.scrollIntoView({ behavior: "smooth" }); // Remonter en haut des projets
    }
  };

  // Calcul du nombre de projets restants
  const remainingProjects = ProjetsDatas.length - visibleProjects;

  return (
    <>
      <div id="projet" className="section-heading text-center" ref={projectSectionRef}>
        <h2 className="title-Projects">Projets 💼</h2>
      </div>
      <section className={styles.container}>
        {projectsToShow.map((data) => (
          <Projets datas={data} key={data.id} type="Cards" />
        ))}
      </section>

      <div className="text-center">
        {/* Affichage conditionnel du nombre de projets restants */}
        {remainingProjects > 0 && (
          <p className="remainingProjects">
            {remainingProjects} projets restants
          </p>
        )}

        {/* Message en rouge lorsque tous les projets sont affichés */}
        {remainingProjects === 0 && (
          <p className="noMoreProjects">
            Il n'y a plus de projets à afficher,<br></br> pas d'inquiétude, d'autres projets seront ajoutés plus tard ! 😉
          </p>
        )}

        {/* Bouton pour voir plus ou voir moins */}
        {remainingProjects > 0 ? (
          <button title="voirPlus" onClick={toggleShowMore} className="showMoreBtn">
            <i className="arrowProjetsUp fa fa-angle-down" ></i>
          </button>
        ) : (
          <button title="voirMoins" onClick={toggleShowLess} className="showMoreBtn">
            <i className="arrowProjetsDown fa fa-angle-up" ></i>
          </button>
        )}
      </div >
    </>
  );
}

export default Project;

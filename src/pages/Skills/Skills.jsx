import { useEffect } from "react";
import Slide from "../../components/Slide/Slide";

function Skills() {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    const section = document.getElementById("skills");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Lancer l'animation de chaque barre de progression
            progressBars.forEach((bar) => {
              const maxValue = bar.getAttribute("aria-valuenow");
              bar.style.width = "0%"; // initialiser à 0%

              setTimeout(() => {
                bar.style.width = maxValue + "%"; // animer jusqu'à la valeur de la barre
              }, 100); // délai léger avant l'animation
            });

            // Arrêter l'observation une fois que l'animation est lancée
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 } // le callback est déclenché quand 50% de la section est visible
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section); // nettoyer l'observation si le composant est démonté
      }
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skill-content">
        <div className="section-heading text-center">
          <h2>Compétences 🌟</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">
                    Adobe Photoshop
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/photoshop.png`}
                      alt="photoshop"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="74"
                        aria-valuemin="10"
                        aria-valuemax="100"
                        aria-label="Photoshop"
                      ></div>
                    </div>
                    <h3>74%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">
                    PowerPoint
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/powerpoint.png`}
                      alt="Powerpoint"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="86"
                        aria-valuemin="10"
                        aria-valuemax="100"
                        aria-label="PowerPoint"
                      ></div>
                    </div>
                    <h3>86%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">
                    Node.Js + Express
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/node.png`}
                      alt="Node.Js"
                    />
                    <img
                      className="skillImgE"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/express.png`}
                      alt="express"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="57"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="Node.Js"
                      ></div>
                    </div>
                    <h3>57%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">
                    API Rest
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/API.png`}
                      alt="API"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="54"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="API Rest"
                      ></div>
                    </div>
                    <h3>54%</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="single-skill-content">
                <div className="barWrapper">
                  <span className="progressText">
                    HTML 5
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/html.png`}
                      alt="html"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="HTML"
                      ></div>
                    </div>
                    <h3>90%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">
                    CSS 3
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/css.png`}
                      alt="CSS"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="CSS"
                      ></div>
                    </div>
                    <h3>85%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">
                    JavaScript
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/js.png`}
                      alt="JavaScript"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="65"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="JavaScript"
                      ></div>
                    </div>
                    <h3>65%</h3>
                  </div>
                </div>
                <div className="barWrapper">
                  <span className="progressText">
                    React.js
                    <img
                      className="skillImg"
                      src={`${process.env.PUBLIC_URL}/assets/logo_skill/react.png`}
                      alt="react"
                    />
                  </span>
                  <div className="single-progress-txt">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        aria-label="React.JS"
                      ></div>
                    </div>
                    <h3>70%</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide />
    </section>
  );
}

export default Skills;

import Slide from "../../components/Slide/Slide";
import H2title from "../../components/typingAnimation/TypingAnimation";
import cvFilePath from "../../../src/assets/download/CV_yoan_SANNIER.pdf";
import lmFilePath from "../../../src/assets/download/Lettre_motivation_SANNIER_Yoan.pdf";
import AnimatedBackground from "../../components/AnimatedBackground/AnimatedBackground.jsx";

function Welcome() {
  return (
    <section
      id="welcome-hero"
      className="welcome-hero"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <AnimatedBackground />
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="header-text">
              <p>
                Bonjour<span>,</span>
              </p>
              <H2title />
              <p></p>
              <div className="download">
                <a className="downloadCv" href={cvFilePath} download>
                  Téléchargez CV
                </a>
                <a className="downloadCv downloadLm" href={lmFilePath} download>
                  Téléchargez Lettre de Motivation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slide />
    </section>
  );
}

export default Welcome;

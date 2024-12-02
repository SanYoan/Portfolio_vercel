import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll"; // Importer Link depuis react-scroll




const Header = () => {


  const [isExpanded, setIsExpanded] = useState(true); // État initial à true

  const handleMenuClick = () => {
    // Sélectionner l'élément avec la classe .navbar-toggle
    const navButton = document.querySelector(".navbar-toggle", ".navbar-collapse");
    const navMenu = document.querySelector(".navbar-collapse");
    const icoMenu = document.querySelector(".fa, .fa-times");
    icoMenu.className = "fa fa-bars"
    navButton.setAttribute('aria-expanded', `${isExpanded}`); // Mettre aria-expanded à false
    navButton.className = "navbar-toggle collapsed"
    navMenu.setAttribute('aria-expanded', `${isExpanded}`); // Mettre aria-expanded à false
    navMenu.className = "navbar-collapse menu-ui-design collapse"
    setIsExpanded(false); // Mettre à jour l'état isExpanded
  };

  return (
    <header className="top-area">
      <div className="header-area">
        <nav className="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div className="container">
            <div className="navbar-header">
              <button
                type="button"
                aria-label="button-menu"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="/Portfolio">
                <img src={logo} className="logo_img" alt="logo" />
              </a>
            </div>

            <div
              className="collapse navbar-collapse menu-ui-design"
              id="navbar-menu"
            >
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li className=" smooth-menu active"></li>
                <li className="smooth-menu">
                  <Link
                    to="welcome-hero"
                    href="#welcome-hero"
                    onClick={handleMenuClick}
                    smooth={true} // Activer le défilement fluide
                    duration={1000}
                  >
                    Accueil
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="about"
                    href="#about"
                    onClick={handleMenuClick}
                    smooth={true} // Activer le défilement fluide
                    duration={1000}
                  >
                    Presentation
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="education"
                    href="#education"
                    onClick={handleMenuClick}
                    smooth={true} // Activer le défilement fluide
                    duration={1000}
                  >
                    Études
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    to="skills"
                    href="#skills"
                    onClick={handleMenuClick}
                    smooth={true} // Activer le défilement fluide
                    duration={1000}
                  >
                    Compétences
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    smooth={true} // Activer le défilement fluide
                    duration={1000}
                    to="projet"
                    href="#projet"
                    onClick={handleMenuClick}
                  >
                    Projets
                  </Link>
                </li>
                <li className="smooth-menu">
                  <Link
                    smooth={true} // Activer le défilement fluide
                    duration={1000}
                    to="contact"
                    href="#contact"
                    onClick={handleMenuClick}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="clearfix"></div>
    </header>
  );
};

export default Header;


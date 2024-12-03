import logo from "../../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-copyright" className="footer-copyright">
      <blockquote>
        <p>
          <a
            className="citation"
            href="http://evene.lefigaro.fr/citation/apprendre-deposer-banque-esprit-18790.php"
          >
            “Apprendre, c'est déposer de l'or dans la banque de son esprit.”
          </a>
        </p>
        <cite>De Shad Helmstetter / Le Pouvoir de motivation intérieure</cite>
      </blockquote>
      <div className="container">
        <div className="hm-footer-copyright text-center">
          <a href="/" className="navbar-brand">
            <img src={logo} className="logo_imgFooter" alt="logo" />
          </a>
          <p className="textFooter">
            &copy; {currentYear} Yoan Sannier, Tous droits réservés.
          </p>
        </div>
      </div>

      <div id="scroll-Top">
        <div className="return-to-top" onClick={scrollToTop}>
          <i className="fa fa-angle-up" id="scroll-top"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

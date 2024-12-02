import { useEffect } from "react";
import styles from "../Error/error.module.scss";

const Error = () => {
  useEffect(() => {
    // Cacher le navbar
    const navbar = document.querySelector("nav.navbar.bootsnav.no-background");
    if (navbar) {
      navbar.style.display = "none";
    }

    return () => {
      if (navbar) {
        navbar.style.display = "block";
      }
    };
  }, []);

  return (
    <section className={styles.content_error}>
      <h1 className={styles.title_error}>404</h1>
      <p className={styles.text_error}>
        Oups! La page que{" "}
        <span className={styles.break_text}>vous demandez n'existe pas.</span>
      </p>
      <a
        href="/Portfolio"

        className={styles.link_error}
        onClick={() => window.scrollTo(0, 0)}
      >
        Retourner sur la page d'accueil
      </a>

    </section>
  );
};

export default Error;

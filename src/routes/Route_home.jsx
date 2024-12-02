import Study from "../pages/Study/Study";
import Skills from "../pages/Skills/Skills";
import Project from "../pages/Project/Project";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Welcome from "../pages/Welcome/Welcome";

function Route() {
  return (
    <main>
      <Welcome />
      <About />
      <Study />
      <Skills />
      <Project />
      <Contact />
    </main>
  );
}

export default Route;

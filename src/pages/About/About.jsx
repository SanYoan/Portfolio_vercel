import photo from "../../assets/images/about/profile.webp";

function About() {

    return (<section id="about" className="about">
        <div className="section-heading text-center">
            <h2 id="aboutTitle">A propos de moi 👱</h2>
        </div>
        <div className="container">
            <div className="about-content">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="single-about-txt">
                            <h3>
                                Mon apprentissage en tant que développeur web a commencé en
                                août 2023. Avant cela, j'étais manager dans le domaine de la
                                boucherie-charcuterie. Bien que j'aie apprécié certains
                                aspects de ce travail, je ne me sentais pas épanoui.  La
                                routine s'installait et je sentais que mes compétences ne
                                progressaient plus. Un mois avant de débuter mon
                                apprentissage autodidacte des langages informatiques, j'ai
                                traversé des épreuves de santé assez graves. Ces moments
                                difficiles m'ont poussé à réfléchir profondément à ma vie et
                                à ma satisfaction personnelle. Suis-je heureux ? Cette
                                question résonnait en moi. C'est à ce moment-là que j'ai
                                décidé de transformer ma passion pour l'informatique en un
                                véritable métier.
                            </h3>
                            <p className="h3P">
                                J'ai commencé à apprendre de manière autonome, en
                                m'immergeant dans différents langages de programmation et en
                                explorant le développement web. Finalement, j'ai réussi à
                                entreprendre mon aventure en tant que développeur web en
                                avril 2024. Chaque jour est une nouvelle opportunité
                                d'apprendre et de grandir. Je suis déterminé à poursuivre
                                cette voie et à faire de ma passion un avenir prometteur.
                            </p>
                            <div className="row">
                                <div className="col-about-4">
                                    <div className="single-about-add-info">
                                        <h3>téléphone</h3>
                                        <p id="aboutDetail">07.70.34.97.18</p>
                                    </div>
                                </div>
                                <div className="col-about-4">
                                    <div className="single-about-add-info">
                                        <h3>email</h3>
                                        <p id="aboutDetail">yoan.sannier@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-about-4">
                                    <div className="single-about-add-info">
                                        <h3>GitHub</h3>
                                        <a aria-label="GitHub" id="aboutDetail" href="https://github.com/SanYoan">
                                            https://github.com/SanYoan
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-offset-1 col-sm-5">
                        <div className="single-about-img">
                            <img src={photo} alt="profile_image" />

                            <div className="about-list-icon">
                                <ul>
                                    <li>
                                        <a aria-label="GitHub" href="https://github.com/SanYoan">
                                            <i className="fa fa-github" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a aria-label="LinkedIn" href="https://www.linkedin.com/in/yoan-sannier-4367211b9/">
                                            <i className="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a aria-label="Instagram" href="https://www.instagram.com/yoan76560/?igsh=eGRpejFzM3h4YjNv">
                                            <i className="fa fa-instagram" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default About;
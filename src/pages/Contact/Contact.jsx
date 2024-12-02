import ContactForm from "../../components/ContactForm/ContactForm";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div id="contactText" className="section-heading text-center">
        <h2>Contactez-moi 📧</h2>
      </div>
      <div className="container">
        <div className="contact-content">
          <div className="row">
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <ContactForm />
            </div>
            <div className="col-md-offset-1 col-md-5 col-sm-6">
              <div className="single-contact-box">
                <div className="contact-adress">
                  <div className="contact-add-head">
                    <h3>Yoan Sannier</h3>
                    <p>Développeur Web</p>
                  </div>
                  <div className="contact-add-info">
                    <div className="single-contact-add-info">
                      <h3>Téléphone</h3>
                      <a
                        aria-label="Number_Phone"
                        className="linkContact"
                        href="tel:+33770349718"
                      >
                        07.70.34.97.18
                      </a>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>Email</h3>
                      <a
                        aria-label="Email"
                        className="linkContact"
                        href="mailto:yoan.sannier@gmail.com"
                      >
                        yoan.sannier@gmail.com
                      </a>
                    </div>
                    <div className="single-contact-add-info">
                      <h3>LinkedIn</h3>
                      <a
                        aria-label="LinkedIn"
                        className="linkContact"
                        href="https://www.linkedin.com/in/yoan-sannier-4367211b9/"
                      >
                        https://www.linkedin.com/in/yoan-sannier-4367211b9/
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hm-foot-icon">
                  <ul>
                    <li>
                      <a aria-label="Github" href="https://github.com/SanYoan">
                        <i className="fa fa-github" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="linkedIn"
                        href="https://www.linkedin.com/in/yoan-sannier-4367211b9/"
                      >
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        aria-label="Instagram"
                        href="https://www.instagram.com/yoan76560/?igsh=eGRpejFzM3h4YjNv"
                      >
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
    </section>
  );
}

export default Contact;

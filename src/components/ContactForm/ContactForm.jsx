import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(""); // État pour le message de succès

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Début de l'envoi
    setSuccessMessage(""); // Réinitialiser le message de succès avant l'envoi

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          to_name: "Yoan Sannier",
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_ID
      )
      .then((response) => {
        console.log("Message envoyé avec succès:", response);
        setLoading(false); // Fin de l'envoi
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setSuccessMessage("Votre message a été envoyé avec succès !"); // Mettre à jour le message de succès
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi du message:", error);
        setLoading(false); // Fin de l'envoi
        setSuccessMessage("Une erreur s'est produite lors de l'envoi."); // Mettre à jour le message d'erreur
      });
  };

  return (
    <div className="single-contact-box">
      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Nom*"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email*"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Sujet"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="form-group">
                <textarea
                  className="form-control"
                  rows="8"
                  id="comment"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="single-contact-btn">
                <button type="submit" className="contact-btn">
                  {loading ? "Envoi..." : "Envoyez"}
                </button>
              </div>
            </div>
          </div>
          {/* Message de succès */}
          {successMessage && (
            <div className="success-message">
              <p className="message-send">{successMessage}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;

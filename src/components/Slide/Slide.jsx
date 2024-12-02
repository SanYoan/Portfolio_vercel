import images from "../../../src/assets/logo_slide";
import "../../components/Slide/slide.css";

const Slide = () => {
  return (
    <div className="logo-slider">
      <div className="logo-track">
        {Object.keys(images).map((key, index) => (
          <img
            key={index}
            src={images[key]}
            alt={`${key.split(".")[0]} Logo`}
          />
        ))}
        {Object.keys(images).map((key, index) => (
          <img
            key={index}
            src={images[key]}
            alt={`${key.split(".")[0]} Logo`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slide;

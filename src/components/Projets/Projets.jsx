import PropTypes from "prop-types";
import CardList from "./Cards/CardList";


const Projets = ({ type, datas }) => {
  if (type === "Cards") {
    return (
      <div className="blockCards">
        <CardList datas={datas} />
      </div>
    );
  }
};

Projets.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Projets;

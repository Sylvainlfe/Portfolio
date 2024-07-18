import PropTypes from 'prop-types';
import photoCv from "../assets/images/cv.png";

function ModalCv({ handleIsVisible, toggle }) {
  if (!toggle) return null; // Évitez d'utiliser un Fragment inutilement

  return (
    <article className="absolute top-1 left-1/2 transform -translate-x-1/2 w-11/12 max-w-xl p-5 bg-secondary-bg-color rounded-lg shadow-lg flex flex-col items-center">
      <button
        onClick={handleIsVisible}
        type="button" // Ajout du type explicite
        className="self-end text-lg p-2 bg-green-dark-color text-black rounded shadow-buttonShad w-8 h-8"
      >
        X
      </button>
      <h1 className="text-center text-2xl mb-4">
        Le bon vieux CV des familles
      </h1>
      <img 
        src={photoCv} 
        alt="CV de [votre nom ou description]" // Utilisez une description plus précise
        className="rounded-md shadow-buttonShad"
      />
    </article>
  );
}

// Ajoutez la validation des props
ModalCv.propTypes = {
  handleIsVisible: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

export default ModalCv;

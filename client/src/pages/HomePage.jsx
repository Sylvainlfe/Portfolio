import { Link, useLoaderData, useNavigate, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import ventilo1 from "../assets/images/ventilo1.svg";
import ventilo2 from "../assets/images/ventilo2.svg";
import ventilo3 from "../assets/images/ventilo3.svg";
import on from "../assets/images/on.svg";
import flocon from "../assets/images/flocon.svg";
import sun from "../assets/images/sun.svg";
import arrowL from "../assets/images/arrowL.svg";
import arrowR from "../assets/images/arrowR.svg";
import arrowT from "../assets/images/arrowT.svg";
import arrowB from "../assets/images/arrowB.svg";
import allumage from "../assets/images/allumage.svg";

function HomePage() {
  const [light, setLight] = useState(true);
  const [temperature, setTemperature] = useState(25);
  const [mode, setMode] = useState("sun");
  const [ventilators, setVentilators] = useState(1);
  const [arrowPosition, setArrowPosition] = useState(1);

  const {setProject} = useOutletContext();
  const projects = useLoaderData()
  const navigate = useNavigate(); 

  useEffect(() => {
   setProject(projects);
  }, [projects]);
  

  const handleLightClick = () => {
    setLight((prevLight) => !prevLight);
  };

  const handleIncreaseTemperature = () => {
    setTemperature((prevTemperature) =>
      prevTemperature < 30 ? prevTemperature + 1 : 30
    );
  };

  const handleDecreaseTemperature = () => {
    setTemperature((prevTemperature) =>
      prevTemperature > 12 ? prevTemperature - 1 : 12
    );
  };

  const handleShowSun = () => {
    setMode("sun");
  };

  const handleShowFlocon = () => {
    setMode("flocon");
  };

  const handleIncreaseVentilators = () => {
    setVentilators((prevVentilators) =>
      prevVentilators < 3 ? prevVentilators + 1 : 3
    );
  };

  const handleDecreaseVentilators = () => {
    setVentilators((prevVentilators) =>
      prevVentilators > 1 ? prevVentilators - 1 : 1
    );
  };

  const handleMoveTop = () => {
    setArrowPosition((prevPosition) =>
      prevPosition > 1 ? prevPosition - 1 : 3
    );
  };

  const handleMoveBottom = () => {
    setArrowPosition((prevPosition) =>
      prevPosition < 3 ? prevPosition + 1 : 1
    );
  };

  const handleValidation = () => {
    if (arrowPosition === 1) {
      navigate("/project/1"); // Utilisation de navigate pour naviguer vers /project/1
    } else if (arrowPosition === 2) {
      navigate("/project/2"); // Utilisation de navigate pour naviguer vers /project/2
    } else if (arrowPosition === 3) {
      navigate("/project/3"); // Utilisation de navigate pour naviguer vers /project/3
    }
  };

  return (
    <main className="bg-green-light-color p-6 mx-2 mt-2 mb-10 rounded-md shadow-buttonShad">
      <article className="bg-green-dark-color pb-1 rounded-md border border-black">
        <ul className="grid grid-cols-5 grid-rows-3 gap-0 pt-5">
          <h1 className="font-semibold place-self-center col-start-1 col-end-3 row-start-2 row-end-4">
            PORTFOLIO
          </h1>
          <img
            src={allumage}
            alt="voyant allumage"
            className={`w-3 col-start-4 col-end-4 row-start-2 row-end-4 place-self-center ${
              light ? "bg-red-500 rounded-full" : "bg-green-500 rounded-full"
            }`}
          />
          <img
            src={on}
            alt="icone on/off"
            className="w-5 col-start-5 col-end-5 row-start-1 row-end-1 place-self-center"
          />
          <button
            onClick={handleLightClick}
            type="button"
            aria-label="allumer/eteindre"
            className="bg-green-middle-color w-20 h-6 rounded-lg shadow-buttonShad col-start-5 col-end-5 row-start-2 row-end-4 place-self-center text-xs"
          >
            on/off
          </button>
        </ul>
        <ul className="grid grid-cols-[1fr_2fr_repeat(7,1fr)] grid-rows-3 gap-0 bg-terciary-bg-color m-5 rounded-md p-2 h-60">
          <img
            src={arrowR}
            alt="flèche directionnelle"
            className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center w-4"
          />
          <img
            src={arrowR}
            alt="flèche directionnelle"
            className="col-start-1 col-end-2 row-start-2 row-end-3 place-self-center w-4"
          />
          <img
            src={arrowR}
            alt="flèche directionnelle"
            className="col-start-1 col-end-2 row-start-3 row-end-4 place-self-center w-4"
          />
          <Link
            to="/project/1"
            className="col-start-2 col-end-3 row-start-1 row-end-2 place-self-center font-font-telecommande text-xs"
          >
            Projet 1
          </Link>
          <Link
            to="/project/2"
            className="col-start-2 col-end-3 row-start-2 row-end-3 place-self-center font-font-telecommande text-xs"
          >
            Projet 2
          </Link>
          <Link
            to="/project/3"
            className="col-start-2 col-end-3 row-start-3 row-end-4 place-self-center font-font-telecommande text-xs"
          >
            Projet 3
          </Link>

          {arrowPosition === 1 && (
            <img
              src={arrowL}
              alt="flèche de sélection"
              className="col-start-3 col-end-4 row-start-1 row-end-2 place-self-center w-6"
            />
          )}
          {arrowPosition === 2 && (
            <img
              src={arrowL}
              alt="flèche de sélection"
              className="col-start-3 col-end-4 row-start-2 row-end-3 place-self-center w-6"
            />
          )}
          {arrowPosition === 3 && (
            <img
              src={arrowL}
              alt="flèche de sélection"
              className="col-start-3 col-end-4 row-start-3 row-end-4 place-self-center w-6"
            />
          )}
          {ventilators >= 1 && (
            <img
              src={ventilo1}
              alt="ventilateur"
              className="col-start-9 col-end-10 row-start-1 row-end-2 place-self-center w-8"
            />
          )}
          {ventilators >= 2 && (
            <img
              src={ventilo2}
              alt="ventilateur"
              className="col-start-8 col-end-9 row-start-1 row-end-2 place-self-center w-9"
            />
          )}
          {ventilators === 3 && (
            <img
              src={ventilo3}
              alt="ventilateur"
              className="col-start-7 col-end-8 row-start-1 row-end-2 place-self-center w-10"
            />
          )}
          {mode === "sun" && (
            <img
              src={sun}
              alt="soleil"
              className="col-start-6 col-end-7 row-start-1 row-end-2 place-self-center w-9"
            />
          )}
          {mode === "flocon" && (
            <img
              src={flocon}
              alt="flocon"
              className="col-start-6 col-end-7 row-start-1 row-end-2 place-self-center w-9"
            />
          )}
          {!light && (
            <li className="col-start-7 col-end-10 row-start-2 row-end-4 place-self-center text-3xl">
              {temperature}°C
            </li>
          )}
        </ul>
      </article>
      <article className="bg-green-dark-color mt-4 rounded-md grid grid-cols-4 gap-0 p-2 h-60">
        <button
          type="button"
          onClick={handleValidation}
          className="bg-primary-bg-color rounded-full p-5 text-sm mr-5 col-start-1 col-end-1 w-16 h-16 place-self-center shadow-buttonShad"
        >
          Valider
        </button>
        <ul className="grid grid-cols-8 grid-rows-3 gap-0 bg-primary-bg-color rounded-md p-5 col-start-2 col-end-5 place-self-center">
          <img
            src={arrowT}
            alt="direction"
            className="col-start-1 col-end-2 row-start-1 row-end-2 place-self-center w-3"
          />
          <img
            src={arrowB}
            alt="direction"
            className="col-start-1 col-end-2 row-start-3 row-end-4 place-self-center w-3"
          />
          <li className="col-start-1 col-end-3 row-start-2 row-end-2 place-self-center">
            Navigation
          </li>
          <button
            onClick={handleMoveTop}
            type="button"
            aria-label="validation"
            className="col-start-2 col-end-2 row-start-1 row-end-1 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            1
          </button>
          <button
            onClick={handleMoveBottom}
            type="button"
            aria-label="validation"
            className="col-start-2 col-end-2 row-start-3 row-end-3 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            2
          </button>
          <img
            src={sun}
            alt=""
            className="col-start-3 col-end-4 row-start-1 row-end-1 place-self-center w-5"
          />
          <img
            src={flocon}
            alt=""
            className="col-start-3 col-end-3 row-start-3 row-end-3 place-self-center w-5"
          />
          <li className="col-start-3 col-end-5 row-start-2 row-end-2 place-self-center">
            Mode
          </li>
          <button
            onClick={handleShowSun}
            type="button"
            aria-label="validation"
            className="col-start-4 col-end-4 row-start-1 row-end-1 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            3
          </button>
          <button
            onClick={handleShowFlocon}
            type="button"
            aria-label="validation"
            className="col-start-4 col-end-4 row-start-3 row-end-3 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            4
          </button>
          <img
            src={arrowT}
            alt=""
            className="col-start-5 col-end-5 row-start-1 row-end-1 place-self-center w-3"
          />
          <img
            src={arrowB}
            alt=""
            className="col-start-5 col-end-5 row-start-3 row-end-3 place-self-center w-3"
          />
          <li className="col-start-5 col-end-7 row-start-2 row-end-3 place-self-center">
            Température
          </li>
          <button
            onClick={handleIncreaseTemperature}
            type="button"
            aria-label="validation"
            className="col-start-6 col-end-6 row-start-1 row-end-1 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            5
          </button>
          <button
            onClick={handleDecreaseTemperature}
            type="button"
            aria-label="validation"
            className="col-start-6 col-end-6 row-start-3 row-end-3 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            6
          </button>
          <img
            src={ventilo1}
            alt=""
            className="col-start-7 col-end-7 row-start-1 row-end-1 place-self-center w-6"
          />
          <img
            src={ventilo2}
            alt=""
            className="col-start-7 col-end-7 row-start-3 row-end-3 place-self-center w-5"
          />
          <li className="col-start-7 col-end-9 row-start-2 row-end-3 place-self-center">
            Ventilation
          </li>
          <button
            onClick={handleIncreaseVentilators}
            type="button"
            aria-label="validation"
            className="col-start-8 col-end-8 row-start-1 row-end-1 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            7
          </button>
          <button
            onClick={handleDecreaseVentilators}
            type="button"
            aria-label="validation"
            className="col-start-8 col-end-8 row-start-3 row-end-3 place-self-center w-14 h2 bg-green-middle-color rounded-md shadow-buttonShad"
          >
            8
          </button>
        </ul>
      </article>

      <p className="bg-secondary-bg-color border border-black shadow-buttonShad p-2 m-5">
        ⚠ Attention - Respectez bien les consignes de sécurité.Ne pas mettre à
        la portée des enfants, des animaux, ni des végétaux.Cette télécommande
        n’est pas un jouet. Respectez bien les températures de consigne.
        Toutefois, veuillez noter que si vous montez la température à 30°C, vous
        risquez de tomber sur un profil chaud comme la braise, avide d'apprendre
        de nouvelles choses et cherchant toujours à évoluer...Laissez-vous
        tenter ! ⚠
      </p>
    </main>
  );
}

export default HomePage;

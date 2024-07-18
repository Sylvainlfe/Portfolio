import { Link } from "react-router-dom";

function Footer( ) {
 

  return (
    <footer className="bg-primary-bg-color">
      <Link to="/" className="font-font-logo font-semibold italic text-5xl">
        PORTFOLIO
      </Link>
      <ul className="flex flex-wrap gap-x-6 gap-y-6 lg:grow lg:justify-evenly lg:leading-10 ">
        <li className="grow lg:grow-0">
          <h3 className="font-semibold text-2xl">PROJETS</h3>
          <ul>
            <li>
              <Link to="/project/1" className="footer-list">
                Projet 1
              </Link>
            </li>
            <li>
              <Link to="/project/2" className="footer-list">
                Projet 2
              </Link>
            </li>
            <li>
              <Link to="/project/3" className="footer-list">
                Projet 3
              </Link>
            </li>
          </ul>
        </li>
        <li className="grow lg:grow-0 ">
          <h3 className="font-semibold text-2xl">INFORMATIONS PRATIQUES</h3>
          <ul>
            <li>
              <p>Curriculum Vitae</p>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

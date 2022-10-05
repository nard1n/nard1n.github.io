import "./navbar.scss";
import { Mail } from "@material-ui/icons";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Navbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navbar"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            NR◖N.
          </a>
          {/* <div className="itemContainer">
                        <Person className="icon" />
                        <span>123-456-7890</span>
                    </div> */}
          <div className="itemContainer">
            <Mail className="icon" />
            <span>nardin.lachowski@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/nardinl/">
              <LinkedInIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/nard1n/">
              <GitHubIcon className="icon" />
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

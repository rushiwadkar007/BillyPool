import { useState } from "react";

import classes from "./Navigation.module.css";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header data-aos="fade-down">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="index.html">
                <img src={logo} alt="Blak Raven" />
              </a>
              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                // data-toggle="collapse"
                // data-target="#navb"
                data-bs-toggle="collapse"
                data-bs-target="#navb"
                // aria-expanded="false"
                // aria-controls="#navb"
                onClick={() => setIsExpanded((prev) => !prev)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`collapse navbar-collapse ${classes.desktopNav}`}
                id="navb"
              >
                <ul className={`navbar-nav ml-auto ${classes.mlAuto}`}>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      How to Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Tokenomics
                    </a>
                  </li>
                </ul>
                <div className="">
                  <a href="#" className="btn">
                    {" "}
                    Buy Herrington
                  </a>
                </div>
              </div>

              <div
                // className={`collapse navbar-collapse ${classes.mobileNav} ${
                className={`${classes.mobileNav} ${
                  isExpanded ? classes.active : ""
                }`}
                // id="navb"
              >
                <ul className={`navbar-nav ml-auto`}>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      How to Buy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Tokenomics
                    </a>
                  </li>
                </ul>
                <div className="">
                  <a href="#" className="btn">
                    {" "}
                    Buy Herrington
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

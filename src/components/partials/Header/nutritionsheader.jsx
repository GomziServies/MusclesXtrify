import React from "react";
import { Link } from "react-router-dom";

function NutritionHeader() {
  function openside() {
    document.getElementById("demo").style.width = "100%";
  }

  function sideclose() {
    document.getElementById("demo").style.width = "0px";
  }

  return (
    <>
      <div className="container-fluid main p-0 m-0">
        <div className="d-lg-block d-none log-new">
          <Link to="/">
            <div>
              <img
                src={process.env.PUBLIC_URL + "../assets/images/logo_01.png"}
                width="100%"
                alt="MuscleXTrify"
              />
            </div>
          </Link>
        </div>
        <div className="d-lg-none d-sm-block t0 log1-new">
          <Link to="/">
            <div>
              <img
                src={process.env.PUBLIC_URL + "../assets/images/logo_01.png"}
                width="100%"
                alt="MuscleXTrify"
              />
            </div>
          </Link>
        </div>
        <div className="lang">
          <ul>
            <li>
              <Link to="/">
                <p className="m-0">Home</p>
              </Link>
            </li>
            <li>
              <Link to="/supplements">
                <p className="m-0">Products</p>
              </Link>
            </li>
            <li>
              <Link to="/about-us">
                <p className="m-0">About Us</p>
              </Link>
            </li>
            <li>
              <Link to="/contact-us">
                <p className="m-0">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link
            to="/nutrition"
            style={{ marginTop: "50px", marginBottom: "30px" }}
          >
            <img
              className="lazy"
              src={process.env.PUBLIC_URL + "../assets/images/logo_01.png"}
              width="40%"
              alt="MuscleXTrify"
            />
          </Link>
          <ul className="mobileUserInfo aa">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <span
          className="d-lg-none d-sm-block btnn"
          style={{ cursor: "pointer", fontSize: 20, color: "black" }}
          onClick={openside}
        >
          ☰
        </span>
        <div className="login d-lg-block d-none">
          <ul></ul>
        </div>
      </div>
    </>
  );
}

export default NutritionHeader;

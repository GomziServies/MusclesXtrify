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
        <div className="d-lg-block d-none log">
          <Link to="/">
            <div>
              <img
                src={process.env.PUBLIC_URL + "../assets/images/logo_01.png"}
                width="100%"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
        <div className="d-lg-none d-sm-block t0 log1">
          <Link to="/">
            <div>
              <img
                src={process.env.PUBLIC_URL + "../assets/images/logo_01.png"}
                width="100%"
                alt="Fg Group"
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
              <Link to="/fgiit/fitness-and-nutrition-courses">
                <p className="m-0">Product</p>
              </Link>
            </li>
            <li>
              <Link to="/fgiit/online-fitness-courses">
                <p className="m-0">About Us</p>
              </Link>
            </li>
            <li>
              <Link to="/fgiit/flexible-fitness-courses">
                <p className="m-0">Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="side" id="demo">
          <span className="closebtn" onClick={sideclose}>
            ×
          </span>
          <Link to="/" style={{ marginTop: 50 }}>
            <img
              className="lazy"
              src={
                process.env.PUBLIC_URL + "../assets/images/logo/fg_group.webp"
              }
              width="17%"
              alt="Fg Group"
            />
          </Link>
          <Link to="/">Home</Link>
          <Link to="/fgiit/fitness-and-nutrition-courses">Product</Link>
          <Link to="/fgiit/online-fitness-courses">About Us</Link>
          <Link to="/fgiit/flexible-fitness-courses">Contact Us</Link>
        </div>
        <span
          className="d-lg-none d-sm-block btnn"
          style={{ cursor: "pointer", fontSize: 20, color: "black" }}
          onClick={openside}
        >
          ☰
        </span>
        <div className="d-lg-none d-sm-block mt-4">
          <Link to="/user/order">
            <div className="cart-btnn">
              <img
                src={
                  process.env.PUBLIC_URL + "../assets/images/img/cart-img.webp"
                }
                width="21px"
                alt="Fg Group"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NutritionHeader;

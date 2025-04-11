import React from "react";
import { Link } from "react-router-dom";

function HomeNutritionFooter() {
  return (
    <>
      <footer className="footer-style-two">
        <div className="footer-two-top-wrap">
          <div className="container">
            <div className="footer-two-widgets-wrap">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-4">
                  <div className="footer-widget">
                    <div className="footer-about">
                      <div className="footer-logo logo">
                        <a href="/">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/white_logo_01.png"
                            }
                            alt="Logo"
                          />
                        </a>
                      </div>
                      <div className="footer-text">
                        <p>
                          Elevate your fitness journey with MusclesXtrify's
                          premium supplements for strength, muscle growth, and
                          recovery.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="footer-widget widget_nav_menu">
                    <h4 className="fw-title">links</h4>
                    <ul className="list-wrap">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/supplements">Product</a>
                      </li>
                      <li>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <a href="/contact-us">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4">
                  <div className="footer-widget">
                    <h4 className="fw-title">Social Media</h4>
                    <div className="footer-confidential-wrap">
                      <div className="confidential-logo">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/satisfaction_img.png"
                          }
                          alt="img"
                        />
                      </div>
                      <div className="confidential-content">
                        <h4 className="con-title">100% Confidential</h4>
                        <span>25k Active Customer</span>
                      </div>
                    </div>
                    <div className="footer-social">
                      <a href="https://www.facebook.com/profile.php?id=61573984392891&mibextid=ZbWKwL">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://api.whatsapp.com/send?phone=+919510343247&text=Hello, I want to know more about your service.">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default HomeNutritionFooter;

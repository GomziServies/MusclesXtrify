import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../../components/partials/Header/nutritionsheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/default.css";
import "../../assets/css/jquery-ui.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/odometer.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeNutritionFooter from "../../components/partials/Footer/footer";
import LoadingComponent from "../../components/loadingComponent";

function Supplements() {
  const canonicalUrl = window.location.href;

  return (
    <>
      <Helmet>
        <title>
          About MusclesXtrify - Premium Supplements for Peak Performance
        </title>
        <meta
          name="description"
          content="Learn about MusclesXtrify's mission to provide top-quality supplements for muscle growth, strength, and recovery."
        />
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      <NutritionHeader />
      <button className="scroll-top scroll-to-target" data-target="html">
        <i className="fas fa-angle-up"></i>
      </button>
      <main className="main-area fix">
        <section className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="breadcrumb-content text-center">
                  <h2 className="title">Supplements</h2>
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        <a href="index.html">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="breadcrumb-item trail-item trail-end">
                        <span>Supplements</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="supplement" className="tg-shop-area pt-100 pb-60">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tg-section-title text-center mb-60">
                  <span className="sub-title">PRODUCTS</span>
                  <h2 className="title">Powerful Supplements</h2>
                </div>
              </div>
            </div>
            <div className="tg-shop-wrapper">
              <div className="row justify-content-center">
                <div className="col-lg-4 col-12">
                  <div className="tg-shop-item text-center">
                    <div className="tg-shop-thumb">
                      <a href="whey-protein-powder?flavor=Chocolate&size=1kg">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/tg_shop01.jpg"
                          }
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="tg-shop-content">
                      <h4 className="title">
                        <a href="whey-protein-powder?flavor=Chocolate&size=1kg">
                          Premium whey Protein
                        </a>
                      </h4>
                      <div className="tg-shop-price inner-shop-details-price justify-content-center d-flex">
                        <b>₹ 2,275/-</b>
                        <span class="old-prices">₹3500/-</span>
                        <h5 class="stock-status ml-3 mb-0">35%</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-6 col-md-6">
                  <div className="tg-shop-item text-center">
                    <div className="tg-shop-thumb">
                      <a href="whey-protein-powder?flavor=Mocha Coffee&size=1kg">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/tg_shop02.jpg"
                          }
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="tg-shop-content">
                      <h4 className="title">
                        <a href="whey-protein-powder?flavor=Mocha Coffee&size=1kg">
                          Whey Protein Mocha Coffee-1kg
                        </a>
                      </h4>
                      <div className="tg-shop-price">₹ 2,275/-</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="tg-shop-item text-center">
                    <div className="tg-shop-thumb">
                      <a href="whey-protein-powder?flavor=Chocolate&size=2kg">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/tg_shop03.jpg"
                          }
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="tg-shop-content">
                      <h4 className="title">
                        <a href="whey-protein-powder?flavor=Chocolate&size=2kg">
                          Whey Protein Chocolate-2kg
                        </a>
                      </h4>
                      <div className="tg-shop-price">₹ 4,200/-</div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="tg-shop-item text-center">
                    <div className="tg-shop-thumb">
                      <a href="whey-protein-powder?flavor=Mocha Coffee&size=2kg">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/tg_shop04.jpg"
                          }
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="tg-shop-content">
                      <h4 className="title">
                        <a href="whey-protein-powder?flavor=Mocha Coffee&size=2kg">
                          Whey Protein Mocha Coffee-2kg
                        </a>
                      </h4>
                      <div className="tg-shop-price">₹ 4,200/-</div>
                    </div>
                  </div>
                </div> */}
                <div className="col-lg-4 col-12">
                  <div className="tg-shop-item text-center">
                    <div className="tg-shop-thumb">
                      <a href="creatine-supplements">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/tg_shop05.jpg"
                          }
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="tg-shop-content">
                      <h4 className="title">
                        <a href="creatine-supplements">Creatine Monohydrate</a>
                      </h4>
                      <div className="tg-shop-price inner-shop-details-price justify-content-center d-flex">
                        <b>₹ 900/-</b>
                        <span class="old-prices">₹1800/-</span>
                        <h5 class="stock-status ml-3 mb-0">50%</h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12">
                  <div className="tg-shop-item text-center">
                    <div className="tg-shop-thumb">
                      <a href="pre-workout">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/tg_shop06.jpg"
                          }
                          alt="img"
                        />
                      </a>
                    </div>
                    <div className="tg-shop-content">
                      <h4 className="title">
                        <a href="pre-workout">MusclesXtrify Pre Workout</a>
                      </h4>
                      <div className="tg-shop-price inner-shop-details-price justify-content-center d-flex">
                        <b>₹ 1,125/-</b>
                        <span class="old-prices">₹2500/-</span>
                        <h5 class="stock-status ml-3 mb-0">55%</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <HomeNutritionFooter />
    </>
  );
}

export default Supplements;

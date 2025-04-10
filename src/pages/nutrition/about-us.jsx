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

function AboutUs() {
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
                  <h2 className="title">About Us</h2>
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        <a href="/">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="breadcrumb-item trail-item trail-end">
                        <span>About Us</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog-area pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="blog--post--item">
                  <div className="blog--post--content blog-details-content">
                    <h2 className="blog--post--title">
                      MusclesXtrify - Fueling Strength, Maximizing Potential
                    </h2>
                    <div className="post-text">
                      <p>
                        At MusclesXtrify, we are dedicated to empowering fitness
                        enthusiasts with scientifically formulated supplements
                        designed to optimize performance, enhance recovery, and
                        support muscle growth. Our mission is to provide
                        premium-quality whey protein powder, creatine
                        monohydrate, and other bodybuilding supplements to help
                        you achieve peak fitness. Whether you're a beginner or a
                        pro athlete, our products are crafted to deliver the
                        best results with safety, purity, and transparency.
                      </p>
                      <p>
                        Fitness is more than a trend—it's a way of life.
                        MusclesXtrify is your trusted partner in pushing
                        boundaries, building muscle, and enhancing endurance.
                        Experience the power of micronized creatine, whey
                        isolate protein powder, and other high-performance
                        nutrition solutions designed for maximum effectiveness.
                      </p>
                      <div className="blog-details-wrap">
                        <h3 className="title">Our Mission</h3>
                        <p>
                          We aim to provide high-quality, science-backed
                          nutrition that supports your fitness journey. Our best
                          protein powder and creatine supplements are crafted to
                          fuel strength, improve endurance, and enhance
                          recovery.
                        </p>
                      </div>
                      <div className="blog-details-wrap">
                        <h3 className="title">Our Vision</h3>
                        <p>
                          MusclesXtrify setting the benchmark for purity,
                          innovation, and effectiveness. Our goal is to inspire
                          individuals to push their limits with best whey
                          protein, and other premium supplements designed to
                          enhance performance and well-being.
                        </p>
                      </div>
                      <div className="blog-details-wrap border-none">
                        <h3 className="title">Core Principles</h3>
                        <div className="b-details-list">
                          <ul className="list-wrap">
                            <li>
                              <i className="fas fa-check"></i>Quality First - We
                              use only premium ingredients in our protein
                              products and creatine powders, ensuring safety and
                              superior performance.
                            </li>
                            <li>
                              <i className="fas fa-check"></i>Science-Driven
                              Formulas - Our supplements, including best
                              creatine monohydrate, are designed using
                              cutting-edge research for maximum results.
                            </li>
                            <li>
                              <i className="fas fa-check"></i>Transparency &
                              Trust - We provide clear labeling, full disclosure
                              of all ingredients, ensuring you get the best
                              supplement for your fitness goals.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="blog-details-wrap border-none">
                        <h3 className="title">Why Choose MusclesXtrify?</h3>
                        <div className="b-details-list">
                          <ul className="list-wrap">
                            <li>
                              <i className="fas fa-check"></i>Premium
                              Ingredients for Maximum Results - Our whey protein
                              and creatine monohydrate are sourced from trusted
                              suppliers, ensuring high purity and optimal
                              absorption. Whether it's best protein powder for
                              women, or pre-workout boosters, we deliver nothing
                              but excellence.
                            </li>
                            <li>
                              <i className="fas fa-check"></i>Safety & Purity
                              Assured - All our protein supplements undergo
                              rigorous to ensure purity, safety, and efficacy.
                              Our best pre-workout and whey protein powders
                              contain no harmful additives or fillers, giving
                              you clean nutrition for peak performance.
                            </li>
                            <li>
                              <i className="fas fa-check"></i>Designed for Every
                              Fitness Level - From beginners to professional
                              athletes, MusclesXtrify has something for
                              everyone. Our fat burners cater to diverse fitness
                              goals, from muscle building.
                            </li>
                            <li>
                              <i className="fas fa-check"></i>Scientifically
                              Backed Performance - Our formulas are developed
                              with the latest research in ensuring that products
                              like creatine powder, whey protein powder, and
                              pre-workout supplements deliver real, measurable
                              results.
                            </li>
                          </ul>
                        </div>
                        <div className="blog-details-wrap mt-5">
                          <h3 className="title">
                            Commitment to Excellence & Innovation
                          </h3>
                          <p>
                            MusclesXtrify continuously evolves. Our focus on
                            science-backed formulations, top-quality protein
                            whey, and performance-driven ingredients sets us
                            apart in the industry.
                          </p>
                        </div>
                        <div className="blog-details-wrap">
                          <h3 className="title">
                            Join the Xtrify - Fuel Your Strength
                          </h3>
                          <p>
                            MusclesXtrify is more than a supplement brand; it's
                            a lifestyle. If you're serious about achieving your
                            fitness goals, our premium-quality whey protein,
                            pre-workout powder, and creatine supplements are
                            here to help you perform at your best.
                          </p>
                          <p>
                            Fuel your strength, power your performance, and
                            reach new heights with MusclesXtrify. Join the today
                            and be part of a fitness community that values
                            strength, endurance, and health.
                          </p>
                        </div>
                        <div className="blog-details-wrap">
                          <h3 className="title">Stay Strong. Stay Xtrified</h3>
                        </div>
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

export default AboutUs;

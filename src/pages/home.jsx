import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/default.css";
import "../assets/css/jquery-ui.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/odometer.css";
import "../assets/css/responsive.css";
import "../assets/css/slick.css";
import "../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeNutritionFooter from "../components/partials/Footer/footer";
import { Accordion } from "react-bootstrap";

function Home() {
  const canonicalUrl = window.location.href;
  const [videoUrl, setVideoUrl] = useState("");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openVideoModal = (url) => {
    setIsVideoOpen(true);
    setVideoUrl(url);
  };

  const closeVideoModal = () => {
    setIsVideoOpen(false);
    setVideoUrl("");
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.querySelector(".main-section");
      if (!section) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = section.getBoundingClientRect();

      const xMove = (clientX - left - width / 2) / (width / 2);
      const yMove = (clientY - top - height / 2) / (height / 2);

      const shapes = document.querySelectorAll(".banner-shape");
      shapes.forEach((shape, index) => {
        const movementFactor = (index + 1) * 3;

        const reverseX = index % 2 === 0 ? -1 : 1;
        const reverseY = index % 2 !== 0 ? -1 : 1;

        shape.style.transform = `translate(${
          xMove * movementFactor * reverseX
        }px, ${yMove * movementFactor * reverseY}px)`;
      });
    };

    const section = document.querySelector(".main-section");
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const carouselOptions = {
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };

  const addProductInCart = async (product_id) => {
    try {
      const isLogin = localStorage.getItem("fg_group_user_authorization");
      if (!isLogin) {
        return openModal();
      }
      // const response = await axiosInstance.post("/order-cart/add-item", {
      //   item_id: product_id,
      //   quantity: 1,
      //   item_type: "PURE_GO_MEAL_PRODUCT",
      // });
      // if (response.data.response === "OK") {
      //   window.location.href = "/add-to-cart";
      // }
    } catch (error) {
      console.error(error);
    }
  };

  const options = {
    loop: true,
    dots: true,
    dotsEach: true,
    nav: false,
    autoplayTimeout: 3000,
    smartSpeed: 500,
    responsive: {
      0: { items: 1 },
      600: { items: 1 },
      1000: { items: 1 },
    },
  };

  return (
    <>
      <Helmet>
        <title>
          MusclesXtrify Premium Supplements for Muscle Growth & Strength
        </title>
        <meta
          name="description"
          content="Boost muscle growth and strength with MusclesXtrify's premium supplements, designed for maximum performance and recovery."
        />
        <meta
          name="keyword"
          content="bowelease  Constipation Relief, constipation powder, digestive health, natural constipation relief, regular bowel movements, buy constipation powder, whey protein and, peanut butter peanut butter, peanut butters, why protein, protein in powder, whey product, wayne protein, whey protein protein, whey protein whey, whey in protein, whey whey protein, protein for protein shakes, wea protein, whey protein and protein, mass gainer mass gainer, and creatine, pre gym supplements, protein and whey powder, gainer mass gainer, pre gym supplement, whey in protein powder, protein whey supplements, protein powder whey protein, whey protein powder protein"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
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
        <section className="tg-banner-area banner-bg jarallax parallax-img">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-6 col-lg-6 order-0 order-lg-2">
                <div
                  className="tg-banner-img text-center wow fadeInRight"
                  data-wow-delay=".6s"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/banner_img.png"
                    }
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <div className="tg-banner-content">
                  <h4 className="sub-title wow fadeInUp" data-wow-delay=".2s">
                    Increased Energy!
                  </h4>
                  <h2 className="title wow fadeInUp" data-wow-delay=".4s">
                    MusclesXTrify - Nutrition <br /> That Powers Champions
                  </h2>
                  <p className=" wow fadeInUp" data-wow-delay=".6s">
                    MusclesXtrify - Premium protein supplements for muscle
                    growth, strength, and peak performance!.
                  </p>
                  <div
                    className="tg-banner-btn wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <a href="/supplements" className="tg-btn">
                      Know More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tg-features-area">
          <div className="container">
            <div className="tg-features-inner">
              <div className="row justify-content-center">
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="tg-features-item">
                    <div className="tg-features-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/capsule.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <div className="tg-features-content">
                      <h4 className="title">Calorie Increase</h4>
                      <p>
                        Boost your muscle gains with MusclesXtrify's
                        calorie-increasing supplements for optimal growth.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="tg-features-item">
                    <div className="tg-features-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/whey-protein.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <div className="tg-features-content">
                      <h4 className="title">Typical Routine</h4>
                      <p>
                        Follow a balanced routine with MusclesXtrify to enhance
                        strength, muscle growth, and recovery.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-4 col-md-6 col-sm-8 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="tg-features-item">
                    <div className="tg-features-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/muscle.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <div className="tg-features-content">
                      <h4 className="title">Energy Grow Up</h4>
                      <p>
                        Fuel your workouts and boost endurance with
                        MusclesXtrify's energy-boosting supplements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="ingredient" className="tg-supplement-area pt-130 pb-120">
          <div className="tg-supplement-bg"></div>
          <div className="container">
            <div className="tg-supplement-inner">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 order-0 order-lg-2">
                  <div
                    className="tg-supplement-img text-end  wow fadeInRight"
                    data-wow-delay=".2s"
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/supplement_img.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="tg-supplement-shape">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/supplement_shape02.png"
                      }
                      alt=""
                      className="rotateme"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className="tg-supplement-content mt-60 wow fadeInLeft"
                    data-wow-delay=".2s"
                  >
                    <div className="tg-section-title mb-25">
                      <span className="sub-title">ingredients</span>
                      <h2 className="title">
                        Growth-promoting
                        <br /> supplement
                      </h2>
                    </div>
                    <p>
                      Unlock your potential with our growth-promoting
                      supplement, designed to boost muscle development, enhance
                      performance, and support recovery for maximum fitness
                      results.
                    </p>
                    <a href="/supplements" className="tg-btn view-btn">
                      VIEW more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tg-video-area tg-video-bg jarallax parallax-img">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7 col-lg-8">
                <div
                  className="tg-video-img wow fadeInLeft"
                  data-wow-delay=".2s"
                >
                  <img
                    src={
                      process.env.PUBLIC_URL + "/assets/images/video_img.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-8">
                <div
                  className="tg-video-content wow fadeInRight"
                  data-wow-delay=".2s"
                >
                  <div className="tg-section-title white mb-30">
                    <span className="sub-title">promotional</span>
                    <h2 className="title white-text">
                      Elevate Your Fitness with MusclesXtrify
                    </h2>
                  </div>
                  <p className="info-one">
                    Unlock your full potential with MusclesXtrify's premium
                    supplements. Boost muscle growth, enhance performance, and
                    speed up recovery with our scientifically formulated
                    products. Experience maximum results and take your fitness
                    journey to the next level with MusclesXtrify today!.
                  </p>
                  <a href="/supplements" className="tg-btn">
                    VIEW more
                  </a>
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
        <section id="feature" className="tg-service-area">
          <div className="container">
            <div className="tg-service-inner">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="tg-section-title text-center mb-60">
                    <span className="sub-title">MusclesXtrify Features</span>
                    <h2 className="title">Supplement Features</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="tg-service-item">
                    <div className="tg-services-count">01</div>
                    <div className="icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/vitamin.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/contact-us">Pure Power</a>
                    </h2>
                    <div className="tg-service-content">
                      <p>
                        Packed with potent ingredients for maximum muscle growth
                        and performance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="tg-service-item">
                    <div className="tg-services-count">02</div>
                    <div className="icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/capsule.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/contact-us">Boost Strength</a>
                    </h2>
                    <div className="tg-service-content">
                      <p>
                        Enhances strength and endurance to push your limits
                        during every workout.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="tg-service-item">
                    <div className="tg-services-count">03</div>
                    <div className="icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/healthy.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/contact-us">Rapid Recovery</a>
                    </h2>
                    <div className="tg-service-content">
                      <p>
                        Supports faster recovery for better results after
                        intense training sessions.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="tg-service-item">
                    <div className="tg-services-count">04</div>
                    <div className="icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/whey-protein.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/contact-us">All Natural</a>
                    </h2>
                    <div className="tg-service-content">
                      <p>
                        Formulated with high-quality, natural ingredients for
                        clean muscle building.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="tg-service-item">
                    <div className="tg-services-count">05</div>
                    <div className="icon">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/assets/images/waist.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/contact-us">Fast Absorption</a>
                    </h2>
                    <div className="tg-service-content">
                      <p>
                        Quickly absorbed to deliver nutrients where you need
                        them most for optimal results.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-9">
                  <div className="tg-service-item">
                    <div className="tg-services-count">06</div>
                    <div className="icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/upper-body.png"
                        }
                        alt="img"
                        width="70%"
                      />
                    </div>
                    <h2 className="title">
                      <a href="/contact-us">Max Performance</a>
                    </h2>
                    <div className="tg-service-content">
                      <p>
                        Designed to elevate your performance and help you reach
                        your fitness goals faster.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-area position-relative">
          <div className="row justify-content-end g-0">
            <div className="col-12">
              <div className="faq-wrapper-two">
                <div className="section-title section-title-two white-title mb-40">
                  <h2 className="title text-center">Ask question</h2>
                </div>
                <Accordion defaultActiveKey={["1"]} alwaysOpen>
                  <Accordion.Item eventKey="1" className="mt-3 p-md-4 p-3">
                    <Accordion.Header className="f-18 lp-2">
                      What makes MusclesXtrify supplements different?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      MusclesXtrify uses scientifically-backed ingredients that
                      enhance muscle growth, strength, and recovery. Our
                      formulations are designed for maximum effectiveness and
                      purity.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="mt-3 p-md-4 p-3">
                    <Accordion.Header className="f-18 lp-2">
                      How long does it take to see results?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      Results vary, but most users begin noticing improvements
                      in strength and recovery within 2-4 weeks of consistent
                      use.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className="mt-3 p-md-4 p-3">
                    <Accordion.Header className="f-18 lp-2">
                      Are MusclesXtrify supplements safe to use?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      Yes, our products are crafted with high-quality, natural
                      ingredients and undergo rigorous testing to ensure safety
                      and effectiveness.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className="mt-3 p-md-4 p-3">
                    <Accordion.Header className="f-18 lp-2 me-2">
                      Can I take MusclesXtrify supplements with my current
                      routine?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      Absolutely! Our supplements are designed to complement any
                      workout or fitness regimen and enhance overall
                      performance.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className="mt-3 p-md-4 p-3">
                    <Accordion.Header className="f-18 lp-2">
                      Do your products contain artificial additives or fillers?
                    </Accordion.Header>
                    <Accordion.Body className="mt-3 f-rob-reg f-14 lp-2">
                      No, we pride ourselves on offering clean, natural products
                      free from artificial additives, fillers, and harmful
                      chemicals.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
        <section className="tg-testimonial-area tg-testimonial-bg jarallax parallax-img">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="tg-section-title white text-center mb-60">
                  <span className="sub-title">recommend doctors</span>
                  <h2 className="title white-text">recommended by doctors</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xxl-10 col-xl-11">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tg-testimonial-item">
                      <div className="tg-testimonial-thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/testi_img01.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="tg-testimonial-content">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h2 className="title">Rajesh Sharma</h2>
                        <p>
                          MusclesXtrify Nutrition delivers top-notch
                          supplements! Noticed great muscle gain & energy boost.
                          Fast delivery & authentic products.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tg-testimonial-item">
                      <div className="tg-testimonial-thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/testi_img02.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="tg-testimonial-content">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h2 className="title">Priya Verma</h2>
                        <p>
                          Impressed with the quality! Genuine supplements, great
                          pricing & visible results. Perfect for fitness lovers.
                          Highly recommended!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tg-testimonial-item">
                      <div className="tg-testimonial-thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/testi_img03.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="tg-testimonial-content">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h2 className="title">Amit Patel</h2>
                        <p>
                          Best protein & pre-workout! No side effects, only pure
                          gains. Trustworthy site for fitness enthusiasts. Loved
                          the fast shipping!
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tg-testimonial-item">
                      <div className="tg-testimonial-thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/testi_img04.jpg"
                          }
                          alt=""
                        />
                      </div>
                      <div className="tg-testimonial-content">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <h2 className="title">Vijay Patil</h2>
                        <p>
                          Amazing range & great results! Helped me with strength
                          & stamina. Best in class supplements. Will buy again
                          for sure!
                        </p>
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

export default Home;

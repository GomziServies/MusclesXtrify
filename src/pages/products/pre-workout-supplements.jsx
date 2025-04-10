import React, { useState, useRef } from "react";
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
import SelectableList from "../../components/SelectableList";
import ProductPhotoSection1 from "../../components/ProductPhotoSection1";

function PureGoPreWorkout() {
  const canonicalUrl = window.location.href;
  const [currentProduct, setCurrentProduct] = useState("250g-Watermelon");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSize, setActiveSize] = useState("250g");
  const [activeFlavor, setActiveFlavor] = useState("Watermelon");
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const productImages = {
    "250g-Watermelon": [
      "/assets/images/pre-workout/pre-workout-1.jpg",
      "/assets/images/pre-workout/pre-workout-2.jpg",
      "/assets/images/pre-workout/pre-workout-3.jpg",
      "/assets/images/pre-workout/pre-workout-4.jpg",
    ],
  };

  const products = [
    {
      key: "250g-Watermelon",
      data: {
        id: "67e7742d63f930dcc6a27159",
        img: "/assets/images/pre-workout/pre-workout-1.jpg",
        name: "EAA Powder",
        price: "2099",
        // discount: "490",
        size: "250 g",
        dis_point: "15%",
      },
    },
  ];

  const sizeOptions = [{ id: "250g", label: "250g" }];

  const flavorOptions = [{ id: "Watermelon", label: "Watermelon" }];

  const handleSelectSize = (id) => {
    setOpacity(0.3);
    setTimeout(() => {
      setActiveSize(id);
      setCurrentProduct(`${id}-${activeFlavor}`);
      setActiveImageIndex(0);
      setOpacity(1);
    }, 500);
  };

  const handleSelectFlavor = (id) => {
    setOpacity(0.3);
    setTimeout(() => {
      setActiveFlavor(id);
      setCurrentProduct(`${activeSize}-${id}`);
      setActiveImageIndex(0);
      setOpacity(1);
    }, 500);
  };

  const currentProductData =
    products.find((product) => product.key === currentProduct)?.data || {};

  const addProductInCart = async (product_id) => {
    try {
      const isLogin = localStorage.getItem("fg_group_user_authorization");
      if (!isLogin) {
        return openModal();
      }
      let response
      //  = await axiosInstance.post("/order-cart/add-item", {
      //   item_id: product_id,
      //   quantity: 1,
      //   item_type: "PURE_GO_MEAL_PRODUCT",
      // });
      if (response.data.response === "OK") {
        window.location.href = "/add-to-cart";
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Best EAA Supplements for Muscle Recovery & Performance</title>
        <meta
          name="description"
          content="Boost muscle recovery, endurance, and performance with the best EAA supplements. Shop top-quality essential amino acids now!"
        />
        <meta
          name="keyword"
          content="eaa, muscle recovery, electrolyte, eaa protein, supplements, eaa supplements, muscular growth, metabolism, protein powder, best collagen supplements, best probiotic for women, best protein powder, probiotics for women, vitamins, mass gainer, fat burner, electrolytes, testosterone supplements, weight loss supplements, best magnesium supplement, berberine supplement, best weight loss supplements, fiber supplement, electrolyte powder, best testosterone booster, BCAA Supplement"
        />
        <meta
          property="og:url"
          content="https://purego.gomzilifesciences.in/"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      {/* <LoaderComponent /> */}
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
                  <h2 className="title">Product</h2>
                  <nav aria-label="Breadcrumbs" className="breadcrumb-trail">
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item trail-item trail-begin">
                        <a href="index.html">
                          <span>Home</span>
                        </a>
                      </li>
                      <li className="breadcrumb-item trail-item trail-end">
                        <span>Product Details</span>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="inner-shop-details-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div
                  className="product-image-container"
                  ref={imageRef}
                  style={{
                    opacity: opacity,
                    transition: "opacity 0.3s ease-in-out",
                  }}
                >
                  <ProductPhotoSection1
                    images={productImages[currentProduct]}
                    activeImageIndex={activeImageIndex}
                    setActiveImageIndex={setActiveImageIndex}
                  />
                </div>
              </div>
              <div className="col-lg-7 d-flex align-items-center">
                <div className="inner-shop-details-content">
                  <h4 className="title">{currentProductData.name}</h4>
                  <div className="inner-shop-details-meta">
                    <ul className="list-wrap">
                      <li>
                        Brands : <a href="shop.html">MusclesXtrify</a>
                      </li>
                      <li className="inner-shop-details-review">
                        <div className="rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                        </div>
                        <span>(4.5)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="inner-shop-details-price">
                    <h2 className="price d-flex">
                      {/* ₹{currentProductData.discount}/- */}
                      <span className="old-prices">
                        ₹{currentProductData.price}/-
                      </span>
                    </h2>
                    <h5 className="stock-status">- In Stock</h5>
                  </div>
                  <p>
                    MusclesXtrify Pre Workout is designed to fuel your body with
                    energy, endurance, and focus for intense training sessions.
                    Packed with premium ingredients, it boosts stamina and helps
                    you push through your toughest workouts. This powerful
                    pre-workout formula supports strength, mental clarity, and
                    muscle performance, ensuring you stay energized and
                    motivated. Perfect for athletes and fitness enthusiasts, it
                    prepares your body to perform at its best and achieve your
                    fitness goals.
                  </p>
                  <div>
                    <SelectableList
                      items={sizeOptions}
                      activeItem={activeSize}
                      onItemClick={handleSelectSize}
                      title="Size"
                    />
                  </div>
                  <div>
                    <SelectableList
                      items={flavorOptions}
                      activeItem={activeFlavor}
                      onItemClick={handleSelectFlavor}
                      title="Flavor"
                    />
                  </div>
                  <div className="inner-shop-perched-info mt-3">
                    <button
                      onClick={() => addProductInCart(products[0].data.id)}
                      className="cart-btn"
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div
                      className="tab-pane fade show active"
                      id="description"
                      role="tabpanel"
                      aria-labelledby="description-tab"
                    >
                      <div className="product-desc-content">
                        <h4 className="title">
                          The true strength of MusclesXtrify
                        </h4>
                        <p>
                          It will suppress your appetite and provide you with a
                          higher energy level in order to keep the adrenaline
                          levels up. It will also boost your metabolism and burn
                          calories for you. For permanent weight loss, it is
                          recommended to use a fat burner which helps to reduce
                          fat faster.Ignite The Fat Burner Pre-Workout is a
                          sophisticated and comprehensive pre-workout fat burner
                          supplement.
                        </p>
                        <p>
                          Delivering intense energy, supercharged strength, and
                          power, heightened focus, vein-popping pump and
                          endurance, and superior workouts with enhanced
                          thermogenic and fat-burning properties are just a few
                          of the benefits of its uniquely developed formula. For
                          athletes of all levels, Ignite The Fat Burner
                          Pre-Workout is a highly stimulating and effective
                          pre-workout fat-burning supplement that can assist
                          maximize workout performance, burning fat more
                          quickly, and pushing your body beyond previous
                          boundaries.
                        </p>
                        <h4 className="title">BENEFITS</h4>
                        <ul class="product-desc-list list-wrap">
                          <li>
                            Experience real results & better performance with
                            fat burning ingredients.
                          </li>
                          <li>
                            Clinically proven & versatile supplement solution.
                          </li>
                          <li>Controls Appetite & Hunger.</li>
                        </ul>
                        <h4 class="title mt-5">Caution :</h4>
                        <ul class="product-desc-list list-wrap">
                          <li>
                            Not for use by persons under the age of 18 years.
                          </li>
                          <li>
                            Consult your doctor in case you are taking any
                            medication.
                          </li>
                          <li>
                            This product is not intended to diagnose, treat,
                            cure or prevent any disease.
                          </li>
                          <li>Do not exceed recommended serving size.</li>
                          <li>Store in a cool and dry place.</li>
                          <li>Keep out of reach of children.</li>
                          <li>
                            This product is not to be used as a substitute for a
                            varied diet. Not recommended for children, pregnant
                            or lactating women. and people sensitive to
                            caffeine.
                          </li>
                        </ul>
                        <h4 class="title mt-5">Direction For Use :</h4>
                        <ul class="product-desc-list list-wrap">
                          <li>
                            Take 5g (scoop for beginners) once a day with 200 -
                            220 ml chilled water for an adult or as per
                            Healthcare Expert.
                          </li>
                          <li>
                            Take 10g (scoop for professionals) once a day with
                            380 - 400 ml for an adult or as per Healthcare
                            Expert.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link active"
                        id="description-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#description"
                        role="tab"
                        aria-controls="description"
                        aria-selected="true"
                      >
                        Additional information
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContentTwo">
                    <div
                      className="tab-pane fade show active"
                      id="information"
                      role="tabpanel"
                      aria-labelledby="information-tab"
                    >
                      <div className="product-desc-content">
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <th scope="row">L-CITRULLINE</th>
                              <td>2.26 gm</td>
                            </tr>
                            <tr>
                              <th scope="row">L-ARGININE</th>
                              <td>0.45 gm</td>
                            </tr>
                            <tr>
                              <th scope="row">L-TAURINE</th>
                              <td>0.36 gm</td>
                            </tr>
                            <tr>
                              <th scope="row">B-ALANINE</th>
                              <td>0.36 gm</td>
                            </tr>
                            <tr>
                              <th scope="row">CAFFEINE ANHYDROUS</th>
                              <td>0.20 gm</td>
                            </tr>
                            <tr>
                              <th scope="row">GREEN TEA EXTRACT</th>
                              <td>0.10 gm</td>
                            </tr>
                            <tr>
                              <th scope="row">GREEN COFFEE EXTRACT</th>
                              <td>0.10 gm</td>
                            </tr>
                          </tbody>
                        </table>
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

export default PureGoPreWorkout;

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
import "../../assets/css/responsive.css";
import "../../assets/css/slick.css";
import "../../assets/css/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import HomeNutritionFooter from "../../components/partials/Footer/footer";
import SelectableList from "../../components/SelectableList";
import ProductPhotoSection1 from "../../components/ProductPhotoSection1";
import CourseButtonsContainer from "../../components/CourseButtonsContainer";

function PureGoCreatine() {
  const canonicalUrl = window.location.href;
  const [currentProduct, setCurrentProduct] = useState("250g-Unflavoured");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeSize, setActiveSize] = useState("250g");
  const [activeFlavor, setActiveFlavor] = useState("Unflavoured");
  const [opacity, setOpacity] = useState(1);
  const imageRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const productImages = {
    "250g-Unflavoured": [
      "/assets/images/creatine/creatine-1.jpg",
      "/assets/images/creatine/creatine-2.jpg",
      "/assets/images/creatine/creatine-3.jpg",
      "/assets/images/creatine/creatine-4.jpg",
    ],
  };

  const products = [
    {
      key: "250g-Unflavoured",
      data: {
        img: "/assets/images/creatine/creatine-1.jpg",
        name: "Creatine Monohydrate",
        price: "900",
        old_price: "1800",
        size: "250g",
        discount: "50%",
      },
    },
  ];

  const sizeOptions = [{ id: "250g", label: "250g" }];
  const flavorOptions = [{ id: "Unflavoured", label: "Unflavoured" }];

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

  // const addProductInCart = async (product_id) => {
  //   try {
  //     const isLogin = localStorage.getItem("fg_group_user_authorization");
  //     if (!isLogin) {
  //       return openModal();
  //     }

  //     window.location.href = "/add-to-cart";
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>
          MusclesXtrify Creatine Monohydrate - Boost Power & Performance
        </title>
        <meta
          name="description"
          content="Increase power, strength, and performance with MusclesXtrify Creatine Monohydrate for enhanced workouts and muscle growth."
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
                        <a href="/">
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
                      ₹{currentProductData.price}/-
                      <span className="old-prices">
                        ₹{currentProductData.old_price}/-
                      </span>
                    </h2>
                    <h5 className="stock-status">{currentProductData.discount}</h5>
                  </div>
                  <p>
                    MusclesXtrify Creatine Monohydrate is a powerful supplement
                    designed to enhance strength, power, and muscle performance.
                    This pure, high-quality creatine boosts energy during
                    high-intensity workouts, allowing you to push harder and
                    achieve better results. Ideal for athletes and bodybuilders,
                    it supports muscle growth and endurance. Easy to mix and
                    absorb, it helps maximize workout performance, leading to
                    faster muscle recovery and improved overall fitness. Fuel
                    your gains with MusclesXtrify Creatine!
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
                  <CourseButtonsContainer
                    currentProductData={currentProductData}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="product-desc-wrap">
                  <ul className="nav nav-tabs" id="myTabTwo" role="tablist">
                    <li className="nav-item">
                      <a
                        href="creatine-supplements"
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
                          MusclesXtrify ATP Creatine Monohydrate :
                        </h4>
                        <p>
                          Creatine monohydrate works by increasing the body's
                          stores of phosphocreatine, a molecule that helps
                          regenerate adenosine triphosphate (ATP), the primary
                          energy source for muscle contractions during
                          high-intensity activities like weightlifting and
                          sprinting.
                        </p>
                        <h4 className="title">
                          When To Consume Creatine Monohydrate?
                        </h4>
                        <p>
                          Creatine is a compelling intra and post-exercise
                          supplements. This implies that you ought to be
                          consuming these during your exercise center meeting or
                          following. This is because they are viable in
                          assisting with building and fixing muscle harms from
                          serious meetings. These impact the top around 30 to an
                          hour post utilization. In turn, you should drink your
                          supplements during that window to help build muscle
                          and improve muscle recovery. This will assist with
                          muscle irritation post-exercise.
                        </p>
                        <h4 className="title">
                          Precautions To Take When Consuming Creatine Powder:
                        </h4>
                        <ul className="product-desc-list list-wrap">
                          <li>
                            Following precautions must be taken when using
                            creatine supplements either as pre-workout or
                            post-workout.
                          </li>
                          <li>
                            Creatine supplements might obstruct blood glucose
                            levels during and after medical procedures. You may
                            likewise be at expanded risk if you have persistent
                            liquor addiction or fanned-chain ketoaciduria.
                          </li>
                          <li>
                            Also, if you're pregnant or breastfeeding, don't
                            indulge in creatine intake. These ought to be
                            utilised warily previously or during exercises that
                            require engine coordination, like driving.
                          </li>
                          <li>
                            Creatine powder could likewise cause stomach issues,
                            including sickness, loose bowels, and swelling.
                          </li>
                          <li>
                            You should likewise peruse the mark of the item
                            cautiously to guarantee that you defeat results and
                            face no difficulties in the later stages.
                          </li>
                          <li>
                            It is important to consult a doctor before you begin
                            with any kind of intake as he can guide you on your
                            dosage and intake frequency based on your medical
                            conditions.
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
                              <th scope="row">
                                Creatine Monohydrate (Micronised)
                              </th>
                              <td>4.5 gm</td>
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

export default PureGoCreatine;

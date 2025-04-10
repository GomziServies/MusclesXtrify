import React, { useState, useEffect } from "react";
// import "../../assets/css/offcanvase.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AddtoCartOffCourseCanvas = ({ isOpen, onClose, currentProductData }) => {
  const [animateOpen, setAnimateOpen] = useState(false);
  const [productDataGet, setProductDataGet] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [totalMRP, setTotalMRP] = React.useState(0);
  const [previousProductData, setPreviousProductData] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setAnimateOpen(true);
    } else {
      setAnimateOpen(false);
    }
  }, [isOpen]);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      // let response
      //  = await axiosInstance.get(
      //   "/order-cart/get-carts?item_type=FITNESS_COURSE"
      // );
      // const serverData = response.data.data[0];
      // setServerDataID(serverData._id);
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const priceMap = existingData.products.reduce((map, product) => {
        map[product.price] = product.price;
        return map;
      }, {});

      // const itemDataForGetQty = serverData?.items || [];
      // const itemDataForGetImgName = serverData?.items_details || [];

      // if (!itemDataForGetQty?.length || !itemDataForGetImgName?.length) {
      //   console.error("No items or item details found in the response.");
      //   return;
      // }

      const combinedData = existingData.products.map((item) => {
        // const itemDetails = itemDataForGetImgName.find(
        //   (details) => details._id === item.item_id
        // );
        // if (!itemDetails) {
        //   console.warn(`No details found for item with id: ${item.item_id}`);
        //   return item;
        // }

        return {
          ...item,
          // ...itemDetails,
        };
      });

      const updatedServerData = combinedData.map((product) => {
        return {
          ...product,
          mrpPrice: priceMap[product.name] || parseInt(product.price),
        };
      });

      console.log("updatedServerData :- ", updatedServerData);

      setPreviousProductData(updatedServerData);
      totalMRPCalculation(updatedServerData);
      setProductDataGet(updatedServerData);

      totalAmountCalculation(updatedServerData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  const totalMRPCalculation = (data) => {
    const totalMrp = data.map((product) => {
      const mrp = product.mrpPrice;
      return mrp;
    });
    const amount = totalMrp.reduce((sum, product) => sum + product, 0);
    setTotalMRP(amount || 0);
    return amount;
  };

  const totalAmountCalculation = (data) => {
    const amount = data.reduce((sum, product) => sum + product.mrpPrice, 0);
    console.log("amount :- ", amount);

    setTotalAmount(amount || 0);
  };

  const handleRemoveProduct = async (productName) => {
    try {
      // await axiosInstance.delete(
      //   `/order-cart/remove-item?item_id=${course_id}&cart_id=${serverDataID}`
      // );
      setProductDataGet((prevData) =>
        prevData.filter((product) => product.name !== productName)
      );
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };
      existingData.products = existingData.products.filter(
        (product) => product.name !== productName
      );
      localStorage.setItem("addItemInCart", JSON.stringify(existingData));
      fetchProductData();
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  useEffect(() => {
    if (currentProductData) {
      fetchProductData(currentProductData);
    }
  }, [currentProductData]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      const changedProducts = productDataGet.filter((currentProduct) => {
        const previousProduct = previousProductData.find(
          (p) => p._id === currentProduct._id
        );
        return previousProduct;
      });

      if (changedProducts?.length > 0) {
        const products = productDataGet.map((product) => ({
          course_id: product._id,
        }));

        let response;
        //  = await axiosInstance.post("/order-cart/add-item", {
        //   item_id: changedProducts[0].item_id,
        //   item_type: changedProducts[0].item_type,
        // });

        if (response.data.status === 200) {
          setPreviousProductData(productDataGet);
          localStorage.setItem(
            "corsesData",
            JSON.stringify({
              products,
              totalAmount,
              totalMRP,
            })
          );

          window.location.href = `/fgiit/check-out`;
        }
      } else {
        const products = productDataGet.map((product) => ({
          course_id: product._id,
        }));

        localStorage.setItem(
          "corsesData",
          JSON.stringify({
            products,
            totalAmount,
            totalMRP,
          })
        );

        window.location.href = `/fgiit/check-out`;
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const carouselOptions = {
    loop: true,
    autoplay: false,
    dots: false,
    nav: false,
    navText: [
      '<i class="fas fa-arrow-left"></i>',
      '<i class="fas fa-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("fg_group_user_authorization")
  );

  const toggleMenu = async (data, BuyButton, e) => {
    e.preventDefault();
    try {
      if (isAuthenticated) {
        const existingData = JSON.parse(
          localStorage.getItem("addItemInCart")
        ) || { products: [] };

        localStorage.setItem("addItemInCart", JSON.stringify(existingData));
        let response;
        //  = await axiosInstance.post("/order-cart/add-item", {
        //   item_id: BuyButton,
        //   item_type: "FITNESS_COURSE",
        // });
        if (response.data.response === "OK") {
          // setCourses(data);
          // setMenuOpen(!menuOpen);
          fetchProductData();
        }
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={onClose}></div>}
      <div className={`offcanvas ${animateOpen ? "open" : ""}`}>
        <div
          className="d-flex justify-content-between px-2 pt-2"
          style={{ background: "rgb(238 238 238)" }}
        >
          <h2 className="h4-fs">YOUR CART</h2>
          <button
            type="button"
            className="closess closse-mobile p-0"
            onClick={onClose}
            style={{
              backgroundColor: "transparent",
              border: "none",
              width: "50px",
            }}
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" className="p-0">
              <i className="fas fa-times text-black"></i>
            </span>
          </button>
        </div>
        <div>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center mb-4 my-7 loader-h">
              <div class="loader"></div>
            </div>
          ) : (
            productDataGet?.length > 0 && (
              <div>
                <div className="col-12 cart-detail py-3">
                  {productDataGet.map((product) => {
                    // const totalPrice = product?.price || 0;
                    let newData;
                    //  = moreProductData.find(
                    //   (more) => more.BuyButton === product._id
                    // );
                    return (
                      <div
                        key={product._id}
                        className="cart-item-main p-2 p-md-3 bg-white br-15 shadow mb-4 position-relative"
                      >
                        <div className="media bg-white cart-main">
                          <div className="row">
                            <div className="col-3 p-0">
                              <span
                                className="lazy-load-image-background blur lazy-load-image-loaded"
                                style={{ display: "inline-block" }}
                              >
                                <img
                                  alt="product"
                                  className="img-fluid cp"
                                  src={`${product?.img}`}
                                />
                              </span>
                            </div>
                            <div className="col-7">
                              <div className="media-body align-self-center">
                                <div className="d-flex justify-content-between">
                                  <div className="col-12 p-0">
                                    <h4
                                      className="f-rob-bol d-inline-block h3-fs cp mb-2 fs-21"
                                      title={product.name}
                                    >
                                      {product.name?.length > 30
                                        ? product.name.slice(0, 30) + "..."
                                        : product.name}
                                    </h4>
                                    {/* <h2 className="h3-fs f-rob-bol f-14 cp mb-1">
                                    ({product.size ? product.size : "N/A"}){" "}
                                  </h2> */}
                                  </div>
                                </div>
                                <ul className="list-unstyled m-0">
                                  <li className="d-block">
                                    <span className="d-inline-block f-rob-med f-13 mr-2">
                                      Inclusive of all taxes
                                    </span>
                                  </li>
                                </ul>
                                <div className="col-12 p-0 mt-1">
                                  <div className="d-inline-block">
                                    <span className="d-inline-block mr-2 f-rob-bol f-22">
                                      ₹{product.mrpPrice}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-2">
                              <div className="right">
                                <div className="remove">
                                  <button
                                    type="button"
                                    className="closess mr-3 closse-mobile-1 p-0"
                                    style={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      width: "50px",
                                    }}
                                    onClick={() =>
                                      handleRemoveProduct(product.name)
                                    }
                                    aria-label="Remove"
                                  >
                                    <span aria-hidden="true" className="p-0">
                                      <i className="fa-solid fa-trash-can text-black"></i>
                                    </span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* <div>
                    <div className="mb-3 align-items-center">
                      <h2
                        className="f-rob-bol h3-fs d-inline-block cp fs-21"
                      >
                        More Products
                      </h2>
                    </div>
                    <OwlCarousel
                      id="fwg-owl"
                      className="owl-theme"
                      {...carouselOptions}
                    >
                      {moreProductData
                        .filter((product) => product.coverImage) // Filter out products with undefined coverImage
                        .map((product, index) => (
                          <div
                            className="item d-flex justify-content-center"
                            key={index}
                          >
                            <div
                              className="d-inline-block"
                              tabIndex="-1"
                              style={{ width: "80%", display: "inline-block" }}
                            >
                              <div className="col-12 p-0">
                                <div className="categories-product-main text-center">
                                  <div className="category-product-item">
                                    <Link
                                      to={product?.data?.link}
                                      className="book"
                                    >
                                      <img
                                        effect="blur"
                                        className="lazy"
                                        src={
                                          process.env.PUBLIC_URL +
                                          product.coverImage
                                        }
                                        alt={product.title}
                                      />
                                    </Link>
                                  </div>
                                  <div className="custom-tooltip-main">
                                    <p className="my-2 f-pop-sembol text-dark fs-15 lh-0">
                                      {product.title?.length > 20
                                        ? product.title.slice(0, 20) + "..."
                                        : product.title}
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <button
                                    className="addtocartbtncart"
                                    onClick={(e) =>
                                      toggleMenu(
                                        product.data,
                                        product.BuyButton,
                                        e
                                      )
                                    }
                                  >
                                    Add To Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </OwlCarousel>
                  </div> */}
                </div>
                <div
                  className="d-flex flex-column align-items-center checkout-main-1"
                  style={{ background: "rgb(238 238 238)" }}
                >
                  <div className="w-100 p-2 pb-3">
                    <div className="subtotal-main shadow bg-white br-15 mb-3 p-3">
                      <div className="d-flex align-items-center justify-content-between">
                        <div>
                          <p className="m-0 f-rob-bol f-16">Total Amount</p>
                        </div>
                        <div>
                          <span className="d-inline-block f-rob-med f-16 text-lig-gray">
                            ₹{totalAmount}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <div className="common-button">
                        <div className="inner-shop-perched-info mt-3">
                          <button
                            onClick={(e) => handleAddToCart(e)}
                            className="cart-btn w-100 m-0"
                          >
                            Check OUT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
          {productDataGet?.length === 0 && !loading && (
            <div
              className="d-flex align-items-center"
              style={{ height: "90vh" }}
            >
              <div className="row">
                <div className="col-12">
                  <img
                    alt="Coming Soon"
                    className="img-fluid"
                    src={`${process.env.PUBLIC_URL} /assets/images/empty.webp`}
                    width="100%"
                    height="auto"
                  />
                  <p className="m-0 f-rob-bol f-20 mt-4 text-center">
                    <b>Your Cart Is Empty</b>
                  </p>
                  <div className="common-button">
                    <div className="inner-shop-perched-info mt-3">
                      <Link to="/" className="cart-btn w-100 m-0 mx-3">
                        Go Home
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AddtoCartOffCourseCanvas;

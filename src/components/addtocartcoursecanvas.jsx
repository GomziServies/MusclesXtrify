import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AddtoCartOffCourseCanvas = ({ isOpen, onClose, currentProductData }) => {
  const [animateOpen, setAnimateOpen] = useState(false);
  const [productDataGet, setProductDataGet] = React.useState([]);
  const [loading, setLoading] = useState(false);
  const [totalAmount, setTotalAmount] = React.useState(0);

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
      const existingData = JSON.parse(
        localStorage.getItem("addItemInCart")
      ) || { products: [] };

      const priceMap = existingData.products.reduce((map, product) => {
        map[product.price] = product.price;
        return map;
      }, {});

      const combinedData = existingData.products.map((item) => {
        return {
          ...item,
        };
      });

      const updatedServerData = combinedData.map((product) => {
        return {
          ...product,
          mrpPrice: priceMap[product.name] || parseInt(product.price),
        };
      });

      setProductDataGet(updatedServerData);
      totalAmountCalculation(updatedServerData);
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
    setLoading(false);
  };

  const totalAmountCalculation = (data) => {
    const amount = data.reduce((sum, product) => sum + product.mrpPrice, 0);
    setTotalAmount(amount || 0);
  };

  const handleRemoveProduct = async (productName) => {
    try {
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
      fetchProductData();
    }
  }, [currentProductData]);

  const handleAddToCart = async (e) => {
    e.preventDefault();
    try {
      localStorage.setItem('checkOutAmount', totalAmount)
      window.location.href = "/check-out"
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

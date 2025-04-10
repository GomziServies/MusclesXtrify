import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import NutritionHeader from "../components/partials/Header/nutritionsheader";
import LoadingComponent from "../components/loadingComponent";
import emailjs from '@emailjs/browser';

function CheckOut() {
  const [paymentMode, setPaymentMode] = useState("Cash On Delivery");
  const addItemInCart = localStorage.getItem("addItemInCart");
  const [mainPrice, setMainPrice] = useState();
  const canonicalUrl = window.location.href;
  const [totalDiscount, setTotalDiscount] = useState(0);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    pin_code: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (addItemInCart) {
      getUserData();
      getCheckOutAmount();
    }
  }, [addItemInCart]);

  const handleFormSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const updatedUserData = {
        pin_code: e.target.postalCode.value,
        address_line_1: e.target.officeName.value,
        address_line_2: e.target.roadName.value,
        city: e.target.city.value,
        state: e.target.state.value,
        country: e.target.country.value,
        email: e.target.email.value,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
      };

      localStorage.setItem("userData", JSON.stringify(updatedUserData));

      // send email on: e.target.email.value
      const form = e.target;

      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form,
        "YOUR_PUBLIC_KEY"
      );

      Swal.fire({
        icon: "success",
        title: "Email Sent!",
        text: "Your order details have been sent.",
      });

      localStorage.removeItem("checkOutAmount");
      localStorage.removeItem("addItemInCart");
    } catch (error) {
      console.error("Error in handleFormSubmit:", error);
    }
    setLoading(false);
  };

  const getUserData = async () => {
    try {
      let userData = localStorage.getItem("userData");
      userData = JSON.parse(userData);
      if (userData) {
        console.log("aaaaa", userData);
        setUserData({
          pin_code: userData?.pin_code || "",
          address_line_1: userData?.address_line_1 || "",
          address_line_2: userData?.address_line_2 || "",
          city: userData?.city || "",
          email: userData?.email || "",
          first_name: userData?.first_name || "",
          last_name: userData?.last_name || "",
          state: userData?.state || "",
          country: userData?.country || "",
        });
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  const getCheckOutAmount = async () => {
    try {
      let checkOutAmount = localStorage.getItem("checkOutAmount");
      checkOutAmount = JSON.parse(checkOutAmount);
      if (checkOutAmount) {
        setMainPrice(checkOutAmount);
      }
    } catch (error) {
      console.error("Error in getUserData:", error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Checkout at Pure Go - Secure & Fast Payment Options</title>
        <meta
          name="description"
          content="Complete your purchase at Pure Go with secure and fast checkout options. Hassle-free payment process for all your nutrition and supplement needs."
        />
        <meta
          name="keyword"
          content="bowelease  Constipation Relief, diet supplements near me, best multivitamins for men india, booster testosterone, how to fat burn, supplement shop near, whey isolate vs protein, whey protein vs whey protein isolate, women's protein powder for weight gain, protein powder for weight gain woman, which best peanut butter, nutrition in 100g oats, protein shakes for weight gain female"
        />
        <meta
          property="og:title"
          content="Checkout at Pure Go - Secure & Fast Payment Options"
        />
        <meta
          property="og:description"
          content="Complete your purchase at Pure Go with secure and fast checkout options. Hassle-free payment process for all your nutrition and supplement needs."
        />
        <meta
          property="og:url"
          content="https://www.purego.gomzilifesciences.in/nutrition/check-out"
        />
        <meta
          property="og:image"
          content="https://www.purego.gomzilifesciences.in/assets/process.env.PUBLIC_URL + '/assets/images/nutrition-logo.png"
        />
        <link rel="canonical" href={{ canonicalUrl }} />
      </Helmet>
      {loading && <LoadingComponent />}
      <NutritionHeader />
      <main className="main-area fix">
        <div className="checkout__area section-py-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <form
                  onSubmit={handleFormSubmit}
                  className="customer__form-wrap"
                >
                  <span className="title">Billing Details</span>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="first-name">First name *</label>
                        <input
                          type="text"
                          id="first-name"
                          placeholder="Enter First Name"
                          name="first_name"
                          required
                          defaultValue={userData.first_name}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="last-name">Last name *</label>
                        <input
                          type="text"
                          id="last-name"
                          placeholder="Enter Last Name"
                          name="last_name"
                          required
                          defaultValue={userData.last_name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-grp">
                    <label htmlFor="email">Email address *</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter Email"
                      name="email"
                      required
                      defaultValue={userData.email}
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="street-address">Street address *</label>
                        <input
                          type="text"
                          id="street-address"
                          placeholder="House No/Building Name/Office Name"
                          name="officeName"
                          required
                          defaultValue={userData.address_line_1}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="street-address">
                          Road Name/Area/Colony *
                        </label>
                        <input
                          type="text"
                          id="street-address-two"
                          placeholder="Road Name/Area/Colony"
                          name="roadName"
                          required
                          defaultValue={userData.address_line_2}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="town-name">City *</label>
                        <input
                          type="text"
                          id="town-name"
                          placeholder="City"
                          name="city"
                          required
                          defaultValue={userData.city}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="district-name">State *</label>
                        <input
                          type="text"
                          id="state"
                          placeholder="Enter State Name"
                          name="state"
                          required
                          defaultValue={userData.state}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="country-name">Country / Region *</label>
                        <input
                          type="text"
                          id="country"
                          placeholder="Enter Country"
                          name="country"
                          required
                          defaultValue={userData.country}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-grp">
                        <label htmlFor="zip-code">PostalCode *</label>
                        <input
                          type="text"
                          id="postalCode"
                          placeholder="Postal Code"
                          name="postalCode"
                          required
                          maxLength="6"
                          defaultValue={userData.pin_code}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-5">
                <div className="order__info-wrap">
                  <h2 className="title">YOUR ORDER</h2>
                  <ul className="list-wrap">
                    <li className="title text-dark">
                      Product <span>Subtotal</span>
                    </li>
                    <li>
                      Order Total{" "}
                      <span>₹{Math.round(mainPrice).toFixed(2)}</span>
                    </li>
                    {totalDiscount !== 0 && (
                      <li>
                        Discount{" "}
                        <span>
                          -{" "}
                          {totalDiscount !== undefined && totalDiscount !== null
                            ? totalDiscount
                            : 0}
                          %
                        </span>
                      </li>
                    )}
                    <li>
                      Delivery Charges{" "}
                      {/* <span>₹{mainPrice <= 499 ? 85 : "FREE"}</span> */}
                      <span>₹FREE</span>
                    </li>
                    <li className="text-dark">
                      Amount Payable{" "}
                      <span>
                        ₹
                        {/* {mainPrice <= 499
                          ? mainPrice + 85
                          : Math.round(mainPrice).toFixed(2)} */}
                        {Math.round(mainPrice).toFixed(2)}
                      </span>
                    </li>
                  </ul>
                  <div className="br-15 mb-3">
                    <div className=" bg-white pt-2">
                      <div>
                        <span className="f-rob-bol f-16 text-uppercase text-secondary">
                          <i className="fas fa-check-circle me-2"></i>
                          SELECT PAYMENT MODE
                        </span>
                      </div>
                    </div>
                    <div className="py-3">
                      <div className="row">
                        <div className="col-12">
                          <div className="checkbox-wrapper-16">
                            <label className="checkbox-wrapper mx-2">
                              <input
                                type="radio"
                                className="checkbox-input"
                                name="paymentMode"
                                value="Cash On Delivery"
                                defaultChecked={true}
                              />
                              <span className="checkbox-tile">
                                <span className="checkbox-icon">
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/assets/images/loan.png"
                                    }
                                    className="border-radius-20"
                                    width="32px"
                                    alt="fggroup"
                                  />
                                </span>
                                <span className="checkbox-label">COD</span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="inner-shop-perched-info mt-3">
                    <button
                      onClick={() => {
                        if (paymentMode) {
                          document.querySelector("form").requestSubmit();
                        } else {
                          Swal.fire({
                            icon: "error",
                            title: "Error!",
                            text: "Please select a payment method.",
                          });
                        }
                      }}
                      className="cart-btn w-100 m-0"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default CheckOut;

// import React from 'react'

import {
  cart,
  product01,
  productThumb01,
  productThumb02,
  productThumb03,
  productThumb04,
} from "../assets";

import { useState } from "react";

const Section = () => {
  const [numberChange, setNumberChange] = useState(0);
  const [buttonActive, setButtonActive] = useState("productOne");
  const numberPlus = () => {
    Number(numberChange) <= 98
      ? setNumberChange(Number(numberChange) + 1)
      : setNumberChange(99);
  };
  const numberMinus = () => {
    Number(numberChange) >= 1
      ? setNumberChange(Number(numberChange) - 1)
      : setNumberChange(0);
  };
  const handleChange = (event) =>
    setNumberChange(event.target.value.slice(0, 2));

  // Adding to Cart Button
  const cartButton = () => {
    setNumberChange(0);
    numberChange >= 1
      ? localStorage.getItem("items") == undefined
        ? localStorage.setItem("items", numberChange)
        : null
      : null;

    localStorage.setItem(
      "items",
      Number(numberChange) + Number(localStorage.getItem("items"))
    );
  };
  // useEffect(() =>{
  //   localStorage.setItem("items", 0)
  // },[]);
  return (
    <div className="section">
      <div className="sectionImage">
        <div className="imageDisplay">
          <img
            src={product01}
            alt="product01"
            className="size-full object-cover"
          />
        </div>
        <div className="imageButtonContainer">
          <div
            onClick={() => {
              setButtonActive("productOne");
            }}
            className={`imageButton ${
              buttonActive == "productOne"
                ? "border-[hsl(26,_100%,_55%)]"
                : "border-transparent"
            }`}
          >
            <img
              src={productThumb01}
              alt="productThumb01"
              className={`size-full ${
                buttonActive == "productOne"
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50 duration-150"
              }`}
            />
          </div>

          <div
            onClick={() => {
              setButtonActive("productTwo");
            }}
            className={`imageButton ${
              buttonActive == "productTwo"
                ? "border-[hsl(26,_100%,_55%)]"
                : "border-transparent"
            }`}
          >
            <img
              src={productThumb02}
              alt="productThumb01"
              className={`size-full ${
                buttonActive == "productTwo"
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50 duration-150"
              }`}
            />
          </div>

          <div
            onClick={() => {
              setButtonActive("productThree");
            }}
            className={`imageButton ${
              buttonActive == "productThree"
                ? "border-[hsl(26,_100%,_55%)] duration-150"
                : "border-transparent duration-150"
            } `}
          >
            <img
              src={productThumb03}
              alt="productThumb03"
              className={`size-full ${
                buttonActive == "productThree"
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50 duration-150"
              }`}
            />
          </div>
          <div
            onClick={() => {
              setButtonActive("productFour");
            }}
            className={`imageButton ${
              buttonActive == "productFour"
                ? "border-[hsl(26,_100%,_55%)]"
                : "border-transparent"
            }`}
          >
            <img
              src={productThumb04}
              alt="productThumb04"
              className={`size-full ${
                buttonActive == "productFour"
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50"
              }`}
            />
          </div>
        </div>
      </div>
      <div className="sectionDetails">
        <div className="companyName">Sneaker Company</div>
        <div className="productDHeader">Fall Limited Edition Sneakers</div>
        <div className="productDetails">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </div>
        <div className="productPrice">
          <div className="offerPricePercent">
            <div className="offerPrice">$125.00</div>
            <div className="pricePercentage">50%</div>
          </div>
          <div className="normalPrice">$250.00</div>
        </div>
        <div className="inputCart">
          <div className="inputCheck">
            <input type="button" onClick={numberMinus} value="-" />
            <input
              type="number"
              name="number"
              min="0"
              max="99"
              value={numberChange}
              id=""
              onChange={handleChange}
            />
            <input type="button" onClick={numberPlus} value="+" />
          </div>
          <button type="submit" onClick={cartButton} className="submit">
            <img src={cart} alt="cart" />
            <span>Add to cart</span>
          </button>
        </div>
        <div id="output"></div>
        {/* <div className="text-lg">
          <div>Fall Limited Edition Sneakers</div>
          <div><span>$125.00</span> X <span id="output">{}</span> <span>{125.00 * }</span></div>
        </div> */}
      </div>

      {/* <div>
        <input
          type="text"
          name=""
          id="text"
          value={valuee}
          onChange={(e) => setValuee(e.target.value)}
        />
        <button
          onClick={() => {
            document.getElementById("output").innerHTML =
              document.getElementById("text").value;
          }}
        >Output</button>
        <fieldset id="output"></fieldset>
      </div> */}
    </div>
  );
};

export default Section;

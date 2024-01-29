// import React from 'react'

import {
  cart,
  product01,
  product02,
  product03,
  product04,
  productThumb01,
  productThumb02,
  productThumb03,
  productThumb04,
} from "../assets";

import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Section = ({ setInputNumberCart }) => {
  const [numberChange, setNumberChange] = useState(0);
  // const [addCart, setAddCart] = useState("");
  const [buttonActive, setButtonActive] = useState("productOne");
  const numberPlus = () => {
    Number(numberChange) < 100
      ? setNumberChange(Number(numberChange) + 1)
      : setNumberChange(100);
  };
  const numberMinus = () => {
    Number(numberChange) > 0
      ? setNumberChange(Number(numberChange) - 1)
      : setNumberChange(0);
  };
  const handleChange = (event) =>
    setNumberChange(
      event.target.value <= 100
        ? event.target.value
        : (event.target.value = 100)
    );

  // Adding to Cart Button
  const addCartButton = () => {
    numberChange >= 1 && numberChange <= 100
      ? localStorage.getItem("items") == null
        ? localStorage.setItem("items", numberChange)
        : localStorage.setItem(
            "items",
            Number(numberChange) + Number(localStorage.getItem("items"))
            // <= 100
            //   ? Number(numberChange) + Number(localStorage.getItem("items"))
            //   : localStorage.getItem("items")
          )
      : null;

    // localStorage.setItem(
    //   "items",
    //   Number(numberChange) + Number(localStorage.getItem("items"))
    // );
    setInputNumberCart(localStorage.getItem("items"));
    setNumberChange(0);
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
            id="product01"
            className=" min-h-full object-cover product01"
          />
          <img
            src={product02}
            alt="product02"
            id="product02"
            className="min-h-full object-cover product02"
          />
          <img
            src={product03}
            alt="product03"
            id="product03"
            className="min-h-full object-cover product03"
          />
          <img
            src={product04}
            alt="product04"
            id="product04"
            className="min-h-full object-cover product04"
          />
        </div>
        <div className="imageButtonContainer">
          <a
            href="#product01"
            onClick={() => {
              setButtonActive("productOne");
              // document.getElementsByClassName("product01")[0].style
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
          </a>

          <a
            href="#product02"
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
          </a>

          <a
            href="#product03"
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
          </a>
          <a
            href="#product04"
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
          </a>
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
              max="100"
              value={numberChange}
              id=""
              onChange={handleChange}
            />
            <input type="button" onClick={numberPlus} value="+" />
          </div>
          <button type="submit" onClick={addCartButton} className="submit">
            <img src={cart} alt="cart" />
            <span>Add to cart</span>
          </button>
        </div>
        {/* <div id="output">{ localStorage.getItem("items")}</div> */}
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

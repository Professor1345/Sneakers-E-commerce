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
  const handleChange = (event) =>
    setNumberChange(event.target.value.slice(0,2))
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
          <div className="imageButton">
            <img
              src={productThumb01}
              alt="productThumb01"
              className="size-full"
            />
          </div>
          <div className="imageButton">
            <img
              src={productThumb02}
              alt="productThumb02"
              className="size-full"
            />
          </div>
          <div className="imageButton">
            <img
              src={productThumb03}
              alt="productThumb03"
              className="size-full"
            />
          </div>
          <div className="imageButton">
            <img
              src={productThumb04}
              alt="productThumb04"
              className="size-full"
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
            <input type="button" value="-" />
            <input type="number" name="number" min="0" max="99" value={numberChange} id="" onChange={handleChange} />
            <input type="button" value="+" />
          </div>
          <button type="submit" className="submit">
            <img src={cart} alt="cart" />
            <span>Add to cart</span>
          </button>
        </div>
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

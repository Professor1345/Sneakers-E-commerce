// import React from 'react'

import { cart, product01, productThumb01, productThumb02, productThumb03, productThumb04 } from "../assets";

// import { useState } from "react";

const Section = () => {
  // const [valuee, setValuee] = useState("");
  return (
    <div className="section">
      <div className="sectionImage">
        <div className="imageDisplay">
          <img src={product01} alt="product01" className="size-full"/>
        </div>
        <div className="imageButtonContainer">
          <div className="imageButton"><img src={productThumb01} alt="productThumb01" className="size-full"/></div>
          <div className="imageButton"><img src={productThumb02} alt="productThumb02" className="size-full"/></div>
          <div className="imageButton"><img src={productThumb03} alt="productThumb03" className="size-full"/></div>
          <div className="imageButton"><img src={productThumb04} alt="productThumb04"className="size-full"/></div>
        </div>
      </div>
      <div className="sectionDetails">
        <div className="companyName"></div>
        <div className="productDHeader"></div>
        <div className="productDetails"></div>
        <div className="productPrice">
          <div className="offerPricePercent">
            <div className="offerPrice"></div>
            <div className="pricePercentage"></div>
          </div>
          <div className="normalPrice"></div>
        </div>
        <div className="inputCheck">
          <div>
            <input type="button" value="-" />
            <input type="number" name="number" id="" />
            <input type="button" value="+" />
          </div>
        </div>
        <button type="submit">
          <img src={cart} alt="cart" />
          <span>Add to cart</span>
        </button>
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

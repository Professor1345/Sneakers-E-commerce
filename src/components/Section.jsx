// import React from 'react'

import {
  cart,
  close,
  next,
  previous,
  product01,
  product02,
  product03,
  product04,
  productThumb01,
  productThumb02,
  productThumb03,
  productThumb04,
} from "../assets";

import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
const Section = ({ setInputNumberCart }) => {
  const [numberChange, setNumberChange] = useState(0);
  const [showProductOver, setShowProductOver] = useState(false);
  const [productDisplay, setProductDisplay] = useState(1);
  useEffect(() => {
    // let productOne = document.getElementById("product01");
    // let productTwo = document.getElementById("product02");
    // let productThree = document.getElementById("product03");
    // let productFour = document.getElementById("product04");

    // //Mobile

    // let mproductOne = document.getElementById("mproduct01");
    // let mproductTwo = document.getElementById("mproduct02");
    // let mproductThree = document.getElementById("mproduct03");
    // let mproductFour = document.getElementById("mproduct04");
    let imageProduct = document.querySelectorAll(".imageDisplay img");

    switch (productDisplay) {
      case 1:
        for (const iterator of imageProduct) {
          iterator.style.left = "0%";
        }

        // productTwo.style.left = "0%";
        // productThree.style.left = "0%";
        // productFour.style.left = "0%";

        // // Mobile
        // mproductOne.style.left = "0%";
        // mproductTwo.style.left = "0%";
        // mproductThree.style.left = "0%";
        // mproductFour.style.left = "0%";

        break;
      case 2:
        for (const iterator of imageProduct) {
          iterator.style.left = "-100%";
        }
        // productOne.style.left = "-100%";
        // productTwo.style.left = "-100%";
        // productThree.style.left = "-100%";
        // productFour.style.left = "-100%";
        // // productFour.style.zIndex = "-1";

        // //Mobile
        // mproductOne.style.left = "-100%";
        // mproductTwo.style.left = "-100%";
        // mproductThree.style.left = "-100%";
        // mproductFour.style.left = "-100%";
        break;
      case 3:
        for (const iterator of imageProduct) {
          iterator.style.left = "-200%";
        }
        // productOne.style.left = "-200%";
        // productTwo.style.left = "-200%";
        // productThree.style.left = "-200%";
        // productFour.style.left = "-200%";

        // // Mobile
        // mproductOne.style.left = "-200%";
        // mproductTwo.style.left = "-200%";
        // mproductThree.style.left = "-200%";
        // mproductFour.style.left = "-200%";

        break;
      case 4:
        for (const iterator of imageProduct) {
          iterator.style.left = "-300%";
        }
        // productOne.style.left = "-300%";
        // productTwo.style.left = "-300%";
        // productThree.style.left = "-300%";
        // productFour.style.left = "-300%";

        // // Mobile
        // mproductOne.style.left = "-300%";
        // mproductTwo.style.left = "-300%";
        // mproductThree.style.left = "-300%";
        // mproductFour.style.left = "-300%";
        break;
      default:
        //DEFAULT
        // productOne.style.left = "0%";
        // productTwo.style.left = "0%";
        // productThree.style.left = "0%";
        // productFour.style.left = "-400%";
        break;
    }
  }, [productDisplay]);
  // const [buttonActive, setButtonActive] = useState("productOne");
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
  useEffect(() => {
    showProductOver
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showProductOver]);

  return (
    <div className="section">
      <div className="sectionImage">
        <div className="imageDisToolCont">
        <div className="flex sm:hidden justify-between w-full h-full absolute  ">
              <button
                className="self-center left-4 relative rounded-full overflow-hidden bg-white z-[1] hover:invert-[100%] brightness-200"
                onClick={() =>
                  setProductDisplay((minus) => {
                    return minus == 1 ? minus + 3 : minus - 1;
                  })
                }
              >
                <img src={previous} alt="<" className="py-[10px] pl-[10px] pr-[13px] max-w-[100%] " />
              </button>
              <button
                className="self-center right-4 relative rounded-full overflow-hidden bg-white z-[1] hover:invert-[100%] brightness-200"
                onClick={() =>
                  setProductDisplay((plus) => {
                    return plus == 4 ? plus - 3 : plus + 1;
                  })
                }
              >
                <img src={next} alt=">" className="py-[10px] pl-[13px] pr-[10px] max-w-[100%] hover:fill-yellow-700" />
              </button>
            </div>
          <div
            className="imageDisplay"
            onClick={() => setShowProductOver(true)}
          >
            <img
              src={product01}
              alt="product01"
              id="product01"
              className=" min-h-full object-cover hover:scale-110"
            />
            <img
              src={product02}
              alt="product02"
              id="product02"
              className="min-h-full object-cover hover:scale-110"
            />
            <img
              src={product03}
              alt="product03"
              id="product03"
              className="min-h-full object-cover hover:scale-110"
            />
            <img
              src={product04}
              alt="product04"
              id="product04"
              className="min-h-full object-cover hover:scale-110"
            />
          </div>
        </div>
        <div className="imageButtonContainer">
          <div
            // href="#product01"
            onClick={() => {
              setProductDisplay(1);
              // document.getElementsByClassName("product01")[0].style
            }}
            className={`imageButton ${
              productDisplay == 1
                ? "border-[hsl(26,_100%,_55%)]"
                : "border-transparent"
            }`}
          >
            <img
              src={productThumb01}
              alt="productThumb01"
              className={`size-full ${
                productDisplay == 1
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50 duration-150"
              }`}
            />
          </div>

          <div
            // href="#product02"
            onClick={() => {
              setProductDisplay(2);
            }}
            className={`imageButton ${
              productDisplay == 2
                ? "border-[hsl(26,_100%,_55%)]"
                : "border-transparent"
            }`}
          >
            <img
              src={productThumb02}
              alt="productThumb01"
              className={`size-full ${
                productDisplay == 2
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50 duration-150"
              }`}
            />
          </div>

          <div
            // href="#product03"
            onClick={() => {
              setProductDisplay(3);
            }}
            className={`imageButton ${
              productDisplay == 3
                ? "border-[hsl(26,_100%,_55%)] duration-150"
                : "border-transparent duration-150"
            } `}
          >
            <img
              src={productThumb03}
              alt="productThumb03"
              className={`size-full ${
                productDisplay == 3
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50 duration-150"
              }`}
            />
          </div>
          <div
            // href="#product04"
            onClick={() => {
              setProductDisplay(4);
            }}
            className={`mr-0 imageButton ${
              productDisplay == 4
                ? "border-[hsl(26,_100%,_55%)]"
                : "border-transparent"
            }`}
          >
            <img
              src={productThumb04}
              alt="productThumb04"
              className={`size-full ${
                productDisplay == 4
                  ? "opacity-30 hover:opacity-30 duration-150"
                  : "hover:opacity-50"
              }`}
            />
          </div>
        </div>


        {/* Scroll left and right button default here */}
        <div className=" justify-center hidden">
          <button
            onClick={() =>
              setProductDisplay((minus) => {
                return minus == 1 ? minus + 3 : minus - 1;
              })
            }
          >
            <img src={previous} alt="<" className="mx-2 p-4 bg-slate-400" />
          </button>
          <button
            onClick={() =>
              setProductDisplay((plus) => {
                return plus == 4 ? plus - 3 : plus + 1;
              })
            }
          >
            <img src={next} alt=">" className="mx-2 p-4 bg-slate-400" />
          </button>
        </div>
        {/* Scroll left and right button default ends here */}
        {/* <div>{productDisplay}</div> */}
      </div>

      {/* Overflow Product Image Begins */}
      <div
        className={`sectionImage ${
          showProductOver ? "hidden sm:flex" : "hidden sm:hidden"
        }`}
      >
        <div className="sectionImageOver">
          <div className="flex justify-end mt-5">
            <img
              src={close}
              alt="X"
              onClick={() => setShowProductOver(false)}
              className=" brightness-[300%] hover:invert-[0.2] size-[6%] cursor-pointer"
            />
          </div>
          <div className="imageDisToolCont">
            <div className="flex justify-between w-full h-full absolute ">
              <button
                className="self-center -left-6 relative rounded-full overflow-hidden bg-white hover:invert-[100%] brightness-200"
                onClick={() =>
                  setProductDisplay((minus) => {
                    return minus == 1 ? minus + 3 : minus - 1;
                  })
                }
              >
                <img src={previous} alt="<" className="py-4 px-[18px]" />
              </button>
              <button
                className="self-center -right-6 relative rounded-full overflow-hidden bg-white hover:invert-[100%] brightness-200"
                onClick={() =>
                  setProductDisplay((plus) => {
                    return plus == 4 ? plus - 3 : plus + 1;
                  })
                }
              >
                <img src={next} alt=">" className="py-4 px-[18px] next" />
              </button>
            </div>
            <div className="imageDisplay">
              <img
                src={product01}
                alt="product01"
                id="mproduct01"
                className=" min-h-full object-cover"
              />
              <img
                src={product02}
                alt="product02"
                id="mproduct02"
                className="min-h-full object-cover"
              />
              <img
                src={product03}
                alt="product03"
                id="mproduct03"
                className="min-h-full object-cover"
              />
              <img
                src={product04}
                alt="product04"
                id="mproduct04"
                className="min-h-full object-cover"
              />
            </div>
          </div>
          <div className="imageButtonContainer">
            <div
              // href="#product01"
              onClick={() => {
                setProductDisplay(1);
                // document.getElementsByClassName("product01")[0].style
              }}
              className={` ml-6 imageButton ${
                productDisplay == 1
                  ? "border-[hsl(26,_100%,_55%)] bg-white duration-150"
                  : "hover:border-transparent bg-transparent hover:bg-white duration-150"
              }`}
            >
              <img
                src={productThumb01}
                alt="productThumb01"
                className={`size-full ${
                  productDisplay == 1
                    ? "opacity-30 hover:opacity-30 duration-150"
                    : "hover:opacity-50 duration-150"
                }`}
              />
            </div>

            <div
              // href="#product02"
              onClick={() => {
                setProductDisplay(2);
              }}
              className={`imageButton ${
                productDisplay == 2
                  ? "border-[hsl(26,_100%,_55%)] bg-white duration-150"
                  : "hover:border-transparent bg-transparent hover:bg-white duration-150"
              }`}
            >
              <img
                src={productThumb02}
                alt="productThumb01"
                className={`size-full ${
                  productDisplay == 2
                    ? "opacity-30 hover:opacity-30 duration-150"
                    : "hover:opacity-50 duration-150"
                }`}
              />
            </div>

            <div
              // href="#product03"
              onClick={() => {
                setProductDisplay(3);
              }}
              className={`imageButton ${
                productDisplay == 3
                  ? "border-[hsl(26,_100%,_55%)] bg-white duration-150"
                  : "hover:border-transparent hover:bg-white duration-150"
              } `}
            >
              <img
                src={productThumb03}
                alt="productThumb03"
                className={`size-full ${
                  productDisplay == 3
                    ? "opacity-30 hover:opacity-30 duration-150"
                    : "hover:opacity-50 duration-150"
                }`}
              />
            </div>
            <div
              // href="#product04"
              onClick={() => {
                setProductDisplay(4);
              }}
              className={`mr-6 imageButton ${
                productDisplay == 4
                  ? "border-[hsl(26,_100%,_55%)] bg-white duration-150"
                  : "hover:border-transparent bg-transparent hover:bg-white duration-150"
              }`}
            >
              <img
                src={productThumb04}
                alt="productThumb04"
                className={`size-full ${
                  productDisplay == 4
                    ? "opacity-30 hover:opacity-30 duration-150"
                    : "hover:opacity-50"
                }`}
              />
            </div>
          </div>

          {/* <div>{productDisplay}</div> */}
        </div>
      </div>
      {/* Overflow Product Image Ends */}
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

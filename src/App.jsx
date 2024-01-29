// import React from 'react'

import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  const [inputNumberCart, setInputNumberCart] = useState(localStorage.getItem("items"));
  return (
    <div className="mx-0 sm:mx-20 md:mx-32 lg:mx-36 font-KumbhSans">
      <Header inputNumberCart={inputNumberCart} setInputNumberCart={setInputNumberCart} />
      <hr className={`bg-[hsl(220,_14%,_75%)] hidden sm:block`}/>
      <Section setInputNumberCart={setInputNumberCart} />
    </div>
  )
}

export default App
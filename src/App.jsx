// import React from 'react'

import Header from "./components/Header";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="mx-0 sm:mx-20 md:mx-32 lg:mx-36 min-h-screen bg-slate-400">
      <Header />
      <hr className={`bg-[hsl(220,_14%,_75%)] hidden sm:block`}/>
      <Section />
    </div>
  )
}

export default App
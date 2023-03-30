import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Panier from "../panier/panier";

export default function Header() {
  const [show, setShow] = useState(false)

  return (
    <div className="h-full w-full absolute top-0 left-0">

      <div className="bg-transparent text-white w-full fixed top-0 md:h-16 flex flex-row items-center justify-between px-11 backdrop-blur z-30">
        <h2 className="text-choco text-4xl">Website</h2>
        <div className='rounded-3xl'>
          <Link to={`connect`} className='font-paragraph rounded-3xl border-2 border-white border-solid px-4 py-2 bg-brown hover:bg-milk hover:text-choco'>Se connecter</Link>
        </div>
      </div>

      <div className="fixed bottom-0 right-0 m-8">
        <button onClick={() => setShow(true) } className="bg-choco hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">
          🧺
        </button>
      </div>
      <Panier onClose={() => setShow(false)} show={show}/>
      
      <div className="h-full w-full">
        <Outlet/>
      </div>
    </div>
  )
}
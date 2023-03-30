import React from "react";
import { useContext, useState } from 'react'
import Carrousel from "./carrousel";
import { CartContext } from "../panier/cartContext";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetail(props) {
  const { addToCart } = useContext(CartContext);
  const [shirtCounter, setShirtCounter] = useState(1);

  const productData = useLocation();
  const data = productData.state;
  console.log(data)

  const back = useNavigate();
  const goingBack = () => {
    back(-1);
  }

  return (
    <div className="h-full lg:pt-12 sm:pt-9 bg-milk flex flex-col">
      <button onClick={goingBack} className="mt-10 mx-10 w-full flex justify-start text-xl font-paragraph text-coffee">⬅️ Revenir en arrière</button>
      <div className="bg-white h-3/4 rounded-lg flex flex-row items-center m-10 p-10">
        <div className="bg-[url('./assets/bg-tshirts.jpg')] bg-cover bg-center bg-no-repeat h-full w-1/2 rounded-lg"></div>
        <div className=" h-full w-full ml-5 flex flex-col justify-start items-start">
            <h3 className="font-title text-4xl text-choco">{data.title}</h3>
            <h6 className="font-paragraph text-lg mt-3">Description</h6>
            <p className="font-paragraph text-sm">description</p>
          <div className="mt-6 bg-choco p-4 rounded-lg">
            <div className='flex flex-row mt-2'>
              <button onClick={() => setShirtCounter((shirtCounter) => shirtCounter - 1)} className="flex justify-center items-center px-1 bg-latte border-2 border-white rounded-l-full" >-</button>
              <h4 className="bg-choco w-6 text-center">{shirtCounter}</h4>
              <button onClick={() => setShirtCounter((shirtCounter) => shirtCounter + 1)} className="flex justify-center items-center px-1 bg-latte border-2 border-white rounded-r-full" >+</button>
            </div>
            <button onClick={() => addToCart({ product: 'tshirt', quantity: shirtCounter })} type="button" className="text-xl text-milk font-paragraph rounded-3xl border-2 border-white border-solid px-4 py-2 bg-brown mt-3 hover:drop-shadow-md hover:bg-choco transition duration-300 ease-in-out">Ajouter au panier</button>
          </div>
        </div>
      </div>

      <div className="mx-10 mb-10">
        <h3 className="font-title text-choco text-2xl">Autres produits:</h3>
        {/* <Carrousel /> */}
      </div>
    </div>
  )
}

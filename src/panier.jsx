import React, { useContext } from 'react';
import { CartContext } from './panier/cartContext';
import { database } from './firebase/firebase'
import { collection, addDoc } from "firebase/firestore"; 

export default function Panier(props) {
  if (!props.show) {
    return null
  }
  const {myCart} = useContext(CartContext)

  async function buy(){
    try {
      const achatRef = await addDoc(collection(database, 'test'), {myCart});
      console.log("Document written with ID: ", achatRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div onClick={props.onClose} className='md:bg-modalbg w-full fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-50'>
      <div onClick={e => e.stopPropagation()} className='md:w-7/12 sm:w-full md:max-h-40 sm:h-full  bg-white rounded-xl flex flex-col items-center'>
        <div className='h-11 p-3 border-b-2 border-latte flex justify-center w-full'>
          <p className='font-title text-choco'>🤎 Mon panier 🤎</p>

        <button onClick={buy}>Acheter</button>

        </div>
        {
          myCart.map(product =>(
            <div className='border-b border-cream px-7 w-full'>
          {product.product} * {product.quantity}
        </div>
          ))
        }
        <button onClick={props.onClose} className='text-latte text-xs font-paragraph mt-2'>Fermer</button>
      </div>
    </div>
  );
}

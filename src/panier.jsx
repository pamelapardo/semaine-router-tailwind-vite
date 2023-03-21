import React from 'react';

export default function Panier(props) {
  if (!props.show) {
    return null
  }
  return (
    <div onClick={props.onClose} className='md:bg-modalbg w-full fixed top-0 right-0 left-0 bottom-0 flex justify-center items-center z-50'>
      <div onClick={e => e.stopPropagation()} className='md:w-7/12 sm:w-full md:max-h-40 sm:h-full  bg-white rounded-xl flex flex-col items-center'>
        <div className='h-11 p-3 border-b-2 border-latte flex justify-center w-full'>
          <p className='font-title text-choco'>🤎 Mon panier 🤎</p>
        </div>
        <div className='border-b border-cream px-7 w-full'>
          Liste de choses ajoutées
        </div>
        <div className='border-b border-cream px-7 w-full'>
          Liste de choses ajoutées
        </div>
        <div className='border-b border-cream px-7 w-full'>
          Liste de choses ajoutées
        </div>
        <button onClick={props.onClose} className='text-latte text-xs font-paragraph mt-2'>Fermer</button>
      </div>
    </div>
  );
}

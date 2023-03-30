import React from 'react';
import ProductContainer from './productContainer';
import { Link } from 'react-router-dom';

export const productData = [
  {icon: "👕", title: "T-shirt", description: "Lorem ipsun cette fois"},
  {icon: "👖", title: "Pants", description: "Amazing pants"},
  {icon: "🧥", title: "Vestes", description: "Amazing vestes"}
]



export default function Carrousel() {
  return (
    <div className=" w-full overflow-auto flex flex-row flex-nowrap items-center lg:gap-10 sm:gap-6 my-7">
        {
          productData.map((productSrc, index) => {
            return <Link to="product_Detail" state={productData}><ProductContainer
              key={index}
              icon={productSrc.icon}
              title={productSrc.title}
              description={productSrc.description}
            />
            </Link>
          })
        }






      {/* <div className="flex flex-col items-center my-7">
        <Link to="product_info" className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:lg:text-6xl transition ease-in-out duration-300">👕</Link>
        <h3 className="text-brown mt-1">T-Shirts</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">👖</Link>
        <h3 className="text-brown mt-1">Pantalons</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🧥</Link>
        <h3 className="text-brown mt-1">Vestes</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🩳</Link>
        <h3 className="text-brown mt-1">Shorts</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">👟</Link>
        <h3 className="text-brown mt-1">Chaussures</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🧢</Link>
        <h3 className="text-brown mt-1">Bonnets</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">💍</Link>
        <h3 className="text-brown mt-1">Bijoux</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">👦🏼</Link>
        <h3 className="text-brown mt-1">Enfants</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🏠</Link>
        <h3 className="text-brown mt-1">Maison</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🪴</Link>
        <h3 className="text-brown mt-1">Jardin</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🎁</Link>
        <h3 className="text-brown mt-1">Cadeaux</h3>
      </div>
      <div className="flex flex-col items-center my-7">
        <Link to={`product_info`} className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:text-6xl transition ease-in-out duration-300">🥳</Link>
        <h3 className="text-brown mt-1">Fêtes</h3>
      </div> */}
    </div>
  );
}
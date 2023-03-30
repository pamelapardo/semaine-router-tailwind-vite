import React from "react";
import { Link } from 'react-router-dom'

export default function ProductContainer(props) {
  return(
    <div className="items-center overflow-auto flex flex-row">
      <div className="flex flex-col items-center">
        <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16 sm:h-12 sm:w-12 flex items-center justify-center md:text-4xl lg:text-5xl sm:text-4xl hover:lg:text-6xl transition ease-in-out duration-300">
          {props.icon}</div>
        <h3 className="text-brown mt-1">{props.title}</h3>
      </div>
    </div>
  )
}
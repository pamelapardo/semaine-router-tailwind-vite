import { useState, useEffect } from 'react'
import { database } from './firebase/firebase'
import { collection, addDoc } from "firebase/firestore"; 

function App() {
  useEffect(() => {
    addAchat()
  },[]
  )
  const addAchat = async (collectionName, achatData) => {
    try {
      const achatRef = await addDoc(collection(database, collectionName), achatData);
      console.log("Document written with ID: ", achatRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const [count, setCount] = useState(1)

  return (
    <div className="bg-milk w-full h-full">
      <div className="m-10 overflow-hidden">
        {/* Hero */}
        <div className="mt-11">
          <div className="bg-choco text-white flex flex-col justify-center items-start rounded-lg h-96 bg-[url('./assets/hero-bg.png')] md:bg-no-repeat md:bg-right sm:bg-center">
            <h1 className='font-title text-6xl md:text-latte sm:text-choco ml-12 drop-shadow-lg'>Vetêments en ligne</h1>
            <h2 className='font-title text-2xl md:text-latte sm:text-choco ml-12 drop-shadow-lg'>Mais pas que des vetêments...</h2>
            <p className='md:text-latte sm:text-choco font-paragraph ml-12 drop-shadow-lg mt-9'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>


        {/* Carrousel de liens */}
        <div className=" w-full overflow-auto flex flex-row flex-nowrap gap-12 ">
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">👕</div>
            <h3 className="text-brown mt-1">T-Shirts</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">👖</div>
            <h3 className="text-brown mt-1">Pantalons</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🧥</div>
            <h3 className="text-brown mt-1">Vestes</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🩳</div>
            <h3 className="text-brown mt-1">Shorts</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">👟</div>
            <h3 className="text-brown mt-1">Chaussures</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🧢</div>
            <h3 className="text-brown mt-1">Bonnets</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">💍</div>
            <h3 className="text-brown mt-1">Bijoux</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">👦🏼</div>
            <h3 className="text-brown mt-1">Enfants</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🏠</div>
            <h3 className="text-brown mt-1">Maison</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🪴</div>
            <h3 className="text-brown mt-1">Jardin</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🎁</div>
            <h3 className="text-brown mt-1">Cadeaux</h3>
          </div>
          <div className="flex flex-col items-center my-7">
            <div className="bg-latte hover:bg-cream rounded-full lg:h-24 lg:w-24 md:h-16 md:w-16  flex items-center justify-center md:text-4xl lg:text-5xl">🥳</div>
            <h3 className="text-brown mt-1">Fêtes</h3>
          </div>

        </div>


        {/* Grid des elements */}
        <div>
          <div className="flex flex-row justify-between gap-5">
            <div className="bg-coffee text-white rounded-lg h-48 mb-5 md:basis-[75%] sm:basis-[50%] bg-[url('./assets/bg-tshirts.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="bg-coffee hover:bg-brown transition duration-1000 ease-in-out text-white rounded-lg h-48 mb-5 md:basis-[25%] sm:basis-[50%] flex flex-col justify-center items-center">
              <h3 className="font-title text-5xl text-milk">T-Shirts</h3>
              <div className='flex flex-row mt-2'>
                <button className="flex justify-center items-center px-1 bg-latte border-2 border-white rounded-l-full" onClick={() => setCount((count) => count + 1)}>+</button>
                <h4 className="bg-choco px-2">{count}</h4>
                <button className="flex justify-center items-center px-1 bg-latte border-2 border-white rounded-r-full" onClick={() => setCount((count) => count - 1)}>-</button>
              </div>
              <button onClick={() => addAchat( 'achats', {product: 'nada', quantity: '9'})} type="button" className="text-xl text-milk font-paragraph rounded-3xl border-2 border-white border-solid px-4 py-2 bg-brown mt-3 hover:drop-shadow-md hover:bg-choco transition duration-300 ease-in-out">Acheter</button>
            </div>
          </div>

          <div className="flex flex-row justify-between gap-5">
            <div className="bg-coffee hover:bg-brown transition duration-1000 ease-in-out text-white rounded-lg h-48 mb-5 md:basis-[25%] sm:basis-[50%] flex flex-col justify-center items-center">
              <h3 className="font-title text-5xl text-milk mb-3">Jardin</h3>
              <button type="button" className="text-xl text-milk font-paragraph rounded-3xl border-2 border-white border-solid px-4 py-2 bg-brown hover:drop-shadow-md hover:bg-choco transition duration-300 ease-in-out">Voir plus</button>
            </div>
            <div className="bg-coffee text-white rounded-lg h-48 mb-5 md:basis-[75%] sm:basis-[50%] bg-[url('./assets/bg-jardin.jpg')] bg-cover bg-center bg-no-repeat"></div>
          </div>
          
          <div className="flex flex-row justify-between gap-5">
            <div className="bg-coffee text-white rounded-lg h-48 mb-5 md:basis-[75%] sm:basis-[50%] bg-[url('./assets/bg-bijoux.jpg')] bg-cover bg-center bg-no-repeat"></div>
            <div className="bg-coffee hover:bg-brown transition duration-1000 ease-in-out text-white rounded-lg h-48 mb-5 md:basis-[25%] sm:basis-[50%] flex flex-col justify-center items-center">
              <h3 className="font-title text-5xl text-milk mb-3">Bijoux</h3>
              <button type="button" className="text-xl text-milk font-paragraph rounded-3xl border-2 border-white border-solid px-4 py-2 bg-brown hover:drop-shadow-md hover:bg-choco transition duration-300 ease-in-out">Voir plus</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default App

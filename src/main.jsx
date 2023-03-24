import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import App from "./App"
import Connect from './connect';
import CartContextProvider from './panier/cartContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/",
        element: <App/>
      },
      {
        path: "connect",
        element: <Connect/>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
    <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>,
)

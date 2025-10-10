import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Nav from './App.jsx'
import Error from './errorElement.jsx';
import ProductCatalogue from "./Products"
import Cart from './Cart.jsx';
import {CartProvider} from './CartContext.jsx';


const route = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <Error />,
  },
  {
    path:"/products",
    element: <ProductCatalogue />
  },
  {
    path:'/cart',
    element:<Cart />
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < CartProvider>
      <RouterProvider router = {route} />
    </CartProvider>
  </StrictMode>,
)

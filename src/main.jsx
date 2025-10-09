import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Nav from './App.jsx'
import Error from './errorElement.jsx';
import ProductCatalogue from "./Products"


const route = createBrowserRouter([
  {
    path: '/',
    element: <Nav />,
    errorElement: <Error />,
  },
  {
    path:"/products",
    element: <ProductCatalogue />
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {route} />
  </StrictMode>,
)

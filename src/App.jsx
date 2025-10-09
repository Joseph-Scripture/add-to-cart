import { useState} from 'react'
import { Link } from 'react-router'
import Hamburger from './hamburger'

import  './App.css'

function Nav() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav>
        <Hamburger isOpen = {isOpen} setIsOpen = {setOpen} />
      
        <div className='links'>
          <div className='homeLink'>
            <Link to = "/">Home</Link>


          </div>
          <div className='nextLinks'>
            <Link to="/products">Products</Link>
            <Link to = "/about">About</Link>
            <Link to = "/cart">Cart</Link>

          </div>
          
        </div>
        <div className='text'>
          <h1>Welcome To supreme shopping</h1>
          <p className = 'paragraph'  style = {{
            color:'navy'
          }}>Where taste meets inspiration and unique designs</p>
          <Link to = "/products" className = 'action'>Shop Now &#8594;</Link>
        </div>
      </nav>
    </>
  )




}

export default Nav

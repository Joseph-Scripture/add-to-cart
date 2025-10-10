import { useState} from 'react'
import { Link } from 'react-router'
import Hamburger from './hamburger'
import HomeText from './HomeText.jsx'

import  './Nav.css'

function Nav({showHomeText = true}) {
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
       
      </nav>
      {showHomeText && <HomeText />}
    </>
  )




}

export default Nav

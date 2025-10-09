import {Link} from 'react-router'
import styles from './hamburge.module.css'

const Hamburger = ({isOpen, setIsOpen}) => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.show}>
            <div className="button">
                 <button className = {styles.icon} onClick = {() => setIsOpen(!isOpen)} >
                    <i className="fa-solid fa-bars"></i>
                
             </button>
             
            </div>
            <div className="name">
             <Link to = '/'>supreme</Link>


            </div>

            </div>
        
            <div className="mobile-links">
                {isOpen && ( 

                <div className={styles.mobileNextLinks}>
                    <Link to = '/products'>Products</Link>
                    <Link to = '/about'>About</Link>
                    
                    <Link to = '/cart'>Cart</Link>
                </div>
                )}

            </div>

        </div>
     
    </>
   
  )
}

export default Hamburger
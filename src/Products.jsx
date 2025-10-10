import { useState, useEffect } from 'react';
import {Link } from 'react-router'
import { useCart } from './CartContext.jsx';
import Nav from './Nav.jsx'
document.body.style.backgroundColor = '#D78FEE'

import  './products.css'
document.body.style.backgroundImage = 'none';
const ProductCatalogue = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products', { mode: 'cors' })
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("Server Error! Try again later.");
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className='spinner'></div>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <>
          
            <Nav showHomeText = {false}/>
            <div className="product-catalogue">
                <ul className="product-list">
                    {products.map((product) => (
                        <>
                            <li key={product.id} className="product-item">
                            
                                <img src={product.image} alt={product.title} className="product-image" />
                                <h3>{product.title}</h3>
                                <div className="bottom">
                                    <p>${product.price}</p>

                                    <button onClick={() => addToCart(product)} className="add-to-cart">
                                        <span>Add to Cart</span>
                                    </button>
                                    

                                </div>
                               
                            </li>
                        
                        </>
                            
                    ))}
                </ul>
                
            </div>
            
    </>
    );
};

export default ProductCatalogue;
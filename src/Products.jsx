import { useState, useEffect } from 'react';
import {Link } from 'react-router'
document.body.style.backgroundColor = '#F4E9D7'

import  './products.css'
document.body.style.backgroundImage = 'none';
const ProductCatalogue = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
            <div className="product-catalogue">
                <ul className="product-list">
                    {products.map((product) => (
                        <>
                            <li key={product.id} className="product-item">
                            
                                <img src={product.image} alt={product.title} className="product-image" />
                                <h3>{product.title}</h3>
                                <div className="bottom">
                                    <p>${product.price}</p>

                                    <button>
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
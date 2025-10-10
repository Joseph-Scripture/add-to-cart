import { useCart } from './CartContext.jsx';
import './cart.css';

const Cart = () => {
  // Destructure both cartItems and removeFromCart
  const { cartItems, removeFromCart } = useCart();
  
  // Calculate total price with quantities
  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div className="cart-container">
      <header className="cart-header">
        <h2>Shopping Cart ({cartItems.length})</h2>
      </header>
      
      {cartItems.length > 0 ? (
        <div className="cart-content">
          <div className="cart-items-grid">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item-card">
                <div className="item-image-container">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="item-image"
                    onError={(e) => e.target.src = '/placeholder-image.jpg'}
                  />
                </div>
                
                <div className="item-info">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-description">
                    {item.description?.substring(0, 100) || 'No description available'}...
                  </p>
                  
                  <div className="item-quantity-controls">
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                      disabled={(item.quantity || 1) <= 1}
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity || 1}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                    >
                      +
                    </button>
                  </div>
                  
                  <div className="item-price">
                    ${(item.price * (item.quantity || 1)).toFixed(2)}
                  </div>
                </div>
                
                <div className="item-actions">
                  <button 
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary">
            <div className="summary-details">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row total-row">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <button className="checkout-button">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          
          <p>Your cart is empty</p>
          <a href="/products" className="continue-shopping">Continue Shopping</a>
        </div>
      )}
    </div>
  );
};

export default Cart;

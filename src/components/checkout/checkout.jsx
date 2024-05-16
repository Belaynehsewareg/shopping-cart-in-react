import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import "./checkout.css"; // Create this file for styling

const Checkout = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="checkout-container">
      <div className="checkout-items">
        <h1>Checkout</h1>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return (
              <div key={product.id} className="checkout-item">
                <img src={product.productImage} alt={product.productName} />
                <div className="checkout-item-details">
                  <p>{product.productName}</p>
                  <p>Quantity: {cartItems[product.id]}</p>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            );
          }
        })}
        <div className="checkout-total">
          <h2>Total: ${totalAmount}</h2>
        </div>
      </div>

      <div className="checkout-form">
        <h2>Shipping Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="card">Credit Card:</label>
            <input type="text" id="card" name="card" required />
          </div>
          <button type="submit" onClick={checkout}>
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;

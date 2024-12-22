import React, { Component } from "react";
import product from "../utils/images/product.png";

class Product extends Component {
  handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent event bubbling

    const { addToCart } = this.props; // Receive addToCart here as a prop

    if (addToCart) {
      // Ensure the function exists before calling
      const product = {
        name: "Product Name", // Use appropriate product name
        price: 300, // Use appropriate product price
      };
      addToCart(product); // Call the function passed as prop
    } else {
      console.error("addToCart function is not available");
    }
  };

  render() {
    return (
      <div className="card">
        <img src={product} alt="product" />
        <span>10688</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id nisi
          faucibus vitae odio. Amet mauris convallis amet, id sed.
        </p>
        <div className="rate">{/* Rating SVGs */}</div>
        <h2 className="price">300 EGP</h2>
        <div className="add-cart">
          <button onClick={this.handleAddToCart}>Add to Cart</button>
          <button className="love">
            <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
              <rect fill="none" height="256" width="256" />
              <path
                d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                fill="none"
                stroke="#000"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="8"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;

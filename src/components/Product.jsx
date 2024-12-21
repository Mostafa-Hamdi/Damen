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
        </div>
      </div>
    );
  }
}

export default Product;

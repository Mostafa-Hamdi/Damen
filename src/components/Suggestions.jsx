import React, { Component } from "react";
import Product from "./Product";

class Suggestions extends Component {
  render() {
    const { addToCart } = this.props; // Make sure addToCart is being received here

    return (
      <section className="suggestions">
        <h2>you may also like</h2>
        <p>
          *Note for the developer: Don’t forget to make this section as a slider
        </p>
        <div className="grid-container">
          <Product addToCart={addToCart} />
          <Product addToCart={addToCart} />
          <Product addToCart={addToCart} />
          <Product addToCart={addToCart} />
        </div>
      </section>
    );
  }
}

export default Suggestions;

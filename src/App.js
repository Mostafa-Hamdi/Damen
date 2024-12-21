import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Suggestions from "./components/Suggestions";
import Breadcrump from "./components/Breadcrump";
import ProductDetails from "./components/ProductDetails";
import Contact from "./pages/contact/Contact";
import BestSeller from "./pages/best seller/BestSeller";
import NewArrival from "./pages/new arrival/NewArrival";
import Products from "./pages/products/Products";
import "./style.scss";
import LoadingScreen from "./loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      isLoading: true, // Track whether the app is loading
    };
  }

  componentDidMount() {
    // Simulate loading delay (e.g., 2 seconds)
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  addToCart = (product) => {
    this.setState((prevState) => {
      const existingProductIndex = prevState.cartItems.findIndex(
        (item) => item.name === product.name,
      );

      if (existingProductIndex >= 0) {
        const updatedCartItems = prevState.cartItems.map((item, index) => {
          if (index === existingProductIndex) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        return { cartItems: updatedCartItems };
      } else {
        const newProduct = { ...product, quantity: 1 };
        return {
          cartItems: [...prevState.cartItems, newProduct],
        };
      }
    });
  };

  render() {
    const { cartItems, isLoading } = this.state;

    if (isLoading) {
      return <LoadingScreen />;
    }

    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0,
    );

    return (
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header cartItems={cartItems} totalQuantity={totalQuantity} />
                  <Breadcrump />
                  <ProductDetails />
                  <Suggestions addToCart={this.addToCart} />
                </>
              }
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bestSeller" element={<BestSeller />} />
            <Route path="/newArrival" element={<NewArrival />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;

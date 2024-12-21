import React, { Component } from "react";
import logo from "../utils/images/logo.png";
import search from "../utils/images/search.png";
import cart from "../utils/images/cart.png";
import profile from "../utils/images/profile.png";
import contact from "../utils/images/contact.png";
import bestSeller from "../utils/images/best-seller.png";
import product from "../utils/images/product.png";
import products from "../utils/images/products.png";
import newArrival from "../utils/images/new-arrivals.png";
import productImage from "../utils/images/productImage.png";

class Header extends Component {
  componentDidMount() {
    if (window.innerWidth < 992) {
      this.toggleMenu = document.querySelector(".toggle-menu");
      this.nav = document.querySelector("nav");

      if (this.toggleMenu && this.nav) {
        this.toggleMenu.addEventListener("click", this.handleToggleMenu);
      }
    }

    this.cartIcon = document.querySelector(".icon.cart");
    if (this.cartIcon) {
      this.cartIcon.addEventListener("click", this.handleCartBadge);
    }

    this.cartItems = document.querySelector(".cart-items");
    if (this.cartItems) {
      this.cartItems.addEventListener("click", this.handleCloseCart);
    }
  }

  componentWillUnmount() {
    if (this.toggleMenu) {
      this.toggleMenu.removeEventListener("click", this.handleToggleMenu);
    }

    if (this.cartIcon) {
      this.cartIcon.removeEventListener("click", this.handleCartBadge);
    }

    if (this.cartItems) {
      this.cartItems.removeEventListener("click", this.handleCloseCart);
    }
  }

  handleToggleMenu = (e) => {
    e.stopPropagation();

    if (this.toggleMenu && this.nav) {
      this.toggleMenu.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    }
  };

  handleCartBadge = () => {
    document.querySelector(".cart-items").classList.toggle("open");
    document.querySelector(".overlay").classList.toggle("open");
  };

  handleCloseCart = (e) => {
    // Check if the clicked element is the close button
    if (e.target.closest(".close")) {
      // Prevent event propagation to avoid triggering any other clicks
      e.stopPropagation();

      // Remove the 'open' class from cart items and overlay when the close button is clicked
      document.querySelector(".cart-items").classList.remove("open");
      document.querySelector(".overlay").classList.remove("open");
    }
  };

  render() {
    const { cartItems } = this.props;

    const totalQuantity = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0,
    );

    return (
      <>
        <header>
          <div className="flex-center">
            <svg
              className="toggle-menu"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M31.1 128H416C433.7 128 448 113.7 448 96S433.7 64 416 64H31.1C14.33 64 0 78.33 0 95.1S14.33 128 31.1 128zM480 224H95.1C78.33 224 64 238.3 64 256s14.33 32 31.1 32h384C497.7 288 512 273.7 512 256S497.7 224 480 224zM416 384H31.1C14.33 384 0 398.3 0 415.1S14.33 448 31.1 448H416C433.7 448 448 433.7 448 416S433.7 384 416 384z" />
            </svg>
            <img src={logo} alt="logo" />
            <nav>
              <ul className="links">
                <li>
                  <img src={products} alt="products" />
                  <a href="/products">products</a>
                </li>
                <li>
                  <img src={bestSeller} alt="bestSeller" />
                  <a href="/bestSeller">Best seller</a>
                </li>
                <li>
                  <img src={newArrival} alt="newArrival" />
                  <a href="/newArrival">new arrival</a>
                </li>
                <li>
                  <img src={contact} alt="contact" />
                  <a href="/contact">contact us</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icons flex-center">
            <div className="icon">
              <img src={search} alt="search" />
            </div>
            <div className="icon cart">
              <img src={cart} alt="cart" />
              <span className="cart-count">
                {totalQuantity > 0 ? totalQuantity : "0"}
              </span>
            </div>
            <div className="icon">
              <img src={profile} alt="profile" />
            </div>
          </div>
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p className="empty-cart">
                Your cart is empty.
                <div className="close">
                  <svg
                    className="feather feather-x"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="18" x2="6" y1="6" y2="18" />
                    <line x1="6" x2="18" y1="6" y2="18" />
                  </svg>
                </div>
              </p>
            ) : (
              <div className="flex">
                <div className="heading">
                  <h3>my cart (4)</h3>
                  <div className="close">
                    <svg
                      className="feather feather-x"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="18" x2="6" y1="6" y2="18" />
                      <line x1="6" x2="18" y1="6" y2="18" />
                    </svg>
                  </div>
                </div>
                <div className="product">
                  <img src={productImage} alt="" />
                  <div className="text">
                    <h4>name of product</h4>
                    <h5>400 EGP</h5>
                  </div>
                  <div className="delete">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1426_90)">
                        <path
                          d="M21 6.47998C17.67 6.14998 14.32 5.97998 10.98 5.97998C8.99622 5.98017 7.01371 6.0803 5.04 6.27998L3 6.47998"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 5.47L8.72 4.16C8.88 3.21 9 2.5 10.69 2.5H13.31C15 2.5 15.13 3.25 15.28 4.17L15.5 5.47"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8499 9.64001L18.1999 19.71C18.0899 21.28 17.9999 22.5 15.2099 22.5H8.7899C5.9999 22.5 5.9099 21.28 5.7999 19.71L5.1499 9.64001"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.3301 17H13.6601"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 13H14.5"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1426_90">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="product">
                  <img src={product} alt="" />
                  <div className="text">
                    <h4>name of product</h4>
                    <h5>400 EGP</h5>
                  </div>
                  <div className="delete">
                    <svg
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1426_90)">
                        <path
                          d="M21 6.47998C17.67 6.14998 14.32 5.97998 10.98 5.97998C8.99622 5.98017 7.01371 6.0803 5.04 6.27998L3 6.47998"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.5 5.47L8.72 4.16C8.88 3.21 9 2.5 10.69 2.5H13.31C15 2.5 15.13 3.25 15.28 4.17L15.5 5.47"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18.8499 9.64001L18.1999 19.71C18.0899 21.28 17.9999 22.5 15.2099 22.5H8.7899C5.9999 22.5 5.9099 21.28 5.7999 19.71L5.1499 9.64001"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.3301 17H13.6601"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.5 13H14.5"
                          stroke="#FF0000"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1426_90">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0 0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>

                <div className="total">
                  <span className="title">sub total</span>
                  <span className="number">800 EGP</span>
                </div>
                <div className="checkout">go to cart</div>
              </div>
            )}
          </div>
        </header>
        <div className="overlay"></div>
      </>
    );
  }
}

export default Header;

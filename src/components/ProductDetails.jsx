import React, { Component } from "react";
import productDetails from "../utils/images/productDetails.png";
class ProductDetails extends Component {
  render() {
    return (
      <div className="product-details">
        <img src={productDetails} alt="product" />
        {/* <img src={productDetails} alt="product" /> */}
        <div className="description">
          <h2>name of product</h2>
          <div className="rate">
            <svg
              fill="#FEB801"
              height="512px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="448,208 301,208 256,64 211,208 64,208 183.1,297.3 136,448 256,352 376,448 328.9,297.3" />
            </svg>
            <svg
              fill="#FEB801"
              height="512px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="448,208 301,208 256,64 211,208 64,208 183.1,297.3 136,448 256,352 376,448 328.9,297.3" />
            </svg>
            <svg
              fill="#FEB801"
              height="512px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="448,208 301,208 256,64 211,208 64,208 183.1,297.3 136,448 256,352 376,448 328.9,297.3" />
            </svg>
            <svg
              fill="#FEB801"
              height="512px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="448,208 301,208 256,64 211,208 64,208 183.1,297.3 136,448 256,352 376,448 328.9,297.3" />
            </svg>
            <svg
              fill="#FEB801"
              height="512px"
              id="Layer_1"
              style={{ enableBackground: "new 0 0 512 512" }}
              version="1.1"
              viewBox="0 0 512 512"
              width="512px"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <polygon points="448,208 301,208 256,64 211,208 64,208 183.1,297.3 136,448 256,352 376,448 328.9,297.3" />
            </svg>
          </div>
          <div className="price container">
            <span className="price">3000 EP</span>
            <span className="instead-price">3560 EGP</span>
          </div>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley
          </p>
          <div className="buy-now">
            <div className="quantity">
              <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                <rect fill="none" height="256" width="256" />
                <path d="M216,136H40a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z" />
              </svg>
              <span className="number">1</span>
              <svg
                height={"16px"}
                id="Layer_1"
                style={{ enableBackground: "new 0 0 32 32" }}
                version="1.1"
                viewBox="0 0 32 32"
                width={"16px"}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z"
                  //   fill={color}
                />
              </svg>
            </div>
            <button className="buy">Buy Now</button>
          </div>
          <div className="actions">
            <button>
              <svg
                height="45px"
                id="Layer_1"
                style={{ enableBackground: "new 0 0 512 512" }}
                version="1.1"
                viewBox="0 0 512 512"
                width="45px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M340.8,98.4c50.7,0,91.9,41.3,91.9,92.3c0,26.2-10.9,49.8-28.3,66.6L256,407.1L105,254.6c-15.8-16.6-25.6-39.1-25.6-63.9  c0-51,41.1-92.3,91.9-92.3c38.2,0,70.9,23.4,84.8,56.8C269.8,121.9,302.6,98.4,340.8,98.4 M340.8,83C307,83,276,98.8,256,124.8  c-20-26-51-41.8-84.8-41.8C112.1,83,64,131.3,64,190.7c0,27.9,10.6,54.4,29.9,74.6L245.1,418l10.9,11l10.9-11l148.3-149.8  c21-20.3,32.8-47.9,32.8-77.5C448,131.3,399.9,83,340.8,83L340.8,83z"
                  fill="#707070"
                />
              </svg>
              add to wishlist
            </button>
            <button>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                width={"16px"}
              >
                <g data-name="Layer 51" id="Layer_51">
                  <path
                    d="M2,29A1.12,1.12,0,0,1,1.69,29,1,1,0,0,1,1,28V27A19,19,0,0,1,17,8.24V4a1,1,0,0,1,1.6-.8l12,9a1,1,0,0,1,0,1.6l-12,9A1,1,0,0,1,17,22V18.25A18.66,18.66,0,0,0,4.93,25.67L2.81,28.59A1,1,0,0,1,2,29ZM19,6V9.12a1,1,0,0,1-.89,1,17,17,0,0,0-15,14.6l.16-.21A20.68,20.68,0,0,1,17.9,16.11a1,1,0,0,1,.77.26,1,1,0,0,1,.33.74V20l9.33-7Z"
                    fill="#707070"
                  />
                </g>
              </svg>
              share
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;

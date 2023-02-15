import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import products from "@data/products";
import empty_img from "@assets/img/product/cartmini/empty-cart.png";
import SingleCartItem from "./single-cart-item";

// cart items
const cart_items = products.slice(0, 3);

const CartSidebar = ({ isCartOpen, setIsCartOpen }) => {
  return (
    <React.Fragment>
      <div className={`cartmini__area ${isCartOpen ? "cartmini-opened" : ""}`}>
        <div className="cartmini__wrapper d-flex justify-content-between flex-column">
          <div className="cartmini__top-wrapper ">
            <div className="cartmini__top p-relative">
              <div className="cartmini__title">
                <h4>Shopping cart</h4>
              </div>
              <div className="cartmini__close">
                <button
                  onClick={() => setIsCartOpen(false)}
                  type="button"
                  className="cartmini__close-btn cartmini-close-btn"
                >
                  <i className="fal fa-times"></i>
                </button>
              </div>
            </div>
            <div className="cartmini__widget">
              {cart_items.map((item, i) => (
                <SingleCartItem key={i} {...item} />
              ))}
            </div>
            {/* <!-- if no item in cart --> */}
            <div className="cartmini__empty text-center d-none">
              <Image src={empty_img} alt="empty img" />
              <p>Your Cart is empty</p>
              <Link href="/shop" className="tp-btn">
                Go to Shop
              </Link>
            </div>
          </div>
          <div className="cartmini__checkout">
            <div className="cartmini__checkout-title mb-30">
              <h4>Subtotal:</h4>
              <span>$113.00</span>
            </div>
            <div className="cartmini__checkout-btn">
              <Link href="/cart" className="tp-btn mb-10 w-100">
                <span></span> view cart
              </Link>
              <Link href="/checkout" className="tp-btn-border w-100">
                <span></span> checkout
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* overlay */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`body-overlay ${isCartOpen ? "opened" : ""}`}
      ></div>
    </React.Fragment>
  );
};

export default CartSidebar;

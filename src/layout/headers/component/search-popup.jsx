import React from "react";
import Image from "next/image";
import Link from "next/link";
// internal
import { Close, Search } from "@svg/index";
import logo from "@assets/img/logo/logo.svg";

const SearchPopup = ({ isSearchOpen, setIsSearchOpen }) => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={`search__popup ${isSearchOpen ? "search-opened" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="search__wrapper">
              <div className="search__top d-flex justify-content-between align-items-center">
                <div className="search__logo">
                  <Link href="/">
                    <Image src={logo} alt="image" />
                  </Link>
                </div>
                <div
                  className="search__close"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <button
                    type="button"
                    className="search__close-btn search-close-btn"
                  >
                    <Close />
                  </button>
                </div>
              </div>
              <div className="search__form">
                <form onSubmit={handleSubmit}>
                  <div className="search__input">
                    <input
                      className="search-input-field"
                      type="text"
                      placeholder="Type here to search..."
                    />
                    <span className="search-focus-border"></span>
                    <button type="submit">
                      <Search />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;

import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__navOption">
          <span className="header__navOptionLineOne">Hello</span>
          <span className="header__navOptionLineTwo">Sign In</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Return</span>
          <span className="header__navOptionLineTwo">& Order</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>

        <div className="header__navOptionBasket">
          <ShoppingBasketIcon />
          <span className="header__navOptionLineTwo header__basketCount">
            0
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;

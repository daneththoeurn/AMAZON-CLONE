import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./CheckOut/StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__navOption">
            <span className="header__navOptionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__navOptionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Return</span>
          <span className="header__navOptionLineTwo">& Order</span>
        </div>

        <div className="header__navOption">
          <span className="header__navOptionLineOne">Your</span>
          <span className="header__navOptionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__navOptionBasket">
            <ShoppingBasketIcon />
            <span className="header__navOptionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

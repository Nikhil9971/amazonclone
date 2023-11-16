import React from "react";
import "./Header.css";
import logo from "../../images/amazonlogo4.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="amazon-logo"></img>
      </Link>
      <div className="header_search">
        <input className="header_searchInput"></input>
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionOne">Hello</span>
            <span className="header_optionTwo">
              {user ? "sign Out" : "sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        {/* <Link to="/checkout">
          <div className="header_optionBasket">
            <span className="header_optionTwo header_basketCount">0</span>
            <img src={cartIcon} className="cartIcon" />
          </div>
        </Link> */}
      </div>
    </div>
  );
};

export default Header;

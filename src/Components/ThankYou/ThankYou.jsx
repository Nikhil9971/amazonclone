import React from "react";
import "./ThankYou.css";
import img from "../../images/thankyou.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

const ThankYou = () => {
  const [state, dispatch] = useStateValue();

  const emptyBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };
  return (
    <div className="thankyou">
      <img src={img} alt="thank-you" />
      <Link to="/">
        <button onClick={emptyBasket}>Continue Shopping</button>
      </Link>
    </div>
  );
};

export default ThankYou;

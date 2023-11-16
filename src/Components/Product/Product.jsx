import React from "react";
import "./Product.css";
import { useStateValue } from "../../StateProvider";
// ⭐ ₹
// import prod1 from "../../prod1.jpg";

const Product = ({ id, title, image, price, rating }) => {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>₹ </small>
          <strong>{price}</strong>
        </p>
        <p className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </p>
      </div>
      <img src={image} alt="item-icon" />
      <button className="addtocartbtn" onClick={addToBasket}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;

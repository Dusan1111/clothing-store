// import "./App.css";
import "./CheckoutItem.scss";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const clearItemFromCartHandler = () => clearItemFromCart(cartItem);
  const incrementCartItemHandler = () => addItemToCart(cartItem);
  const decrementCartItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"></span>
      <span className="price">{price}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementCartItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>{" "}
        <div className="arrow" onClick={incrementCartItemHandler}>
          &#10095;
        </div>
      </span>

      <span className="remove-button" onClick={clearItemFromCartHandler}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;

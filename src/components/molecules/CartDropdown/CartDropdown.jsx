import "./CartDropdown.scss";
import Button from "../../atoms/Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};
export default CartDropdown;

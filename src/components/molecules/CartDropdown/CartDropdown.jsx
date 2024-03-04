import "./CartDropdown.scss";
import Button from "../../atoms/Button/Button";
import CartItem from "../CartItem/CartItem";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item}></CartItem>
        ))}
        <Button>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
};
export default CartDropdown;

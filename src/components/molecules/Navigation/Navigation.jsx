// import "./App.css";
import "./Navigation.scss";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg";
import "./Navigation.scss";

import { useContext } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../atoms/CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/CartDropdown";
import { UserContext } from "../../../context/UserContext";
import { CartContext } from "../../../context/CartContext";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              Login
            </Link>
          )}
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet></Outlet>
    </Fragment>
  );
};
export default Navigation;

import "./Authentication.scss";
import SignUp from "../../molecules/Register/SignUp";
import Login from "../../molecules/Login/Login";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <Login></Login>
      <SignUp></SignUp>
    </div>
  );
};

export default Authentication;

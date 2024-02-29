import "./Login.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";

const Login = () => {
  const login = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = createUserDocumentFromAuth(user);
  };
  return (
    <div className="page-wrapper">
      <div className="login-container">
        <h1> Login </h1>
        <button onClick={login}>Signin with google</button>
      </div>
    </div>
  );
};

export default Login;

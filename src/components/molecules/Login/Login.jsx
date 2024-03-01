import "./Login.scss";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import Button from "../../atoms/Button/Button";
import FormInput from "../../atoms/FormInput/FormInput";
import { useState } from "react";

const defualtFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Login = () => {
  const [formFields, setFormFields] = useState(defualtFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defualtFormFields);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        createUserDocumentFromAuth(response.user);
      }
    };

    fetchData();
  }, []); // The empty

  const loginWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        createUserDocumentFromAuth(user);
        resetForm();
      }
    } catch {
      alert("Invalid credentials!");
    }
  };
  return (
    <div className="login-container">
      <h2> Already have an account? </h2>
      <span> Sign in with yout email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign in</Button>
          <Button type="button" buttonType="google" onClick={loginWithGoogle}>
            Signin with google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;

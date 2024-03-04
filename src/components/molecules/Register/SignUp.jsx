import "./SignUp.scss";
import { useState } from "react";
import {
  createUserDocumentFromAuth,
  createAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";
import FormInput from "../../atoms/FormInput/FormInput";
import Button from "../../atoms/Button/Button";

const defualtFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defualtFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormFields(defualtFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password don't match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      alert(`Unable to create user ${displayName} reason: ${error}`);
    }
  };

  return (
    <div className="sign-up-container">
      <h2> Don't have an account? </h2>
      <span> Sign up with yout email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
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
        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          autoComplete="true"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="google" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUp;

import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/molecules/Navigation/Navigation";
import Authentication from "./components/pages/Authentication/Authentication";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop";
import Checkout from "./components/pages/Checkout/Checkout";
import React, { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      } else {
        navigate("/authentication");
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="authentication" element={<Authentication />}></Route>
        <Route path="shop/*" element={<Shop />}></Route>
        <Route path="checkout" element={<Checkout />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

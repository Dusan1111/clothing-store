// import "./App.css";
import "./App.scss";
import Home from "./components/pages/home/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/atoms/Navigation/Navigation";
import Login from "./components/pages/sign-in/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

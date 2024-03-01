// import "./App.css";
import "./App.scss";

import { Route, Routes } from "react-router-dom";
import Navigation from "./components/atoms/Navigation/Navigation";
import Authentication from "./components/pages/Authentication/Authentication";
import Home from "./components/pages/Home/Home";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="authentication" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

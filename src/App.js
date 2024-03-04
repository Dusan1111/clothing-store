// import "./App.css";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/molecules/Navigation/Navigation";
import Authentication from "./components/pages/Authentication/Authentication";
import Home from "./components/pages/Home/Home";
import Shop from "./components/pages/Shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="authentication" element={<Authentication />}></Route>
        <Route path="shop" element={<Shop />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

// import "./App.css";
import "./App.scss";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/atoms/Navigation/Navigation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

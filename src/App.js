import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Basket from "./pages/Basket";
import s from "./AppStyle.module.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={s.navbar}>
          <Menu />
        </div>
        <div className={s.content}>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/catalog" element={<Shop />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

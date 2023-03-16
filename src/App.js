import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import styled from "styled-components";

const Styled = {
  Page: styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: space-between;
  `,
};

function App() {
  return (
    <BrowserRouter>
      <Styled.Page>
        <div>
          <div>
            <Menu />
          </div>
          <div>
            <Routes>
              <Route path="/" exact={true} element={<HomePage />} />
              <Route path="/catalog" element={<Shop />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </Styled.Page>
    </BrowserRouter>
  );
}

export default App;

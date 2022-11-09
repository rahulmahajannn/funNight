import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./component/SignUp";
import Login from "./component/Login";
import ContactUs from "./component/ContactUs";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/contactus" exact element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

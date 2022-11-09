import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await axios.post("http://localhost:8000/login", {
      email,
      password,
    });
    if (apiResponse.data.status == 200) {
      localStorage.setItem("token", "secToken");
      navigate("/home");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Link to="/signup">Not registered? Signup</Link>
      <br />
      <Link to="/contactus">Contact Us</Link>
    </>
  );
};

export default Login;

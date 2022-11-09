import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const handleSubmit = (e) => {
    localStorage.clear();
    navigate("/");
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <h1>HOME</h1>
      <button onClick={handleSubmit}>Log Out</button>
    </>
  );
};

export default Home;

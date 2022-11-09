import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiResponse = await axios.post("http://localhost:8000/contactus", {
      email,
      query,
      name,
    });
    if (apiResponse.data.status == 200) {
      alert("query sent successfully");
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
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="query"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <Link to="/">Login Here</Link>
    </>
  );
};

export default ContactUs;

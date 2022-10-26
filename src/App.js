import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  // to make a react app which is having login page,
  //if username and password is correct route to new page
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  function myFunction() {
    if (name == "Name" && pass == "1234") {
      navigate("login");
    } else {
      navigate("wrong");
    }
  }

  return (
    <div className="App">
      <label>username</label>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <br />
      <label>password</label>
      <input type="password" onChange={(e) => setPass(e.target.value)}></input>
      <br />
      <button onClick={myFunction}>Login</button>
    </div>
  );
}

export default App;

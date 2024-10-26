import React from "react";
import { useState } from "react";
import "./Login.css"

const Login = () => {
        
     const [username, setUsername] = useState("");
     const [password, setPassword] = useState("");
     
     const handleSubmit = (event) => {
      event.preventDefault();
      alert("Enviando os dados ao backend: " + username + "/" + password);
     }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Welcome.</h1>
        <div>
          <input type="email" 
          placeholder="E-mail"
          onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input type="password"
           placeholder="Password"
           onChange={(e) => setPassword(e.target.value)}
           />
        </div>
        <div className="create-account">
        <a href="#">Create account</a> 
        </div>
        <div className="forgot-password">
        <a href="#">Forgot your password?</a> 
        </div>
        <button>Login</button>

      </form>
    </div>
  );
};

export default Login;

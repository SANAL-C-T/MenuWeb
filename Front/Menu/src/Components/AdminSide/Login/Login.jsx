import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import style from "./Login.module.css";

const baseUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const name = nameRef.current.value;
    const password = passwordRef.current.value;

    if (!name || !password) {
      alert("Please enter both name and password.");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}/login`, {
        name,
        password,
      });

      if (response.status === 200) {
        alert("Login successful!");
        const { token } = response.data;
        localStorage.setItem('jwtToken', token); 
        console.log("Response data:", response.data);
        navigate('/AddCategory');
      } else {
        alert("Invalid login.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred");
    }
  };

  return (
    <div className={style.login}>
      <h2>Admin Login</h2>

      <input
        ref={nameRef}
        className={style.loginName}
        type="text"
        placeholder="Enter Name"
      />

      <input
        ref={passwordRef}
        className={style.loginPass}
        type="password"
        placeholder="Enter Password"
      />

      <button className={style.loginBtn} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;

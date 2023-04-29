import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from 'react-icons/fa';
import './LoginButton.css';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button className="login-button" onClick={() => loginWithRedirect()}>
      <FaUser className="login-icon" />
      <span className="login-text">Log In</span>
    </button>
  );
};

export default LoginButton;

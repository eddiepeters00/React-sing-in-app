import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      localStorage.removeItem("authToken");
      navigate("/sign-in");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default LogOutButton;

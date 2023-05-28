import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LogOutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch("/api/log-out");
    } catch (err) {
      console.error(err);
    }
    navigate("/sign-in");
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Log out
    </button>
  );
};

export default LogOutButton;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import LogOutButton from "../components/LogOutButton";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = () => {
      const isAuthenticated = localStorage.getItem("authToken");

      if (!isAuthenticated) {
        navigate("/sign-in");
      }
    };

    checkAuthentication();
  }, [navigate]);

  return (
    <>
      <UserTable />
      <LogOutButton />
    </>
  );
};

export default Home;

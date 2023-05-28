import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import LogOutButton from "../components/LogOutButton";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to check if the user is authenticated
    const checkAuthentication = async () => {
      try {
        const response = await fetch("/api/check-authentication");
        if (!response.ok) {
          //User is not authenticated
          navigate("/sign-in");
        }
      } catch (err) {
        console.error(err);
      }
    };

    // Call the function when navigate-value changes
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

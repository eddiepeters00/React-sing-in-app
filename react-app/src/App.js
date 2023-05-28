import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/register" element={<Register />}></Route>
            <Route exact path="/sign-in" element={<SignIn />}></Route>
          </Routes>
        </Router>
      </main>

      <Footer />
    </>
  );
};

export default App;

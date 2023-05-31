import React from "react";
import { useNavigate } from "react-router-dom";
import { useSignInUser } from "../hooks/useUserData";

const SignIn = () => {
  const navigate = useNavigate();
  const { mutate: signInUser } = useSignInUser();

  const handleForm = async (e) => {
    e.preventDefault();

    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      signInUser(formData);
      localStorage.setItem("authToken", "true");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <form onSubmit={handleForm}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="d-grid">
                  <button className="btn btn-primary" type="submit">
                    Sign in
                  </button>
                </div>
              </form>
              <p className="text-center mt-3">
                Not a member? <a href="/register">Register now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

import React from "react";
import styles from "./Login.css";
import Link from "next/link";

const Login = () => {
  return (
    <div className="box">
      <div className="container">
        <div className="sign-in-form">
          <h2>Log in</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email ID</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Institute email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
            </div>
            <button type="submit" className="sign-in-button">
              Sign in
            </button>
            <button type="button" className="google-button">
              Continue with Google
            </button>
          </form>
          <div className="Signupdiv">
            <Link href="/Signup" className="Signup">
              Don&apos;t have an account? Click here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

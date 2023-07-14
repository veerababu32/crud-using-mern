import { useState } from "react";
import LoginSignupForm from "../components/LoginSignupForm";
import "./Login.css";

function LoginSignup() {
  const [option, setOption] = useState(1);

  return (
    <div className="login">
      <div className="login-container">
        <header>
          <div
            className={
              "header-headings " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
            }
          >
            <span>Sign in to your account</span>
            <span>Create an account</span>
            <span>Reset your password</span>
          </div>
        </header>
        <ul className="options">
          <li
            className={option === 1 ? "active" : ""}
            onClick={() => setOption(1)}
          >
            Sign in
          </li>
          <li
            className={option === 2 ? "active" : ""}
            onClick={() => setOption(2)}
          >
            Sign up
          </li>
          <li
            className={option === 3 ? "active" : ""}
            onClick={() => setOption(3)}
          >
            Forgot
          </li>
        </ul>
        <LoginSignupForm option={option} />
      </div>
    </div>
  );
}

export default LoginSignup;

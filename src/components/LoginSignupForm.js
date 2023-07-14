import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";

function LoginSignupForm({ option }) {
  const store = authStore();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    store
      .login()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        alert("User doesn't exist!!!");
        console.log(err, "loginform");
      });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    store
      .signup()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        alert("User already exist!!!");
        console.log(err, "signupform");
      });
  };

  return (
    <form
      className="account-form"
      onSubmit={option === 1 ? handleLogin : option === 2 ? handleSignup : ""}
    >
      <div
        className={
          "account-form-fields " +
          (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
        }
      >
        <input
          id="userName"
          name="name"
          type="text"
          placeholder="Name"
          required={option === 2 ? true : false}
          disabled={option === 1 || option === 3 ? true : false}
          style={{ display: option === 1 || option === 3 ? "none" : "block" }}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={
            option === 1
              ? store.updateLoginForm
              : option === 2
              ? store.updateSignupForm
              : ""
          }
          value={
            option === 1
              ? store.loginForm.email
              : option === 2
              ? store.signupForm.email
              : ""
          }
          required
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={
            option === 1
              ? store.updateLoginForm
              : option === 2
              ? store.updateSignupForm
              : ""
          }
          value={
            option === 1
              ? store.loginForm.password
              : option === 2
              ? store.signupForm.password
              : ""
          }
          required={option === 1 || option === 2 ? true : false}
          disabled={option === 3 ? true : false}
        />
      </div>
      <button className="btn-submit-form" type="submit">
        {option === 1 ? "Sign in" : option === 2 ? "Sign up" : "Reset password"}
      </button>
    </form>
  );
}

export default LoginSignupForm;

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const loginStatus = useLoaderData();

  const logoutHandler = () => {
    localStorage.setItem("isLoggedIn", "false");
    navigate("/");
  };

  if (loginStatus === "true") {
    return (
      <div className={classes.loginStatus}>
        <p>Already Logged In</p>
        <div className={classes.action}>
          <Link to="/home">Home</Link>
          <button onClick={logoutHandler}>LogOut</button>
        </div>
      </div>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault()
    localStorage.setItem("isLoggedIn", "true");
    navigate("/home");
  };

  return (
    <div className={classes.signup}>
      <form onSubmit={submitHandler}>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" required />
        </p>
        <div className={classes.action}>
          <button>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;



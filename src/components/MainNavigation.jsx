import { NavLink, useRouteLoaderData } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useEffect, useState } from "react";

const MainNavigation = () => {
  const data = useRouteLoaderData("login-loader");
  const [loginStatus, setLoginStatus] = useState("false");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
      });
    }
  }, []);

  useEffect(() => {
    setLoginStatus(data);
  }, [data]);

  return (
    <header
      className={`${classes.header} ${isScrolling ? classes.scroll : ""}`}
    >
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to=""
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Login page
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => {
                if (loginStatus === "true" && !isActive) {
                  return undefined;
                }
                return isActive ? classes.active : classes.disabled;
              }}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

export const loader = () => {
  const loginStatus = localStorage.getItem("isLoggedIn");
  return loginStatus;
};

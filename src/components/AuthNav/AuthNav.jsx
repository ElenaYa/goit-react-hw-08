import clsx from "clsx";
import css from "./AuthNav.module.css";
import { NavLink } from "react-router-dom";

export default function AuthNav ({onClick}) {
    return (
        <div className={css.container}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/login"
        onClick={onClick}>
        Log In
      </NavLink>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/register"
        onClick={onClick}>
        Sign Up
      </NavLink>
    </div>
    );
}
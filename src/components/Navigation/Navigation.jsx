import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from "./Navigation.module.css";

export default function Navigation({onClick}) {

    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={css.nav}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.isActive);
        }}
        to="/"
      onClick={onClick}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.isActive);
          }}
          to="/contacts"
          onClick={onClick}>
          Contacts
        </NavLink>
      )}
    </nav>
    );
}
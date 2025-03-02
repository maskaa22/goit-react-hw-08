import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
export const AuthNav = () => {
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/login">
        Login
      </NavLink>
      <NavLink className={s.link} to="/register">
        Registration
      </NavLink>
    </nav>
  );
};

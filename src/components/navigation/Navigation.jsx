import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const Navigation = () => {
  const isLogin = useSelector(selectIsLoggedIn);
  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/">
        Home
      </NavLink>
      {isLogin && (
        <NavLink className={s.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

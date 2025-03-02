import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { logout } from "../../redux/contacts/slice";
import { useNavigate } from "react-router-dom";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(logout());
    navigate("/", { relative: true });
  };
  return (
    <div>
      <button className={s.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

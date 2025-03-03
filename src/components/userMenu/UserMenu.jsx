import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/operations";
import s from "./UserMenu.module.css";
import { useNavigate } from "react-router-dom";
import { selectUser } from "../../redux/auth/selectors";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        navigate("/", { relative: true });
      });
  };
  return (
    <div className={s.wrapper}>
      <h3>Welcome, {user.name}</h3>
      <button className={s.button} onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

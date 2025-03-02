import { useSelector } from "react-redux";
import { AuthNav } from "../authNav/AuthNav";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../userMenu/UserMenu";
import s from "./AppBar.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn && <h3>Welcome, {user.name}</h3>}
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};

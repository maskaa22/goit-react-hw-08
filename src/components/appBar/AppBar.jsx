import { useSelector } from "react-redux";
import { AuthNav } from "../authNav/AuthNav";
import { Navigation } from "../navigation/Navigation";
import { UserMenu } from "../userMenu/UserMenu";
import s from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={s.header}>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </header>
  );
};

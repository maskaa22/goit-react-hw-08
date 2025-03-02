import s from "./Home.module.css";
import { FaUserAlt } from "react-icons/fa";
export const Home = () => {
  return (
    <div className={s.home}>
      <h1>This home page for users</h1> <FaUserAlt className={s.user}/>
    </div>
  );
};

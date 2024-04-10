import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import {Link} from "react-router-dom";
import css from "./Home.module.css";

export default function Home () {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div>
            <p className={css.text}>Your simple storage of the contacts!</p>
            {!isLoggedIn && (
         <p className={css.textLast}>
         If you want to start, please {" "}
         <Link className={css.link} to="/register">
           Sign up
         </Link>{" "}
         or{" "}
         <Link className={css.link} to="/login">
           Log in
         </Link>{" "}
         in this application.
       </p>
      )}
        </div>
    );
}
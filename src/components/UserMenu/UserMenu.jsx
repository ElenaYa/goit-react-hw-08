import { useSelector, useDispatch } from 'react-redux';
import {selectUser} from '../../redux/auth/selectors';
import {logOut} from '../../redux/auth/operations';
import css from './UserMenu.module.css';

export default function UserMenu () {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <div className={css.container}>
            <p>Welcome, {user}</p>
            <button type="button" className={css.button}
                onClick={() => dispatch(logOut())} >
            Log out</button>
        </div>
    );
}
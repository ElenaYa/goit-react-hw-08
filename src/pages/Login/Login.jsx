import LoginForm from '../../components/LoginForm/LoginForm';
import css from './Login.module.css';

export default function Login() {


    return (
        <div className={css.container}>
        <LoginForm />
        <p className={css.text}>
          Please sign in to access your account.
        </p>
      </div>
    );
}
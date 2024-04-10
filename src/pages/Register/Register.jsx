import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './Register.module.css';

export default function Register () {

    return (
        <div className={css.wrapper}>
         
        <RegistrationForm />  
      </div>
    );
}
import {Formik, Form, Field, ErrorMessage} from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useId } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import * as Yup from 'yup';
import css from './RegistrationForm.module.css';

const LoginSchema = Yup.object().shape({
    name: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required field'),
    email: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required field'),
    password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required field'),
  });

export default function RegistrationForm() {

    const dispatch = useDispatch();
    const nameId = useId();
    const emailId = useId();
    const passwordId = useId();

    const handleSubmit = (values, actions) => {
        dispatch(register(values))
        .unwrap()
        .catch(() => toast.error("This email is already taken"));
        actions.resetForm();
    };
    return (
        <>
        <Formik
            initialValues = {{
                name: "",
                email: "",
                password: ""
            }}
            onSubmit={handleSubmit}
            validationSchema={LoginSchema}
        >
        <Form className={css.form}>
          <div className={css.field}>
            <label className={css.label} htmlFor={nameId}>
              Username
            </label>
            <Field type="text" name="name" id={nameId} />
            <ErrorMessage className={css.error} name="name" component="p" />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor={emailId}>Email
            </label>
            <Field type="email" name="email" id={emailId} />
            <ErrorMessage className={css.error} name="email" component="p" />
          </div>

          <div className={css.field}>
            <label className={css.label} htmlFor={passwordId}>
              Password
            </label>
            <Field type="password" name="password" id={passwordId} />
            <ErrorMessage className={css.error} name="password" component="p" />
          </div>

          <button className={css.button} type="submit">
            Sign up
          </button>
        </Form>
        </Formik>
        <Toaster/>
        </>
    );
}
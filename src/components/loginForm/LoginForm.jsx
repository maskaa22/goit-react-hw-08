import { Formik, Form, Field } from "formik";
import s from "./LoginForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

export const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(loginUser(values));

    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={emailFieldId}>
              Email:
            </label>
            <Field
              type="email"
              name="email"
              className={s.input}
              id={emailFieldId}
            />

            <label className={s.label} htmlFor={passwordFieldId}>
              Password:
            </label>
            <Field
              type="password"
              name="password"
              className={s.input}
              id={passwordFieldId}
            />

            <button type="submit" className={s.submit}>
              Login
            </button>
            <p>
              You do not have account yet?{" "}
              <Link to="/register">Go registation</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

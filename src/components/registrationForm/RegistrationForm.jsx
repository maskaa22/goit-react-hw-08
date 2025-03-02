import { Formik, Form, Field } from "formik";
import s from "./RegistrationForm.module.css";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/auth/operations";
import { Link } from "react-router-dom";

export const RegistrationForm = () => {
  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(registerUser(values));

    actions.resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={s.form}>
            <label className={s.label} htmlFor={nameFieldId}>
              Name:
            </label>
            <Field
              type="text"
              name="name"
              className={s.input}
              id={nameFieldId}
            />

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
              Registration
            </button>

            <p>
              You already have account? <Link to="/login">Go login</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

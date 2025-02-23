import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();
  const nameId = useId();
  const numberId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ ...values }));
    actions.resetForm();
  };

  const feedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .matches(/[0-9]{3}-[0-9]{3}-[0-9]{4}/, {
        message: <span>Invalid password</span>,
      })
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={feedbackSchema}
    >
      <Form className={css.container}>
        <div className={css.innerContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} className={css.input} />
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css.innerContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberId}
            className={css.input}
          />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={css.submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

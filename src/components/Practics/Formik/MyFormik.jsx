import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
const initialValues = {
  login: '',
  password: '',
};
const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const MyFormik = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...values,
      }),
    })
      .then(() => {
        alert('Success');
      })
      .catch(error => {
        alert(error);
      });
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="contact"
      netlify
      method="POST"
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <ErrorMessage name="login" />
          <Field type="text" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <ErrorMessage name="password" />
          <Field type="password" name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

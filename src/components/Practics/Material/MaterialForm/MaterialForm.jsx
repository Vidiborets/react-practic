import React from 'react';
import { Formik, Form, Field } from 'formik';
export const MaterialForm = ({ onSubmit, isSubmitting }) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ title: '', link: '' }} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="title" />
          </label>
          <label>
            Ссылка
            <Field name="link" type="text" placeholder="example.com" />
          </label>
          <button disabled={isSubmitting} type="submit">
            Добавить материал
          </button>
        </Form>
      )}
    </Formik>
  );
};

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Formik, Form, Field } from 'formik';
import './NewExhibitForm.css';


const propTypes = {
  createExhibit: PropTypes.func.isRequired,
};


const INITIAL_VALUES = {
  name: '',
  country: '',
  city: '',
  organization: '',
  description: '',
};


const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Введите название!';
  }

  return errors;
};


const NewExhibitForm = props => (
  <Formik
    initialValues={INITIAL_VALUES}
    validate={validate}
    onSubmit={(values, actions) => {
      const { createExhibit } = props;
      actions.validateForm().then(() => {
        actions.setSubmitting(false);
        actions.resetForm(INITIAL_VALUES);
        createExhibit({ ...values });
      });
    }}
    render={({
      errors,
      touched,
      isSubmitting,
    }) => (
      <div className="new-exhibit-form form-container container">
        <h1>Новый экспонат</h1>
        <Form className="form">
          <div className="form-group">
            <Field
              className={classNames({
                'form-control': true,
                'form-control_error': errors.name && touched.name,
              })}
              type="text"
              name="name"
              placeholder="Название"
            />
            {
              errors.name && touched.name
                ? (<div className="invalid-feedback">{errors.name}</div>)
                : null
            }
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              type="text"
              name="country"
              placeholder="Страна"
            />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              type="text"
              name="city"
              placeholder="Город"
            />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              type="text"
              name="organization"
              placeholder="Организация"
            />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              type="text"
              name="description"
              component="textarea"
              placeholder="Описание"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            Создать
          </button>
        </Form>
      </div>
    )}
  />
);


NewExhibitForm.propTypes = { ...propTypes };


export default NewExhibitForm;

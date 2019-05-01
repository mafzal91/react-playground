import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';
import { Persist } from '../components';

const Form = (props) => {

  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      onSubmit={(values) => {
        console.log(values);
      }}
      render={(formProps) => (
        <FormikForm>
          <Persist />
          <div>
            <label>First Name: </label>
            <Field name="firstName" />
          </div>
          <div>
            <label>Last Name: </label>
            <Field name="lastName" />
          </div>
          <button type="submit">Clicky Me</button>
        </FormikForm>
      )
    }/>
  )
}


export default Form

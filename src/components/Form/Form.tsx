import React from 'react';
import {Formik} from 'formik';

type Form = {
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
};
const Form: React.FC<Form> = (props) => {
  const {initialValues, validationSchema, onSubmit, children, ...rest} = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      {...rest}>
      {children}
    </Formik>
  );
};

export default Form;

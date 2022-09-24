import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required')
        .matches(
          /^.*(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
          "Password must contain atleast one letter and one number"
        ),
    }),
    onSubmit: values => {
      console.log(values)
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return <form onSubmit={formik.handleSubmit}>
    <label htmlFor="username">Username</label>
    <input
      id="username"
      name="username"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.username}
    />
    {formik.touched.username && formik.errors.username ? (
      <div>{formik.errors.username}</div>
    ) : null}
    <br></br>
    <label htmlFor="password">Password</label>
    <input
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
    />
    {formik.touched.password && formik.errors.password ? (
      <div>{formik.errors.password}</div>
    ) : null}
    <br></br>
    <button type="submit">Submit</button>
  </form>
}

export default Form;
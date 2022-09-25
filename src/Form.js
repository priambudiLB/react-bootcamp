import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { API_KEY } from './constants';

async function generateRequestToken() {
  // async/await
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`,
    })
    return response.data.request_token
  } catch (e) {
    console.error(e)
    return null
  }
}

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

  const generateSessionID = () => {
    // axios({
    //   method: 'post',
    //   url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
    //   data: {
    //     // request_token: 
    //   }
    // })
  }

  useEffect(() => {
    // promise
    generateRequestToken()
      .then(requestToken => {
        window.open("https://www.themoviedb.org/authenticate/" + requestToken + '?redirect_to=https://dibimbing.id/', "_blank")
      });
  }, [])

  return <div>
    <form onSubmit={formik.handleSubmit}>
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
  </div>
}

export default Form;
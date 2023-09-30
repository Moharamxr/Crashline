import React from 'react';
import { NavLink } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './register.css';
import { register } from '../../../services/auth.service';

const Register = () => {
  const initialValues = {
    email: '',
    fullName: '',
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    fullName: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = async(values) => {
    // Perform registration logic here
    console.log('Registration successful');
    console.log(values);
    // const data = await register(values);
  };

  return (
    <div className="container mt-5 w-100 d-flex flex-column justify-content-center align-items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-30 text-center bg-white registerForm">
          <div className="container">
            <h1 className="mt-5 logo">CrashLine</h1>
            <div className="dv1">
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="Email"
                className="w-75 p-1 mt-5"
              />
              <ErrorMessage name="email" component="p" className="error" />
            </div>
            <div className="dv1 mt-2">
              <Field
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className="p-1 mt-2 w-75"
              />
              <ErrorMessage name="fullName" component="p" className="error" />
            </div>
            <div className="dv1 mt-2">
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className="p-1 mt-2 w-75"
              />
              <ErrorMessage name="username" component="p" className="error" />
            </div>
            <div className="dv1 mt-2">
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="p-1 mt-2 w-75"
              />
              <ErrorMessage name="password" component="p" className="error" />
            </div>

            <button type="submit" className="btn btn-dark m-3 bg-color w-75" style={{ backgroundColor: '#6936F5' }}>
              Sign Up
            </button>
          </div>
        </Form>
      </Formik>
      <div className="signUp w-30 m-5 pt-3 text-center bg-white">
        <p>
          Already have an account?
          <NavLink to="/login" className="logo">
            Sign In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
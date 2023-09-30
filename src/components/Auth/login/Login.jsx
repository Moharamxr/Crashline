import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.css";
import { login } from "../../../services/auth.service";

const Login = () => {
  const formErrors = localStorage.getItem("LoginErrorMessage");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (formErrors) {
      setShowError(true);

      const timeout = setTimeout(() => {
        setShowError(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, []);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values) => {
    // Perform login logic here

    console.log(values);
    try {
      const data = await login(values);
      console.log("Login successful");
    } catch (error) {
      console.error(error);
      if (formErrors) {
        setShowError(true);

        const timeout = setTimeout(() => {
          setShowError(false);
        }, 3000);

        return () => clearTimeout(timeout);
      }
    }
  };

  return (
    <div className="container vh-100 w-100 d-flex flex-column justify-content-center align-items-center ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form className="w-30 text-center bg-white">
            <div className="container">
              <h1 className="mt-5 mb-5 logo">Crashline</h1>
              <span className="text-danger fw-bold text-center">
                {showError && <>{formErrors}</>}
              </span>
              <div className="dv1 p-2">
                <Field
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="p-1 mt-5 w-75"
                />
                <ErrorMessage name="email" component="p" className="error" />
              </div>
              <div className="p-2 mt-2 mb-4">
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="p-1 w-75"
                />
                <ErrorMessage name="password" component="p" className="error" />
              </div>

              <button
                type="submit"
                className="btn btn-dark w-75 mb-5 "
                disabled={!isValid}
                style={{ backgroundColor: "#6936F5" }}
              >
                Sign In
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="signUp m-1 w-30 m-5 pt-3 text-center bg-white">
        <p>
          Don't have an account?
          <NavLink className="logo" to="/register">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;

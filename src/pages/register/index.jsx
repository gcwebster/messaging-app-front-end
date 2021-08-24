import React from "react";
import { Formik } from "formik";

import Input from "../../common/Input";
import { register } from "./helper";
import "./register.css";

const Register = () => (
  <div className="registerPage">
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      onSubmit={(values) => {
        console.log("submitted with the following: ", values);
        register(values);
      }}
      validator={() => ({})}
    >
      {({ values, handleSubmit, handleChange }) => (
        <form onSubmit={handleSubmit}>
          <Input
            label="First name"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <Input
            label="Last name"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Input
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </form>
      )}
    </Formik>
  </div>
);

export default Register;

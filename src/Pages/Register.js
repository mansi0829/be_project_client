import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Requests, Validators } from "../api/index";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions";

const Register = (props) => {
  let navigate = useNavigate();
  const validate = Yup.object({
    name: Validators.name,
    email: Validators.email,
    password: Validators.password,
    phone: Validators.phoneNumber,
    confirmPassword: Validators.confirmPassword,
  });

  return (
    <div className="pt-24 py-4 bg-gray-900 text-gray-100">
      <Formik
        initialValues={{
          name: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={async (values) => {
          try {
            const res = await Requests.signup(values);
            localStorage.setItem("token", res.data.token);
            props.login(res.data);
            alert("Register successful");
            navigate("/");
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {(formik) => (
          <div className="register-form w-80 md:w-[400px] text-center m-auto py-14 justify-center shadow-lg shadow-indigo-500/40">
            <h1 className="text-4xl p-4">Sign Up</h1>
            <Form
              className="p-4 space-y-4 mx-auto "
              onSubmit={formik.handleSubmit}
            >
              <div className="form-group">
                <TextField
                  className="bg-gray-300 text-black p-2 w-full outline-none"
                  placeholder="Name"
                  name="name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <TextField
                  className="bg-gray-300 text-black p-2 w-full outline-none"
                  placeholder="Email"
                  name="email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <TextField
                  className="bg-gray-300 text-black p-2 w-full outline-none"
                  placeholder="Phone Number"
                  name="phone"
                  type="tel"
                />
              </div>
              <div className="form-group">
                <TextField
                  className="bg-gray-300 text-black p-2 w-full outline-none"
                  placeholder="Password"
                  name="password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <TextField
                  className="bg-gray-300 text-black p-2 w-full outline-none"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  type="password"
                />
              </div>
              <div className="space-x-2">
                <button
                  className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
                  type="submit"
                >
                  Register
                </button>
                <button
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  type="reset"
                >
                  Reset
                </button>
              </div>
            </Form>
            <p className="link p-3">
              Already have an account? <Link to="/login">Sign In</Link>
            </p>
          </div>
        )}
      </Formik>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.isAuthenticated,
  };
}

function mapActionToProps(dispatch) {
  return {
    login: (userData) => dispatch(login(userData)),
  };
}

export default connect(mapStateToProps, mapActionToProps)(Register);

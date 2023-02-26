import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";
import PropTypes from "prop-types";

import { connect } from "react-redux";
//action import
import { register } from "../../redux/actions/authAction";
import { Navigate } from "react-router-dom";
//import authReducer from "../../redux/reducers/authReducer";
const initialState = {
  name: "Abhi",
  email: "",
  password: "",
  confirmPassword: "",
};

// rfcreduxp:
// react function componet redux prop types.

export const Register2 = ({isAuthenticated,register}) => {
  const [formData, setFormData] = useState(initialState);

  const { name, email, password, confirmPassword } = formData;
  // destructuring of the state object.

  const [error, setError] = useState({});
  // to hold the error related messages from restthe rest api call.
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // ...formData : spread operator.

    //this.setState({ [e.target.name]: e.target.value });
  };
if(isAuthenticated){
  return <Navigate to="/dashboard"></Navigate>
}

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log(JSON.stringify(formData));
      register({name,email,password});
    }
  };
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up for </h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              required
              onChange={onChange}
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              className={classnames("form- control", {
                "is-invalid": error.email,
              })}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">{error.email}</div>
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
              className={classnames("form-control form-control-lg", {
                "is-invalid": error && error.password,
              })}
            />
            <div className="d-block invalid-feedback">{error.password}</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={confirmPassword}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">
              {error.confirmPassword}
            </div>
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
};

Register2.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool  
};
//PropTypes:we  will define the types of our used props in our component 
const mapStateToProps = (state) => ({
  //state: global state / app store / store
  isAuthenticated: state.authReducer.isAuthenticated,
});
//map your props with store content

const mapDispatchToProps = {
  register,
};
// we will list out all the actions consumed by the components

export default connect(mapStateToProps, mapDispatchToProps)(Register2);


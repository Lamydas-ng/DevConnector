import React, { useState } from "react";
import axios from "axios";
import classnames from "classnames";
const initialState = {
  name: "Abhi",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register2 = () => {
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
  const onSubmit = (e) => {
    e.preventDefault();
  if(password === confirmPassword){
    console.log(JSON.stringify(formData));
    axios
      .post("/api/users", { name, email, password })
      .then((res) => console.log(JSON.stringify(res)))
      .catch((err) => {
        const errorObj = {};
        console.error(JSON.stringify(err.response.data.errors));
        err.response.data.errors.forEach((element) => {
          console.log({ msg: element.msg, field: element.param });
          if (element.param === "email") errorObj.email = element.msg;
          if (element.param === "password") errorObj.password = element.msg;
        });
        setError({ ...errorObj });
        //this.setState({ errors: errorObj });
      });
    console.log("hello from register form");
  }else{
    const errorObj = {};
    errorObj.confirmPassword = "password did not match"
    setError({...errorObj});

  }
  };
  return (
    <>
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
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
              name="confirmPassword"
              minLength="6"
              value={confirmPassword}npm
              onChange={onChange}
            />
             <div className="d-block invalid-feedback">{error.confirmPassword}</div>
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

export default Register2;
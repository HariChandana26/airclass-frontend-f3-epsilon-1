import './index.css';
import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import loginImage from '../../images/login-register.png';
import logo from '../../images/logo2.png';
import { URL } from '../App/constants';

function LoginPage() {
  const loginUser = () => {
    axios
      .post(`${URL}/v1/auth /register`, {
        name: 'fake name',
        email: 'fake1@example.com',
        password: 'password1',
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="login-container">
        <div className="login">
          <div className="login-part1">
            <div className="login-part1-text">
              <img className="login-logo" src={logo} alt="website-logo" />
              <h1 className="sign-in-to">Sign in to</h1>
              <h1 className="website-name">AIR CLASS</h1>
              <p className="register-msg">If you don’t have an account</p>
              <p className="register-msg">
                You can{' '}
                <NavLink className="nav-link" to="/signup">
                  <span className="register-here">Register here!</span>
                </NavLink>
              </p>
            </div>
            <img src={loginImage} className="login-image" alt="login" />
          </div>

          <div className="login-part2">
            <h1 className="sign-in">Sign in</h1>
            <input
              type="text"
              className="username"
              placeholder="enter email or username"
            />
            <input
              type="password"
              className="username"
              placeholder="Password"
            />
            <NavLink className=" nav-link" to="/homepage">
              <button
                type="button"
                className="username login-btn"
                onClick={loginUser}
              >
                Login
              </button>
            </NavLink>

            <p className="continue-with">or continue with</p>
            <div className="login-icons">
              <BsFacebook className="facebook-icon" />
              <FcGoogle className="google-icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import validator from 'validator';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { login } from '../../../api/User/AuthRequest';
import { setUser } from '../../../redux/userSlice';
import {
  emailchangeHandler,
  passwordChangeHandler,
  showpassword,
} from './validation';
import Google from '../google/Google';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setEmailIsValid(validator.isEmail(email));
    setPasswordIsValid(
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
    );
    setFormIsValid(passwordIsValid && emailIsValid);
  }, [email, password, passwordIsValid, emailIsValid]);

  const submitHandler = async () => {
    const response = await login({
      email,
      password,
    });
    if (response.status) {
      dispatch(setUser(response));
      navigate('/');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl" />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold text-center">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      emailchangeHandler(e, setEmail);
                    }}
                    name="email"
                    type="text"
                    className={
                      emailIsValid
                        ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                        : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                    }
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <div className="flex">
                    <input
                      autoComplete="off"
                      onChange={(e) => {
                        passwordChangeHandler(e, setPassword);
                      }}
                      value={password}
                      id="password"
                      name="password"
                      type={passwordShown ? 'text' : 'password'}
                      className={
                        passwordIsValid
                          ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                          : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                      }
                      placeholder="Password"
                    />
                    <img
                      onClick={() => {
                        showpassword(passwordShown, setPasswordShown);
                      }}
                      src={
                        passwordShown
                          ? 'https://cdn-icons-png.flaticon.com/512/565/565655.png'
                          : 'https://cdn-icons-png.flaticon.com/512/6684/6684701.png'
                      }
                      className={passwordShown ? 'w-8 h-8 p-1' : 'w-8 h-8'}
                      alt=""
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                </div>
                <div className="flex">
                  <h1 className="ml-auto text-sm">Do not have an account?</h1>
                  <button
                    type="button"
                    onClick={() => {
                      navigate('/signup');
                    }}
                    className="text-sm text-blue-500"
                  >
                    Click here
                  </button>
                </div>
              </div>
              <div
                className={
                  formIsValid
                    ? 'bg-slate-500 text-white rounded-md px-2 py-1 text-center'
                    : 'bg-slate-300 text-white rounded-md px-2 py-1 cursor-not-allowed text-center'
                }
              >
                <button
                  type="button"
                  onClick={submitHandler}
                  className={
                    formIsValid
                      ? 'bg-slate-500 text-white rounded-md px-2 py-1 text-lg'
                      : 'bg-slate-300 text-white rounded-md px-2 py-1 cursor-not-allowed'
                  }
                >
                  Submit
                </button>
              </div>
              <h1 className="text-center">or</h1>
              <div className="border">
                <GoogleOAuthProvider clientId="318946388070-13865e9jd2ta98ipk576hkrr5lmrp3i3.apps.googleusercontent.com">
                  <Google />
                </GoogleOAuthProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

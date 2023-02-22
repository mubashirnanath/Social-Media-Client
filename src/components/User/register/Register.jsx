/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import toast from 'react-hot-toast';
import {
  showpassword,
  showRepeatpassword,
  namechangeHandler,
  emailchangeHandler,
  dobChangeHandler,
  phoneNoChangeHandler,
  passwordChangeHandler,
  repeatPasswordHandler,
} from './Validation';
import { signUp } from '../../../api/User/AuthRequest';

function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [RepeatpasswordShown, setRepeatPasswordShown] = useState(false);
  const [username, setUsername] = useState('');
  const [NameIsValid, setNameIsValid] = useState(true);
  const [email, setEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [dob, setDob] = useState('');
  const [DobValid, setDobIsValid] = useState(false);
  const [mobile, setMobile] = useState('');
  const [phoneNoIsValid, setPhoneNoIsValid] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState('');
  const [RepeatpasswordIsValid, setRepeatPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setNameIsValid(username.trim().length > 2);
    setEmailIsValid(validator.isEmail(email));
    setDobIsValid(
      new Date(dob.toString()) <= new Date(new Date().toDateString()),
    );
    setPhoneNoIsValid(mobile.trim().length === 10);
    setPasswordIsValid(
      validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
    );
    setRepeatPasswordIsValid(confirmpassword === password && passwordIsValid);
    setFormIsValid(
      NameIsValid
        && emailIsValid
        && DobValid
        && phoneNoIsValid
        && passwordIsValid
        && RepeatpasswordIsValid,
    );
  }, [
    username,
    email,
    dob,
    mobile,
    password,
    confirmpassword,
    NameIsValid,
    emailIsValid,
    DobValid,
    phoneNoIsValid,
    passwordIsValid,
    RepeatpasswordIsValid,
  ]);

  const submitHandler = async () => {
    const response = await signUp({
      username,
      email,
      password,
      dob,
      mobile,
    });
    if (response.status) {
      navigate('/login');
    } else {
      toast.error('somethig went wrong');
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 p-3">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-slate-700 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl " />
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Sign up to see photos and
                <br />
                videos from your friends.
              </h1>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      namechangeHandler(e, setUsername);
                    }}
                    id="name"
                    value={username}
                    name="name"
                    type="text"
                    className={
                      NameIsValid
                        ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                        : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                    }
                    placeholder="name"
                  />
                  {!NameIsValid && username ? (
                    <p className="text-red-500 text-sm text-center font-semibold">
                      * Please enter your name *
                    </p>
                  ) : null}
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      emailchangeHandler(e, setEmail);
                    }}
                    name="email"
                    type="email"
                    className={
                      emailIsValid
                        ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                        : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                    }
                    placeholder="Email address"
                  />
                  {!emailIsValid && email ? (
                    <p className="text-red-500 text-sm text-center font-semibold">
                      * Please enter a valid email address *
                    </p>
                  ) : null}
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    value={dob}
                    onChange={(e) => {
                      dobChangeHandler(e, setDob);
                    }}
                    autoComplete="off"
                    placeholder="dd--mm--yy"
                    id="Username"
                    name="dob"
                    type="date"
                    className={
                      DobValid
                        ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                        : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                    }
                  />
                  {!DobValid && dob ? (
                    <p className="text-red-500 text-sm text-center font-semibold">
                      * Date of birth cannot be a future date. *
                    </p>
                  ) : null}
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Date of birth
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    onChange={(e) => {
                      phoneNoChangeHandler(e, setMobile);
                    }}
                    id="PhoneNo"
                    name="mobile"
                    type="number"
                    value={mobile}
                    className={
                      phoneNoIsValid
                        ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                        : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                    }
                    placeholder="Email address"
                  />
                  {!phoneNoIsValid && mobile ? (
                    <p className="text-red-500 text-sm text-center font-semibold">
                      * Please enter a valid mobile no. *
                    </p>
                  ) : null}
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Phone No
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
                          : 'border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
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
                <p className="text-sm text-gray-500 p-0">
                  ( password should contain speacial characters )
                </p>
                {!passwordIsValid && password ? (
                  <p className="text-red-500 text-sm text-center font-semibold">
                    * Password must be strong *
                  </p>
                ) : null}
                <div className="relative">
                  <div className="flex">
                    <input
                      autoComplete="off"
                      onChange={(e) => {
                        repeatPasswordHandler(e, setConfirmpassword);
                      }}
                      id="password"
                      value={confirmpassword}
                      name="password"
                      type={RepeatpasswordShown ? 'text' : 'password'}
                      className={
                        RepeatpasswordIsValid
                          ? 'border-green-600 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                          : ' border-orange-300 peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600'
                      }
                      placeholder="Password"
                    />
                    <img
                      onClick={() => {
                        showRepeatpassword(
                          RepeatpasswordShown,
                          setRepeatPasswordShown,
                        );
                      }}
                      src={
                        RepeatpasswordShown
                          ? 'https://cdn-icons-png.flaticon.com/512/565/565655.png'
                          : 'https://cdn-icons-png.flaticon.com/512/6684/6684701.png'
                      }
                      className={
                        RepeatpasswordShown ? 'w-8 h-8 p-1' : 'w-8 h-8'
                      }
                      alt=""
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Confirm Password
                    </label>
                  </div>
                </div>
                {!RepeatpasswordIsValid && confirmpassword ? (
                  <p className="text-red-500 text-sm text-center font-semibold">
                    * Enter Password same as above *
                  </p>
                ) : null}
                <div className="flex">
                  <h1 className="ml-auto text-sm">Already have an account?</h1>
                  <button
                    type="button"
                    onClick={() => {
                      navigate('/login');
                    }}
                    className="text-sm text-blue-500 px-1"
                  >
                    Click here
                  </button>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    onClick={submitHandler}
                    className={
                      formIsValid
                        ? 'bg-slate-500 text-white rounded-md px-2 py-1'
                        : 'bg-slate-300 text-white rounded-md px-2 py-1 cursor-not-allowed'
                    }
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

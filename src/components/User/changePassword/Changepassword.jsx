import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import validator from 'validator';
import { ChangePassword } from '../../../api/User/AuthRequest';
import Layout from '../layout/Layout';

function Changepassword() {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [isCurrPassword, setIsCurrPassword] = useState(false);
  const [isNewPassword, setIsNewPassword] = useState(false);
  const [isConfirmPassword, setIsConfirmPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isEqual, setIsEqual] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsNewPassword(
      validator.isStrongPassword(formData.newpassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
    );
    setIsCurrPassword(
      validator.isStrongPassword(formData.currpassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }),
    );
    setIsConfirmPassword(formData.newpassword === formData.confirmpassword);
  };

  const handleSubmit = async () => {
    setIsSubmit(true);
    setIsEqual(formData.newpassword !== formData.currpassword);
    if (isEqual) {
      if (isNewPassword && isConfirmPassword && isCurrPassword) {
        formData.userId = userId;
        const response = await ChangePassword(formData);
        if (response?.status) {
          navigate('/');
        }
      }
    } else {
      toast.error('No changes in password');
    }
  };
  return (
    <Layout>
      <div>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto border md:mt-3 lg:py-0">
            <div className="w-full border md:m-6 p-6 bg-white rounded-lg shadow dark:border sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change Password
              </h2>
              <form className="mt-0 space-y-4 lg:mt-5 md:space-y-5" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Current Password
                  </label>
                  <input
                    type="password"
                    name="currpassword"
                    id="email"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="••••••••"
                  />
                  {!formData.currpassword && isSubmit ? (
                    <p className="ml-2 text-red-600 font-semibold">
                      * Please enter current password *
                    </p>
                  ) : null}
                  {!isCurrPassword && formData.currpassword ? (
                    <p className="ml-2 text-red-600 font-semibold">
                      * Please enter a strong password *
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newpassword"
                    id="password"
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {!formData.newpassword && isSubmit ? (
                    <p className="ml-2 text-red-600 font-semibold">
                      * Please enter new password *
                    </p>
                  ) : null}
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm new password
                  </label>
                  <input
                    type="password"
                    name="confirmpassword"
                    id="confirm-password"
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {!formData.confirmpassword && isSubmit ? (
                    <p className="ml-2 text-red-600 font-semibold">
                      * Please enter confirm password *
                    </p>
                  ) : null}
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full text-white bg-blue-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Change passwod
                </button>
                <div className="flex">
                  <button type="button" className="ml-auto text-blue-700">
                    forgot password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Changepassword;

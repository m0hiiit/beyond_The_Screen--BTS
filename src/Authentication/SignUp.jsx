import Loader from "../Components/SubComponents/Loader";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import app, { userREF } from "../Firebase/Firebase";
import { addDoc } from "firebase/firestore";
import bcrypt from 'bcryptjs'
import ToastContainerFunc, { ToastSuccess, ToastError } from '../Components/SubComponents/Toast/ToastContainerFunc';

const auth = getAuth(app);

const initialSignUpState = {
  username: "",
  mobNum: "",
  password: "",
}


const SignUp = () => {
  const navigate = useNavigate()
  const [signUpLoader, setsignUpLoader] = useState(false);
  const [passwordHide, setPasswordHide] = useState("password");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerify, setOtpVerify] = useState("");
  const [signUpState, setSignUpState] = useState(initialSignUpState);

  const HandleHide = () => {
    if (passwordHide === "password") {
      setPasswordHide("text");
    } else {
      setPasswordHide("password");
    }
  };
  // signup functionality

  const generateRecaptha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  };

  // handleotp

  function handleOtpClick() {
    setsignUpLoader(true);
    generateRecaptha();
    let appVerifier = window.recaptchaVerifier
    signInWithPhoneNumber(auth, `+91${signUpState.mobNum}`, appVerifier)
      .then(confirmationResult => {
        window.confirmationResult = confirmationResult;

        ToastSuccess("OTP Sent");
        setsignUpLoader(false);
        setOtpSent(true);

      }).catch((error) => {
        ToastError("Too many OTP requests made. Try later!!!");
        setsignUpLoader(false);
        setSignUpState(initialSignUpState)
        setTimeout(() => {
          location.reload()
        }, 2000);
      });
  };

  // verifyOTP

  function verifyOTP() {
    try {
      setsignUpLoader(true)
      window.confirmationResult.confirm(otpVerify).then((result) => {
        uploadData();
        ToastSuccess("Successfully Registered")
        setOtpVerify('')
        setsignUpLoader(false)
        setTimeout(() => {
          navigate('/login')
        }, 2000);
      })
    } catch (error) {
      ToastError("Something got Wrong Please Try agian later!!!")
    }
  };
  async function uploadData() {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(signUpState.password, salt);
      await addDoc(userREF, {
        username: signUpState.username,
        password: hash,
        mobNum: signUpState.mobNum
      })
    } catch (error) {
      ToastError("Something got Wrong Please Try agian later!!!");
    }
  }
  return (
    <>
      <section className="text-gray-600 lg:w-4/5 mx-auto body-font overflow-hidden">
        <div className="container px-5 flex justify-center pt-6 lg:pt-10 mx-auto ">
          {otpSent ? (
            <div className="w-full max-w-md">
              <span className="flex justify-center mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
                OTP
              </span>
              <div className="relative flex items-center mt-4">
                <span className="absolute left-3">🔢</span>
                <input
                  value={otpVerify}
                  onChange={(event) => setOtpVerify(event.target.value)}
                  required
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-11 pr-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8c4fff] dark:focus:border-[#8c4fff] focus:ring-[#8c4fff] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter OTP"
                />
              </div>

              <div className="mt-6">
                <button
                  onClick={() => verifyOTP()}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#8c4fff] rounded-lg hover:bg-[#7e39ffed]
[#8c4fff] focus:outline-none focus:ring focus:ring-[#8c4fff] focus:ring-opacity-50"
                >
                  {signUpLoader ? (
                    <div className="flex justify-center">
                      <Loader
                        size={
                          "h-[1.75rem] text-white animate-spin dark:text-black fill-white"
                        }
                      />
                    </div>
                  ) : (
                    <span className="text-lg">Confirm OTP</span>
                  )}
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full max-w-md">
              <span className="flex justify-center mt-10 text-2xl font-semibold text-gray-900 dark:text-white">
                Sign Up
              </span>
              <div className="relative flex items-center mt-8">
                <span className="absolute left-3">👤</span>

                <input
                  value={signUpState.username}
                  onChange={(event) =>
                    setSignUpState({
                      ...signUpState,
                      username: event.target.value,
                    })
                  }
                  required
                  type="text"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8c4fff] dark:focus:border-[#8c4fff] focus:ring-[#8c4fff] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Username"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute left-3">📞</span>
                <input
                  value={signUpState.mobNum}
                  onChange={(event) =>
                    setSignUpState({ ...signUpState, mobNum: event.target.value })
                  }
                  required
                  type="number"
                  className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-11 pr-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8c4fff] dark:focus:border-[#8c4fff] focus:ring-[#8c4fff] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Mobile Number"
                />
              </div>
              <div className="relative flex items-center mt-4">
                <span className="absolute left-3">🔑</span>

                <input
                  value={signUpState.password}
                  onChange={(event) =>
                    setSignUpState({
                      ...signUpState,
                      password: event.target.value,
                    })
                  }
                  required
                  type={passwordHide}
                  className="block w-full px-11 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8c4fff] dark:focus:border-[#8c4fff] focus:ring-[#8c4fff]
                [#8c4fff] focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                />
                <div
                  className="absolute z-0 right-3 text-2xl cursor-pointer"
                  onClick={HandleHide}
                >
                  {passwordHide === "text" ? "🙈" : "🐵"}
                </div>
              </div>

              <div className="mt-6">
                <button
                  disabled={[
                    signUpState.password,
                    signUpState.mobNum,
                    signUpState.username
                  ].includes("")}
                  onClick={handleOtpClick}
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide disabled:bg-gray-500 text-white capitalize transition-colors duration-300 transform bg-[#8c4fff] rounded-lg hover:bg-[#7e39ffed]
            [#8c4fff] focus:outline-none focus:ring focus:ring-[#8c4fff] focus:ring-opacity-50"
                >
                  {signUpLoader ? (
                    <div className="flex justify-center">
                      <Loader
                        size={
                          "h-[1.75rem] text-white animate-spin dark:text-black fill-white"
                        }
                      />
                    </div>
                  ) : (
                    <span className="text-lg">Request OTP</span>
                  )}
                </button>

                <div className="mt-6 text-center ">
                  <span className="text-sm text-[#fff] dark:text-[#fff] ">
                    Already have an account? &nbsp;
                    <Link
                      to={"/login"}
                      className="text-[#8c4fff] text-base cursor-pointer dark:text-[#8c4fff] hover:underline"
                    >
                      Login
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          )
          }
        </div >
        <div id="recaptcha-container" className="h-5 w-5"></div>
      </section >
      <ToastContainerFunc />
    </>
  );
};

export default SignUp;









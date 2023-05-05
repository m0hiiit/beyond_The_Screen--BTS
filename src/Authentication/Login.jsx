import { Link, useNavigate } from "react-router-dom";
import Loader from "../Components/SubComponents/Loader";
import { useState, useContext } from "react";
import { query, where, getDocs } from "firebase/firestore";
import { userREF } from "../Firebase/Firebase";
import bcrypt from 'bcryptjs'
import { context } from "../App";
import ToastContainerFunc, { ToastSuccess, ToastError } from '../Components/SubComponents/Toast/ToastContainerFunc';

const initialLoginState = {
  mobNum: "",
  password: "",
}

const Login = () => {
  const naviagate = useNavigate()
  const { setUserName, setUserLogin } = useContext(context);
  const [loginLoader, setLoginLoader] = useState(false);
  const [passwordHide, setPasswordHide] = useState("password");
  const [loginState, setLoginState] = useState(initialLoginState);

  const HandleHide = () => {
    if (passwordHide === "password") {
      setPasswordHide("text");
    } else {
      setPasswordHide("password");
    }
  };
  // login

  const handleLogin = async () => {

    setLoginLoader(true)
    try {
      const qur = query(userREF, where('mobNum', '==', loginState.mobNum))
      const getqueryData = await getDocs(qur);


      getqueryData.forEach((element) => {
        const queryData = element.data();
        const comparePass = bcrypt.compareSync(loginState.password, queryData.password);

        if (comparePass) {
          setTimeout(() => {
            naviagate("/")
          }, 2000);
          setUserLogin(true)
          setUserName(queryData.username)
          ToastSuccess('Login Successfull!!')
          // localStorage.setItem('userName', queryData.mobNum)
          // localStorage.setItem('password', loginState.password)
        }
        else {
          ToastError("Please Enter valid Mobile and Password")
          setLoginState(initialLoginState)
          setTimeout(() => {
            naviagate("/signup")
          }, 2000);
        }
      });
    } catch (error) {
      ToastError("Something got wrong please try again later")
    }
    setLoginLoader(false)
  }

  return (
    <section className="text-gray-600 lg:w-4/5 mx-auto body-font overflow-hidden">
      <div className="container px-5 flex h-[35rem] items-center justify-center mx-auto ">
        <div className="w-full max-w-md">
          <span className="flex justify-center text-2xl font-semibold text-gray-900 dark:text-white">
            Login
          </span>
          <div className="relative flex items-center mt-8">
            <span className="absolute left-3">📞</span>
            <input
              required
              type="number"
              value={loginState.mobNum}
              onChange={(event) =>
                setLoginState({ ...loginState, mobNum: event.target.value })
              }
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-11 pr-3 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8c4fff] dark:focus:border-[#8c4fff] focus:ring-[#8c4fff] focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Mobile Number"
            />
          </div>
          <div className="relative flex items-center mt-4">
            <span className="absolute left-3">🔑</span>
            <input
              required
              type={passwordHide}
              value={loginState.password}
              onChange={(event) =>
                setLoginState({ ...loginState, password: event.target.value })
              }
              className="block w-full z-1 pl-12 pr-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-[#8c4fff] dark:focus:border-[#8c4fff] focus:ring-[#8c4fff]
              [#8c4fff] focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="password"
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
                loginState.password,
                loginState.mobNum,
              ].includes("")}
              onClick={handleLogin}
              className="w-full px-6 py-3 disabled:bg-gray-500 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#8c4fff] rounded-lg hover:bg-[#7e39ffed]
[#8c4fff] focus:outline-none focus:ring focus:ring-[#8c4fff] focus:ring-opacity-50"
            >
              {loginLoader ? (
                <div className="flex justify-center">
                  <Loader
                    size={
                      "h-[1.75rem] text-white animate-spin dark:text-black fill-white"
                    }
                  />
                </div>
              ) : (
                <span className="text-lg">Login</span>
              )}
            </button>

            <div className="mt-6 text-center ">
              <span className="text-sm text-[#fff] dark:text-[#fff] ">
                Don't have an account? &nbsp;
                <Link
                  to={"/signup"}
                  className="text-[#8c4fff] cursor-pointer text-base dark:text-[#8c4fff] hover:underline"
                >
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </div>
        <ToastContainerFunc />
      </div>
    </section>
  );
};

export default Login;

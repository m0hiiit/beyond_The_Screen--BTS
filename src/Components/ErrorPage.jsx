import {Link, useNavigate} from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <section className="text-gray-600 body-font mx-auto flex items-center justify-center">
      <div className="container lg:flex lg:items-center lg:gap-12 px-5 pt-10 lg:pt-24 mx-auto ">
        <div className="lg:w-4/5 mx-auto flex items-center flex-wrap">
          <img
            className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-cover "
            src="https://i1.sndcdn.com/avatars-yHnek9itfTrT0kE1-om081Q-t500x500.jpg"
            alt="404 Error"
          />
        </div>
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-[#762cff] dark:text-[#8c4fff]">
            404 error
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            We lost😵 this page
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <div className="flex items-center mt-6 gap-x-3">
            <button
              className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
              onClick={goBack}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <span>Go back</span>
            </button>

            <Link
              to={"/"}
              className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#726cff] rounded-lg shrink-0 sm:w-auto hover:bg-[#8c4fff] dark:hover:bg-[#726cff] dark:bg-[#8c4fff]"
            >
              <button>Take me home</button>
            </Link>
          </div>

          <div className="mt-10 space-y-6">
            <div>
              <Link
                to={"/addnewmovie"}
                className="inline-flex items-center text-sm text-[#762cff] gap-x-2 dark:text-[#8c4fff]"
              >
                <span>Add New Movie</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Add new latest movie on our movie list.
              </p>
            </div>

            <div>
              <Link
                to={"/detailsmovieinfo/No4rHyO1LA5gPnJCShcu"}
                className="inline-flex items-center text-sm text-[#762cff] gap-x-2 dark:text-[#8c4fff]"
              >
                <span>Our Best Movie</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Watch our latest movie on our website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;

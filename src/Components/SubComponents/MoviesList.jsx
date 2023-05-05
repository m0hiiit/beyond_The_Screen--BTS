import { NavLink } from "react-router-dom";
import StarReviews, { BadStarReviews } from "./StarReviews";

const MoviesList = ({ movieDetails }) => {
  return (
    <>
      {movieDetails.map((allDetails) => (
        <article
          key={allDetails.id}
          className="rounded-xl bg-[#8c4fff] items-center p-2 sm:p-3 md:px-2 md:py-1 lg:p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-95 duration-300 z-0"
        >
          <div className=" flex items-center overflow-hidden sm:h-[21.5rem] h-[13rem] rounded-xl ">
            <NavLink to={`detailsmovieinfo/${allDetails.id}`}>
              <img
                src={allDetails.image}
                alt="Movie Poster"
                className="rounded-xl"
              />
            </NavLink>
          </div>
          <div className="mt-1 p-2">
            <h2 className="text-[white] font-bold">{allDetails.title}</h2>
            <div className="flex items-center cursor-pointer">
              <p className="mt-1 text-xs text-[white] font-medium">
                Rating :&nbsp;
              </p>
              <span className="mt-[.2rem]">
                {allDetails.starRating / allDetails.totalUsers >= 3 ? (
                  <StarReviews
                    rating={allDetails.starRating / allDetails.totalUsers}
                    size={14}
                  />
                ) : (
                  <BadStarReviews
                    rating={allDetails.starRating / allDetails.totalUsers}
                    size={14}
                  />
                )}
              </span>
            </div>
            <div className="mt-1 sm:mt-1 ">
              <p className="text-sm sm:text-sm text-[white]">
                Year : {allDetails.year}
              </p>
            </div>
            <div className="mt-2 sm:mt-1 flex items-center justify-between">
              <NavLink
                to={`detailsmovieinfo/${allDetails.id}`}
                className=" text-xs sm:text-base font-semibold rounded text-[#8c4fff] px-[8px] text-center py-[3px] text bg-[white]"
              >
                Read More...
              </NavLink>
              <button className="rounded-full w-5 h-5 sm:w-7 sm:h-7 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-[#ff0000] ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className=" w-3 h-3 sm:w-4 sm:h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default MoviesList;

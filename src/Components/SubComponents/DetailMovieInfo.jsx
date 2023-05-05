import Reviews from "../Reviews";
import StarReviews, { BadStarReviews } from "./StarReviews";

const DetailMovieInfo = ({ moviesDetail, movieID }) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-6 lg:pt-[4.5rem] mx-auto ">
        <div className="lg:w-4/5 mx-auto flex items-start flex-wrap">
          <img
            alt="movie details"
            className="lg:w-1/2 w-full h-[28rem] object-cover object-top lg:h-full rounded-lg "
            src={moviesDetail.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-8 lg:mt-0">
            <h2 className="text-sm title-font text-gray-400 tracking-widest">
              {moviesDetail.year}
            </h2>
            <h1 className="text-[#8c4fff] text-3xl title-font font-medium mb-1 mt-1 capitalize">
              {moviesDetail.title}
            </h1>
            <div className="flex items-center cursor-pointer mb-1">
              <p className="mt-1 text-sm text-gray-400 font-medium">
                Rating :&nbsp;
              </p>
              <div className="flex items-center">
                <span className="mt-[.15rem]">
                  {moviesDetail.starRating / moviesDetail.totalUsers >= 3 ? (
                    <StarReviews rating={moviesDetail.starRating / moviesDetail.totalUsers} size={17} />
                  ) : (
                    <BadStarReviews rating={moviesDetail.starRating / moviesDetail.totalUsers} size={17} />
                  )}

                </span>
                <p className="ml-2 self-center mt-[.2rem] text-sm font-bold text-gray-900 dark:text-gray-400 ">
                  {(moviesDetail.starRating / moviesDetail.totalUsers).toFixed(1)}
                </p>
                <span className="w-1 self-center mt-[.2rem] h-1 mx-1.5 bg-text-gray-400 rounded-full dark:bg-gray-400"></span>
                <span className="text-sm self-center mt-[.2rem] font-medium text-gray-900 underline hover:no-underline dark:text-gray-400 ">
                  {moviesDetail.totalUsers} reviews
                </span>
              </div>
            </div>
            <p className="leading-relaxed capitalize text-gray-400 h-[8rem] lg:h-[7rem] mt-2 overflow-y-scroll">
              {moviesDetail.description}
            </p>
            <div className="flex items-center pb-5 border-b-2 border-gray-400 mb-3"></div>
            <Reviews
              movieID={movieID}
              star={moviesDetail.starRating}
              user={moviesDetail.totalUsers}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailMovieInfo;

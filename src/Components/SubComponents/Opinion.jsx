import profile from "../images/userImages/fifth.png";
import StarReviews, { BadStarReviews } from "./StarReviews";

const Opinion = ({ reviewsData }) => {
  return (
    <section className="px-4 mt-10 body-font  flex justify-center py-3 !h-[32rem] md:!h-[30rem] overflow-y-scroll ">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4">
          {reviewsData.map((reviews, id) => (
            <aside className="px-1 py-2 xl:px-2 w-full" key={id}>
              <div className="h-full bg-[#8c4fff] p-5 rounded">
                <p className="leading-relaxed mb-4 xl:mb-6 text-lg xl:text-lg lg:text-base text-white capitalize">
                  "{reviews.reviews}"
                </p>
                <div className="flex justify-between items-center">
                  <span className="flex items-center">
                    <img
                      src={profile}
                      className="rounded-[30%] w-6 xl:w-10 shadow-md dark:shadow-black/40"
                      alt="woman avatar"
                    />
                    <span className="flex-grow flex flex-col pl-2 xl:pl-4">
                      <span className="capitalize font-medium text-xs xl:text-base text-white">
                        {reviews.name}
                      </span>
                      {reviews.rating >= 3 ? (
                        <StarReviews rating={reviews.rating} size={15} />
                      ) : (
                        <BadStarReviews rating={reviews.rating} size={15} />
                      )}
                    </span>
                  </span>
                  <span className="xl:text-xs text-[.7rem] leading-[1rem] text-gray-300 self-end">
                    {new Date(reviews.time).toLocaleTimeString()},
                    {new Date(reviews.time).toDateString()}
                  </span>
                </div>
              </div>
            </aside>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Opinion;

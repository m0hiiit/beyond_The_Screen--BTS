import picture from "../images/skeleton-image.svg";

const arr = [1, 1, 1, 1];
const MovieListSkeleton = ({movieDetails}) => {
  return (
    <>
      {arr.map((val, id) => (
        <article
          className="rounded-xl bg-gray-500 p-2 sm:p-3 shadow-lg z-0 animate-pulse "
          key={id}
        >
          <div className=" flex items-center overflow-hidden sm:h-[21.5rem] h-[13rem] rounded-xl ">
            <img
              src={picture}
              alt="Movie Poster"
              className="rounded-xl bg-slate-400"
            />
          </div>
          <div className="mt-3 pt-1 px-1">
            <h2 className="h-2 font-bold bg-[#474f5f] rounded-lg"></h2>
            <p className="mt-2 w-20 sm:mt-3 sm:w-40 text-sm h-2 bg-[#474f5f] font-medium rounded-lg"></p>
          </div>
          <div className="flex pb-1 px-1 justify-between">
            <p className="mt-2 w-12 sm:mt-3 sm:w-20 text-sm h-2 bg-[#474f5f] font-medium rounded-lg"></p>
            <p className="mt-2 sm:mt-3 h-3 w-3 text-sm bg-[#474f5f] font-medium rounded-full"></p>
          </div>
        </article>
      ))}
    </>
  );
};

export default MovieListSkeleton;

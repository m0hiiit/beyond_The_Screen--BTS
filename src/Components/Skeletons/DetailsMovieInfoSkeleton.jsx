import picture from "../images/skeleton-image.svg";

const DetailsMovieInfoSkeleton = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden animate-pulse">
      <div className="container px-5 pt-6 lg:pt-[4.5rem] mx-auto ">
        <div className="lg:w-4/5 mx-auto flex items-start flex-wrap">
          <img
            src={picture}
            alt=""
            className="lg:w-1/2 w-full h-[28rem] object-cover object-center lg:h-full rounded-lg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-8 lg:mt-8 self-start">
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-4 mt-4"></div>
            <h2 className="text-sm title-font text-gray-400 tracking-widest">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-52 mb-4"></div>
            </h2>
            <h1 className="text-[#8c4fff] text-3xl title-font font-medium mb-1">
              <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[21rem] lg:max-w-[25rem] mb-2.5"></div>
            </h1>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-4 mt-4"></div>
            <p className="leading-relaxed text-gray-400 h-[0rem] sm:h-[5rem] mt-2 scrollClass flex justify-center ">
              <span className="invisible">
                A twisted tale of two estranged sisters whose reunion is cut
                short by the rise of flesh-possessing demons, thrusting them
                into a primal battle for survival as they face the most
                nightmarish version of family imaginable.
              </span>
            </p>
            <div className="flex items-center pb-5 border-b-2 border-gray-400 mb-5"></div>
            <div className="flex justify-between ">
              <div className="flex gap-1">
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-8 mb-4"></div>
              </div>

              <button className="rounded-full w-10 h-10 bg-gray-600 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"></button>
            </div>
            <div className="relative flex h-10 w-full min-w-[200px] max-w-full">
              <input
                readOnly
                type="email"
                disabled
                className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 dark:bg-gray-800 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <button
                disabled
                className="!absolute right-1 top-1 self-center z-10 select-none rounded dark:bg-gray-700 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 cursor-pointer"
                type="button"
                data-ripple-light="true"
              >
                <span className="invisible"> Submit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsMovieInfoSkeleton;

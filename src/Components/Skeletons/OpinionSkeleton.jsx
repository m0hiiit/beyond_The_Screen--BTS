const OpinionSkeleton = () => {
  return (
    <section className="px-4 mt-5 body-font flex justify-center py-5 !h-[38rem] md:!h-[30rem] overflow-y-scroll animate-pulse">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4">
          <aside className="px-1 py-2 sm:px-2 w-full">
            <div className="h-full bg-gray-600 p-5 rounded">
              <p className="leading-relaxed mb-6 text-white capitalize invisible">
                Lorem ipsum, dolor sit amet
              </p>
              <div className="flex justify-between items-center">
                <span className="flex items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKZbcVtvtJKKvj5jnN11zgX82gll4TsnmFg"
                    className="rounded-[30%] 
                   invisible w-10 shadow-md dark:shadow-black/40"
                    alt="woman avatar"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span
                      className="capitalize title-font 
                   invisible font-medium text-white"
                    >
                      ghftjgkhlh
                    </span>
                  </span>
                </span>
                <span
                  className="text-[.7rem] leading-[1rem]
               invisible  text-gray-300 self-end"
                >
                  wfwfgwergdfw
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default OpinionSkeleton;

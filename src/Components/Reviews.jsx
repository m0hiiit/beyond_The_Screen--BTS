import { useState, useEffect } from "react";
import ReactStars from "react-stars";
import Loader from "./SubComponents/Loader";
import OpinionSkeleton from "../Components/Skeletons/OpinionSkeleton";
import {
  addDoc,
  doc,
  query,
  updateDoc,
  where,
  getDocs,
} from "firebase/firestore";
import { moviesReviewREF, dataBase } from "../Firebase/Firebase";
import Opinion from "./SubComponents/Opinion";
import { useContext } from "react";
import { context } from "../App";
import ToastContainerFunc, { ToastSuccess, ToastError } from '../Components/SubComponents/Toast/ToastContainerFunc';
import { useNavigate } from "react-router-dom";


const Reviews = ({ movieID, star, user }) => {
  const navigate = useNavigate()
  const { userName, userLogin } = useContext(context)
  const [reviewsSkeleton, setReviewsSkeleton] = useState(false);
  const [starsReviews, setStarsReviews] = useState(0);
  const [loaderState, setLoaderState] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);
  const [inputReviews, setInputReviews] = useState("");
  const [notLoadingReviews, setNotLoadingReviews] = useState(0);

  const handleClick = async () => {
    setLoaderState(true);
    try {
      if (userLogin) {
        await addDoc(moviesReviewREF, {
          movieID: movieID,
          name: userName,
          rating: starsReviews,
          reviews: inputReviews,
          time: new Date().getTime(),
        })
        const properDOC = doc(dataBase, "movieData", movieID);
        await updateDoc(properDOC, {
          starRating: star + starsReviews,
          totalUsers: user + 1,
        });
        ToastSuccess('Your Review is Successfull Added!!');
        setInputReviews("");
        setNotLoadingReviews(notLoadingReviews + 1)
        setStarsReviews(0);
      } else {
        navigate('/login')
      }
    } catch (error) {
      ToastError("Something got Wrong Please Try agian later!!!");
    }
    setLoaderState(false);
  };

  useEffect(() => {
    const reviewQuery = async () => {
      setReviewsData([])
      try {
        setReviewsSkeleton(true);
        let qur = query(moviesReviewREF, where("movieID", "==", movieID));
        const queryShot = await getDocs(qur);
        queryShot.forEach((value) => {
          setReviewsData((prevState) => [...prevState, value.data()]);
        });
        setReviewsSkeleton(false);
      } catch (error) {
        ToastError("Something got Wrong Please Try agian later!!!");
      }
    };
    reviewQuery();
  }, [notLoadingReviews]);

  return (
    <>
      <div className="flex justify-between items-center px-1">
        <div className="flex items-center cursor-pointer mb-1">
          <span className="mt-[.2rem]">
            <ReactStars
              value={starsReviews}
              onChange={(event) => setStarsReviews(event)}
              size={30}
              color2="#FFA000"
              color1={"white"}
              half={true}
            />
          </span>
        </div>
        <button className="rounded-full w-10 h-10 bg-gray-300 p-0 border-0 inline-flex items-center justify-center text-gray-500 hover:text-[#ff0000] ml-4">
          <svg
            fill="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className="relative flex h-10 w-full min-w-[200px] max-w-full mt-5 px-1">
        <input
          type="email"
          className="peer capitalize h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-gray-400 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#8c4fff] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
          placeholder=" "
          required
          value={inputReviews}
          onChange={(e) => setInputReviews(e.target.value)}
        />
        <button
          disabled={(starsReviews && inputReviews) ? '' : 'disabled'}
          className="!absolute right-1 top-1 disabled:bg-gray-500 self-center z-10 select-none rounded bg-[#8c4fff] py-2 px-4 mx-1 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 cursor-pointer"
          type="button"
          data-ripple-light="true"
          onClick={handleClick}
        >
          {loaderState ? (
            <div className="flex justify-center w-full">
              <Loader
                size={
                  "h-[1rem] px-[.93rem] text-white animate-spin dark:text-black fill-white"
                }
              />
            </div>
          ) : (
            "Submit"
          )}
        </button>
        <label className=" before:content[' '] px-1 after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-red-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#8c4fff] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#8c4fff] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#8c4fff] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
          Review
        </label>
      </div>
      {reviewsSkeleton ? (
        <OpinionSkeleton />
      ) : (
        <Opinion reviewsData={reviewsData} />
      )}
      <ToastContainerFunc />
    </>
  );
};

export default Reviews;

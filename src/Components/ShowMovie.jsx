import { useEffect, useState } from "react";
import MoviesList from "./SubComponents/MoviesList";
import MovieListSkeleton from "./Skeletons/MovieListSkeleton";
import { getDocs } from "firebase/firestore";
import { moviesListREF } from "../Firebase/Firebase";
import ToastContainerFunc, { ToastError } from '../Components/SubComponents/Toast/ToastContainerFunc';

const ShowMovie = () => {
  const [skeletonLoading, setSkeletonLoading] = useState(false);
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    (() => {
      setSkeletonLoading(true);
      const getMoviesDetails = async () => {
        try {
          const responseGetMoviesDetails = await getDocs(moviesListREF);
          responseGetMoviesDetails.forEach((data) => {
            setMovieDetails((prevState) => [
              ...prevState,
              { ...(data.data()), id: data.id },
            ]);
          });
          setSkeletonLoading(false);
        } catch (error) {
          setSkeletonLoading(true);
          ToastError("Something got Wrong Please Try agian later!!!");
        }
      };
      getMoviesDetails();
    })();
  }, []);

  return (
    <section className="mx-auto grid max-w-[75rem] grid-cols-2 gap-4 sm:gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {skeletonLoading ? (
        <MovieListSkeleton />
      ) : (
        <MoviesList movieDetails={movieDetails} />
      )}
      <ToastContainerFunc />
    </section>
  );
};

export default ShowMovie;

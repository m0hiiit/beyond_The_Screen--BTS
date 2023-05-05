import { getDoc, doc } from "firebase/firestore";
import { dataBase } from "../Firebase/Firebase";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsMovieInfoSkeleton from "./Skeletons/DetailsMovieInfoSkeleton";
import DetailMovieInfo from "./SubComponents/DetailMovieInfo";
import ToastContainerFunc, {ToastError } from '../Components/SubComponents/Toast/ToastContainerFunc';

const DetailsMovieShow = () => {
  const { movieID } = useParams();
  const [detailsSkeleton, setDetailsSkeleton] = useState(false);
  const [moviesDetail, getMoviesDetails] = useState({
    title: "",
    image: "",
    year: "",
    description: "",
    starRating: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const movieIdData = async () => {
      setDetailsSkeleton(true);
      try {
        const earlyResponseMovieIdData = doc(dataBase, "movieData", movieID);
        const responseMovieIdData = await getDoc(earlyResponseMovieIdData);
        getMoviesDetails(responseMovieIdData.data());
        setDetailsSkeleton(false);
      } catch (error) {
        ToastError("Something got Wrong Please Try agian later!!!")
      }
    };
    movieIdData();
  }, []);

  return (
    <>
      {detailsSkeleton ? (
        <DetailsMovieInfoSkeleton />
      ) : (
        <DetailMovieInfo
          moviesDetail={moviesDetail}
          movieID={movieID} />
      )}
      <ToastContainerFunc />
    </>
  );
};

export default DetailsMovieShow;

import { useState } from "react";
import { addDoc } from "firebase/firestore";
import { moviesListREF } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import Loader from "./SubComponents/Loader";
import ToastContainerFunc, { ToastSuccess, ToastError } from '../Components/SubComponents/Toast/ToastContainerFunc';

const movieDlankData = {
  title: "",
  image: "",
  year: "",
  description: "",
  starRating: 0,
  totalUsers: 0,
};

const AddNewMovie = () => {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  const [movieDetails, setMovieDetails] = useState(movieDlankData);

  const handleClick = async () => {
    setLoader(true);
    try {
      await addDoc(moviesListREF, movieDetails);
      setMovieDetails(movieDlankData);
      ToastSuccess('Your Movie is Successfull Added!!');
      (() => {
        setTimeout(() => {
          navigate("/");
        }, 2200);
      })();
    } catch (error) {
      ToastError("Something got Wrong Please Try agian later!!!");
    }
    setLoader(false);
  };

  return (
    <div className="container sm:w-[83%] px-6 mx-auto ">
      <section className=" text-gray-800 mt-[1.5rem] sm:mt-[3rem]">
        <div
          style={{
            backgroundPosition: "50%",
            backgroundImage:
              "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cea6768a-2841-42e6-84d2-b32883c7d6da/decsx4s-0fd3a9fc-d074-44a6-969a-f1949f9fa163.png/v1/fill/w_1600,h_900/movie_posters_wallpaper_8k_by_dskstudiosl_decsx4s-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvY2VhNjc2OGEtMjg0MS00MmU2LTg0ZDItYjMyODgzYzdkNmRhXC9kZWNzeDRzLTBmZDNhOWZjLWQwNzQtNDRhNi05NjlhLWYxOTQ5ZjlmYTE2My5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.nqDRS6Z2VZMGfrD3Slp0p5B6OlLELAWd_EvadL60qk8')",
          }}
          className="relative h-[200px] overflow-hidden bg-no-repeat sm:h-[300px] bg-cover"
        ></div>
        <div className="container text-gray-800 px-4 md:px-12">
          <div
            className="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.3)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-5"></div>
            <div className="max-w-[700px] mx-auto">
              <div className="form-group mb-6">
                <input
                  required
                  value={movieDetails.title}
                  onChange={(e) =>
                    setMovieDetails({ ...movieDetails, title: e.target.value })
                  }
                  type="text"
                  className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              text-[#8c4fff]
              focus:text-[#8c4fff] focus:bg-white focus:border-[#fff] focus:outline-none changeplace"
                  id="exampleInput7"
                  placeholder="Movie Name"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  required
                  value={movieDetails.image}
                  onChange={(e) =>
                    setMovieDetails({ ...movieDetails, image: e.target.value })
                  }
                  type="text"
                  className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              text-[#8c4fff]
              focus:text-[#8c4fff] focus:bg-white focus:border-[#fff] focus:outline-none changeplace"
                  id="exampleInput7"
                  placeholder="Movie Image Url"
                />
              </div>
              <div className="form-group mb-6">
                <input
                  required
                  value={movieDetails.year}
                  onChange={(e) =>
                    setMovieDetails({ ...movieDetails, year: e.target.value })
                  }
                  type="number"
                  className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              text-[#8c4fff]
              focus:text-[#8c4fff] focus:bg-white focus:border-[#fff] focus:outline-none changeplace"
                  id="exampleInput8"
                  placeholder="Movie Year"
                />
              </div>
              <div className="form-group mb-6">
                <textarea
                  required
                  className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              text-[#8c4fff]
              focus:text-[#8c4fff] focus:bg-white focus:border-[#fff] focus:outline-none changeplace
            "
                  id="exampleFormControlTextarea13"
                  rows="3"
                  placeholder="Movie Description"
                  value={movieDetails.description}
                  onChange={(e) =>
                    setMovieDetails({
                      ...movieDetails,
                      description: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={[
                  movieDetails.title,
                  movieDetails.image,
                  movieDetails.year,
                  movieDetails.description,
                ].includes("")}
                onClick={handleClick}
                className={
                  "w-full px-6 py-2.5 bg-[#8c4fff] disabled:bg-gray-500 text-white  font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#762cff] hover:shadow-lg focus:bg-[#762cff] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#6f21ff] active:shadow-lg transition duration-150 ease-in-out"
                }
              >
                {loader ? (
                  <div className="flex justify-center">
                    <Loader
                      size={
                        "h-[1.75rem] text-white animate-spin dark:text-black fill-white"
                      }
                    />
                  </div>
                ) : (
                  <span className="text-lg">Add</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <ToastContainerFunc />
    </div>
  );
};

export default AddNewMovie;

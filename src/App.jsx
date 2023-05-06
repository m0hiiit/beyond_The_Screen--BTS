import Navbar from "../src/Components/Navbar";
import ShowMovie from "../src/Components/ShowMovie";
import AddNewMovie from "../src/Components/AddNewMovie";
import DetailsMovieShow from "./Components/DetailsMovieShow";
import ErrorPage from "../src/Components/ErrorPage";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";

const context = createContext();

function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  return (
    <>
      <context.Provider
        value={{ userLogin, setUserLogin, userName, setUserName }}
      >
        <Navbar />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <Routes>
                <Route path="/" element={<ShowMovie />} />
                {userLogin ? (
                  <Route path="/addnewmovie" element={<AddNewMovie />} />
                ) : (
                  <Route path="/" element={<ShowMovie />} />
                )}
                <Route
                  path="/detailsmovieinfo/:movieID"
                  element={<DetailsMovieShow />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </div>
          </div>
        </section>
      </context.Provider>
    </>
  );
}

export default App;
export { context };

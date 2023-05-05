import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { context } from "../App";

const Navbar = () => {
  const { userLogin } = useContext(context);
  return (
    <>
      <Box
        sx={{ flexGrow: 1 }}
        className="mt-5 mx-[5%] w-[90%] fixed z-10 2xl:w-[65%] 2xl:mx-[17.5%] shadow-2xl"
      >
        <AppBar position="static" className="rounded-[.8rem] ">
          <Toolbar className="rounded-lg bg-[#7F00FF] shadow-2xl">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Button
                variant="text"
                className="cursor-pointer"
                color="inherit"
                size="large"
              >
                <NavLink to={"/"} className="text-lg ">
                  ᗷ &nbsp; ੮ &nbsp; ᦓ
                </NavLink>
              </Button>
            </Typography>
            {userLogin ? (
              <Button color="inherit" className="btn">
                <NavLink to={"/addnewmovie"}>Add Movie</NavLink>
              </Button>
            ) : (
              <Button color="inherit" className="btn flex gap-5">
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;

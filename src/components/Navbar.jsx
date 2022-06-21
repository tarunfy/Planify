import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { handleOpen } = useContext(AuthContext);

  return (
    <div className="flex absolute top-0 left-0 w-full justify-between items-center px-36 py-5 z-30">
      <h1 className="text-4xl text-secondary-900 font-bold font-Helvetica-Now">
        Planify
      </h1>
      <div className="flex items-center space-x-10">
        <button
          onClick={() => handleOpen("login")}
          className="font-Helvetica-Now-Regular focus:outline-none text-primary-500 hover:text-primary-600 transition"
        >
          Login
        </button>
        <button
          onClick={() => handleOpen("signup")}
          className="px-8 py-2 bg-primary-500 focus:outline-none   font-Helvetica-Now-Regular text-white hover:bg-primary-600 transition"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

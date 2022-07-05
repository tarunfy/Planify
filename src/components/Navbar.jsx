import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Navbar = () => {
  const { signin } = useContext(AuthContext);

  return (
    <div className="flex absolute top-0 left-0 w-full justify-between items-center px-36 py-5 z-30">
      <h1 className="text-4xl text-secondary-900 font-bold font-Helvetica-Now">
        Planify
      </h1>
      <div className="flex items-center space-x-10">
        <button
          onClick={signin}
          className="font-Helvetica-Now-Regular focus:outline-none text-primary-500 hover:text-primary-600 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;

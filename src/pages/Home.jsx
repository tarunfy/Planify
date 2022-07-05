import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import heroImg from "../assets/images/meeting.jpeg";
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const { signin, authError } = useContext(AuthContext);

  if (authError) {
    toast.error(authError, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <Navbar />
      <div className="h-screen z-10 flex justify-between items-center pl-36">
        <div className="max-w-3xl space-y-5">
          <h1 className="text-7xl z-20 text-secondary-700 font-Helvetica-Now-Bold leading-[5rem]">
            The <span className="text-primary-500">scheduling</span> app your
            were waiting
            <span className="block">for.</span>
          </h1>
          <p className="max-w-2xl text-secondary-400 text-xl tracking-wider">
            Planify is a free appointment scheduling app that makes life easier.
            The app helps you effortlessly schedule appointments.
          </p>
          <button
            onClick={signin}
            className="text-white focus:outline-none bg-primary-500 hover:bg-primary-600 transition px-10 py-5 text-lg"
          >
            Sign up for free <ArrowRightAltRoundedIcon />
          </button>
        </div>
        <div>
          <img
            src={heroImg}
            alt="hero-img"
            className="hero-img h-[30rem] w-[60rem] object-cover"
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;

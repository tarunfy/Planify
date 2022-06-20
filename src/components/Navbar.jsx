const Navbar = () => {
  return (
    <div className="flex absolute top-0 left-0 w-full justify-between items-center px-36 py-5 z-30">
      <h1 className="text-4xl text-secondary-900 font-bold font-Helvetica-Now">
        Planify
      </h1>
      <div className="flex items-center space-x-10">
        <button className="font-Helvetica-Now-Regular text-primary-500 hover:text-primary-600 transition">
          Login
        </button>
        <button className="px-8 py-2 bg-primary-500 font-Helvetica-Now-Regular text-white hover:bg-primary-600 transition rounded-lg">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;

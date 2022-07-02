import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";

const EventCard = () => {
  return (
    <div className="bg-white border-t-4 border-t-primary-600 w-full p-5 rounded-sm shadow-md flex justify-center  items-center flex-col space-y-2">
      <div className="w-full space-y-2">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-Helvetica-Now-Bold text-3xl text-secondary-700">
            My Event
          </h1>
          <div>
            <EditIcon className="cursor-pointer" />
          </div>
        </div>
        <p className="font-Helvetica-Now-Regular  text-lg text-secondary-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          temporibus dolorum veritatis facilis! Illum fugiat a quaerat
          repellendus quasi.
        </p>
        <p className="font-Helvetica-Now-Regular text-base text-secondary-400">
          30 mins
        </p>
      </div>
      <div className="flex justify-end w-full">
        <button className=" border-primary-500 bg-transparent text-black hover:text-white hover:bg-primary-500 border-[1px]  text-base font-Helvetica-Now-Regular px-4 py-2 focus:outline-none flex items-center transition-colors duration-300 ease-in-out">
          View <RemoveRedEyeIcon className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;

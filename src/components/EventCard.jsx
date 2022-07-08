import ViewEventModal from "./ViewEventModal";

const EventCard = () => {
  return (
    <div className="bg-white border-t-4 border-t-primary-600 w-full p-5 rounded-md shadow-md flex justify-center  items-center flex-col space-y-2">
      <div className="w-full space-y-2">
        <h1 className="font-Outfit font-extrabold text-3xl text-secondary-700">
          My Event
        </h1>

        <p className="font-Outfit font-normal  text-lg text-secondary-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur
          temporibus dolorum veritatis facilis! Illum fugiat a quaerat
          repellendus quasi.
        </p>
        <p className="font-Outfit font-noraml text-base text-secondary-400">
          30 mins
        </p>
      </div>
      <div className="flex justify-end w-full">
        <ViewEventModal />
      </div>
    </div>
  );
};

export default EventCard;

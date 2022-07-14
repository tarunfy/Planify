import ViewEventModal from "./ViewEventModal";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white border-t-4 border-t-primary-600 w-full p-5 rounded-md shadow-md flex justify-center  items-center flex-col space-y-2">
      <div className="w-full space-y-2">
        <h1 className="font-Outfit font-extrabold text-3xl text-secondary-700">
          {event?.name}
        </h1>

        <p className="font-Outfit font-normal  text-lg text-secondary-500">
          {event?.description}
        </p>
        <p className="font-Outfit font-noraml text-base text-secondary-400">
          {event?.duration}
        </p>
      </div>
      <div className="flex justify-end w-full">
        <ViewEventModal event={event} />
      </div>
    </div>
  );
};

export default EventCard;

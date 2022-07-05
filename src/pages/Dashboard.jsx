import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

const Dashboard = () => {
  return (
    <>
      <div className="px-16 py-20">
        <div className="flex justify-between items-center mb-20">
          <h1 className="font-Outfit font-extrabold tracking-tight text-5xl">
            Your Plans
          </h1>
          <EventModal />
        </div>
        <div div className="w-full grid grid-cols-3 gap-5">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

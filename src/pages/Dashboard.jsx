import React from "react";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

const Dashboard = () => {
  return (
    <>
      <div className="px-16 py-20">
        <div className="flex justify-between items-center mb-20">
          <h1 className="font-Helvetica-Now-Medium tracking-tight text-5xl">
            Your Plans
          </h1>
          <EventModal />
        </div>
        <EventCard />
      </div>
    </>
  );
};

export default Dashboard;

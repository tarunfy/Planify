import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Booking = () => {
  const { currentUser } = useContext(AuthContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className="max-w-[800px] font-Outfit my-28 shadow-custom rounded-xl h-[500px] flex items-center justify-between max-h-screen mx-auto">
      <div className="w-2/5 p-10 bg-secondary-500 h-full rounded-tl-xl rounded-bl-xl">
        <img
          src={currentUser.user_metadata?.picture}
          alt="avatar"
          className="h-14 w-14 rounded-full mb-3"
        />
        <h1 className="text-xl font-medium text-white/90">
          {currentUser.user_metadata.name}
        </h1>
        <p className="text-lg text-white/80">
          {currentUser.user_metadata.email}
        </p>
      </div>
      <div className="w-[60%] p-10 h-full rounded-tr-xl rounded-br-xl space-y-6">
        <h1 className="text-2xl font-bold ">Select a Date</h1>
        <Calendar value={date} onChange={setDate} />
      </div>
    </div>
  );
};

export default Booking;

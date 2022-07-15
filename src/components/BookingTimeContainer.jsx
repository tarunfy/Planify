import BookingTimeCard from "./BookingTimeCard";
import moment from "moment";
import { useState } from "react";
import { useEffect } from "react";

const BookingTimeContainer = ({ date, daysData }) => {
  let oneDate = moment(date, "DD-MM-YYYY");
  let dayName = oneDate.format("dddd");

  const [timeslots, setTimeslots] = useState([]);

  useEffect(() => {
    createSlots();
  }, [date]);

  const createSlots = () => {
    const day = daysData[dayName.substring(0, 3).toLowerCase()];

    if (day !== null) {
      console.log("day", day);
      let initialTime = day.from;

      const [finHr, finMin] = day.to.split(":");
      const finalDateObj = new Date(new Date(date).setHours(finHr, finMin));

      const [hr, min] = initialTime.split(":");
      let dateObj = new Date(new Date(date).setHours(hr, min));

      const tsl = [];

      tsl.push(dateObj.toTimeString().substring(0, 5));

      while (moment(dateObj).isBefore(finalDateObj)) {
        dateObj = moment(dateObj).add(30, "m").toDate();
        tsl.push(dateObj.toTimeString().substring(0, 5));
      }

      tsl.pop();

      setTimeslots(tsl);
    } else {
      setTimeslots([]);
    }
  };

  return (
    <div className="transition-all duration-300 ease-in-out px-10  space-y-5">
      <h1 className="text-base font-light">{`${dayName},  ${date.getDate()}`}</h1>

      {timeslots.length > 0 ? (
        timeslots.map((ts) => <p>{ts}</p>)
      ) : (
        <p className="text-bold">Not Available</p>
      )}
    </div>
  );
};

export default BookingTimeContainer;

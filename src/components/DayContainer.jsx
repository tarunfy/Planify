import { useEffect, useState } from "react";
import TimePicker from "./TimePicker";

const DayContainer = ({ dayName, setDaysData }) => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [from, setFrom] = useState("12:00pm");
  const [to, setTo] = useState("5:00pm");

  useEffect(() => {
    setDaysData((d) => ({
      ...d,
      [dayName]: isAvailable ? { from, to } : null,
    }));
  }, [isAvailable, from, to]);

  return (
    <>
      <li className="li-availability">
        <div className="availability-input-wrapper">
          <input
            type="checkbox"
            name="day"
            id={dayName}
            checked={isAvailable}
            onChange={(e) => setIsAvailable(e.target.checked)}
            className="focus:outline-none"
          />
          <label htmlFor={dayName} className="availability-label">
            {dayName}
          </label>
        </div>
        {isAvailable ? (
          <TimePicker from={from} to={to} setFrom={setFrom} setTo={setTo} />
        ) : (
          <p className="text-sm font-Helvetica-Now-Light">Unavailable</p>
        )}
      </li>
    </>
  );
};

export default DayContainer;

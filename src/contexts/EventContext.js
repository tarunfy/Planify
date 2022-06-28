import { createContext, useState, useEffect } from "react";
import nProgress from "nprogress";
import { supabase } from "../utils/dbConfig";

export const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDuration, setEventDuration] = useState("");
  const [daysData, setDaysData] = useState({});

  useEffect(() => {
    console.log(daysData);
  }, [daysData]);

  const createEvent = async () => {
    nProgress.start();

    nProgress.done();
  };

  return (
    <EventContext.Provider
      value={{
        createEvent,
        eventName,
        setEventName,
        eventDescription,
        setEventDescription,
        eventDuration,
        setEventDuration,
        setDaysData,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

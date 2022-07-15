import { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import nProgress from "nprogress";
import { db } from "../utils/dbConfig";

export const EventContext = createContext(null);

export const EventProvider = ({ children }) => {
  const [isFetchingEvents, setIsFetchingEvents] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (currentUser) {
      fetchEvents();
    }
  }, []);

  const fetchEvents = async () => {
    setIsFetchingEvents(true);
    nProgress.start();
    let data = [];
    try {
      const res = await db
        .collection("users")
        .doc(currentUser.userId)
        .collection("events")
        .orderBy("timeStamp", "desc")
        .get();

      res.docs.map((event) => {
        data.push({ ...event.data(), eventId: event.id });
      });

      setEvents(data);
    } catch (err) {
      console.log(err.message);
    }
    nProgress.done();
    setIsFetchingEvents(false);
  };

  const createEvent = async (eventData) => {
    setIsLoading(true);
    nProgress.start();
    let error;
    try {
      await db
        .collection("users")
        .doc(currentUser.userId)
        .collection("events")
        .add(eventData);
    } catch (err) {
      error = err.message;
    }
    fetchEvents();
    nProgress.done();
    setIsLoading(false);
    return {
      error: error ? error : null,
    };
  };

  const deleteEvent = async () => {};

  return (
    <EventContext.Provider
      value={{
        isFetchingEvents,
        isLoading,
        createEvent,
        fetchEvents,
        deleteEvent,
        events,
      }}
    >
      {!isLoading && children}
    </EventContext.Provider>
  );
};
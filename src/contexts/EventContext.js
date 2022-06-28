import { createContext, useState, useEffect } from "react";
import nProgress from "nprogress";
import { supabase } from "../utils/dbConfig";

export const EventContext = createContext(null);

export default EventProvider = ({ children }) => {
  return <EventContext.Provider value={{}}>{children}</EventContext.Provider>;
};

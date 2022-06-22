import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import React from "react";

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser.id}</div>;
};

export default Dashboard;

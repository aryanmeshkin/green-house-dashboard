import React, { createContext, useContext, useEffect, useState } from "react";
import { createWebSocket } from "../../../api/socket";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const [lastTen, setLastTen] = useState("");
  const [sensorData, setSensorData] = useState("");
  useEffect(() => {
    const w1 = createWebSocket("https://37.152.181.124/sensor-data", (data) => {
      setSensorData(data);
    });
    const w2 = createWebSocket(
      "https://37.152.181.124/sensor-last10",
      (data) => {
        setLastTen(data);
      }
    );
    return () => {
      w1.close();
      w2.close();
    };
  }, []);

  return (
    <DashboardContext.Provider value={{ lastTen, sensorData }}>
      {children}
    </DashboardContext.Provider>
  );
}

const useDashboardContext = () => {
  return useContext(DashboardContext);
};

export default DashboardProvider;

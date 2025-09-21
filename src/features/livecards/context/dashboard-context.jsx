import React, { createContext, useContext, useEffect, useState } from "react";
import { createSocket } from "../../../api/socket";
import { getControl } from "../../../api/api";
import useAxiosPrivate from "../../identity/hooks/useAxiosPrivate";
import { useTokenContext } from "../../identity/token-context/token-context";

const DashboardContext = createContext();

function DashboardProvider({ children }) {
  const axiosPrivate = useAxiosPrivate();
  const { accessToken, setAccessToken } = useTokenContext();
  const [lastTen, setLastTen] = useState("");
  const [sensorData, setSensorData] = useState("");
  const [contolData, setControlData] = useState("");
  useEffect(() => {
    if (!accessToken) {
      console.log("اکسس نبود");
      return;
    }

    // فراخوانی تابع createSocket به جای نوشتن مستقیم socket.io
    const sensorSocket = createSocket(
      "http://37.152.181.124:2000",
      (data) => setSensorData(data),
      accessToken
    );

    const lastTenSocket = createSocket(
      "http://37.152.181.124:2000",
      (data) => setLastTen(data),
      accessToken
    );

    // گرفتن control data با axiosPrivate
    const fetchControlData = async () => {
      try {
        const res = await axiosPrivate.get("/get-control");
        setControlData(res.data);
      } catch (err) {
        console.error("Failed to fetch control data:", err);
      }
    };

    fetchControlData();

    // Cleanup هنگام unmount
    return () => {
      sensorSocket.close();
      lastTenSocket.close();
    };
  }, [accessToken, axiosPrivate]);

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

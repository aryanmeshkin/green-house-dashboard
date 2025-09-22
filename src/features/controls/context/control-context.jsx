import React, { createContext, useContext, useEffect } from "react";
import { useAppContext } from "../../../contexts/app-contexts";
import useAxiosPrivate from "../../identity/hooks/useAxiosPrivate";
const ControlContext = createContext();
function ControlProvider({ children }) {
  const axiosPrivate = useAxiosPrivate();
  
  const { fanState, pumpState, lampState, valveState } = useAppContext();

  useEffect(() => {
    const sendUpdate = async () => {
      try {
        await axiosPrivate.post("/set-control", {
          fan: fanState ? 1 : 0,
          lamp: lampState ? 1 : 0,
          pump: pumpState ? 1 : 0,
          valve: valveState ? 1 : 0,
        });
        console.log("States sent to backend ✅");
      } catch (error) {
        console.error("Error sending states ❌", error);
      }
    };

    sendUpdate();
  }, [fanState, pumpState, lampState, valveState]);

  return (
    <ControlContext.Provider >{children}</ControlContext.Provider>
  );
}

const useDashboardContext = () => {
  return useContext(ControlContext);
};

export default ControlProvider;

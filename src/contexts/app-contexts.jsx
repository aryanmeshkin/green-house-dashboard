import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import appReducer from "./app-reducer";
const AppContext = createContext();
const initialState = {
  fanState: false,
  pumpState: false,
  ledState: false,
  powerState: false,
  menuState: false,
  modeState:
    localStorage.getItem("mode") !== null
      ? JSON.parse(localStorage.getItem("mode"))
      : false,
};
import React from "react";
import useAxiosPrivate from "../features/identity/hooks/useAxiosPrivate";
import { useTokenContext } from "../features/identity/token-context/token-context";

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [controlData, setControlData] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const { accessToken, setAccessToken } = useTokenContext();
  useEffect(() => {
    if (!accessToken) return;

    const fetchControlData = async () => {
      try {
        const res = await axiosPrivate.get("/get-control");
        setControlData(res.data);

        // ست کردن مقادیر اولیه با payload
        if (res.data.fan !== undefined)
          dispatch({ type: "FANSTATE", payload: !!res.data.fan });
        if (res.data.pump !== undefined)
          dispatch({ type: "PUMPSTATE", payload: !!res.data.pump });
        if (res.data.led !== undefined)
          dispatch({ type: "LEDSTATE", payload: !!res.data.led });
        if (res.data.power !== undefined)
          dispatch({ type: "POWERSTATE", payload: !!res.data.power });
      } catch (err) {
        console.error("Failed to fetch control data:", err);
      }
    };

    fetchControlData();
  }, [axiosPrivate, accessToken]);

  const changefanState = () => {
    dispatch({ type: "FANSTATE" });
  };
  const changepumpState = () => {
    dispatch({ type: "PUMPSTATE" });
  };
  const changeledState = () => {
    dispatch({ type: "LEDSTATE" });
  };
  const changepowerState = () => {
    dispatch({ type: "POWERSTATE" });
  };
  const changeMenuState = () => {
    dispatch({ type: "MENUTOGGLE" });
  };
  const changeMode = () => {
    dispatch({ type: "MODE" });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changefanState,
        changepumpState,
        changeledState,
        changepowerState,
        changeMenuState,
        changeMode,
        setControlData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };

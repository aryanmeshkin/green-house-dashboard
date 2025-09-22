import axios from "axios";
import { useTokenContext } from "../token-context/token-context";
import api from "../../../api/api";
const useRefreshToken = () => {
  const { accessToken, setAccessToken } = useTokenContext();
  const refresh = async () => {
    const response = await api.get("/auth/refresh");
    console.log(response);
    const newAccessToken = response.data.accessToken;
    setAccessToken(newAccessToken);
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;

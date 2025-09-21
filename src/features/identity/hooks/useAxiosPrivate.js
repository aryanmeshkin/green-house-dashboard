import { axiosPrivate } from "../../../api/api";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
import { useTokenContext } from "../token-context/token-context";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { accessToken, setAccessToken } = useTokenContext();
  useEffect(() => {
    // making interceptor request

    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error)
    );
    // making interceptor response
    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;
        if (error?.response?.status === 401 && !prevRequest?.sent) {
          prevRequest.sent = true;
          try {
            const newToken = await refresh();
            prevRequest.headers['Authorization'] = `Bearer ${newToken}`;
            return axiosPrivate(prevRequest);
          } catch (err) {
            setAccessToken(null);  
            navigate("/login", { replace: true })
            return Promise.reject(err);
          }
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [refresh, accessToken]);
  return axiosPrivate;
};

export default useAxiosPrivate;

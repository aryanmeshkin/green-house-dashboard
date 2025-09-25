import { axiosPrivate } from "../../../api/api";
import { useEffect } from "react";
import { useTokenContext } from "../token-context/token-context";

const useAxiosPrivate = () => {
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
      (response) => {
        if (response.status === 202) {
          const newAccessToken = response?.data?.accessToken;
          if (newAccessToken && !response.config._retry) {
            setAccessToken(newAccessToken);
            response.config._retry = true;
            response.config.headers[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
            return axiosPrivate(response.config);
          }
        }
        return response;
      },
      async (error) => {
        const status = error?.response?.status;

        // ❌ اگر 401 بود → برو صفحه لاگین
        if (status === 401) {
          setAccessToken(null);
          window.location.replace("/login");
        }

        return Promise.reject(error);
      }
    );
    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken]);
  return axiosPrivate;
};

export default useAxiosPrivate;

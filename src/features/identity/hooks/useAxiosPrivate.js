import { axiosPrivate } from "../../../api/api";
import { useEffect } from "react";
import { useTokenContext } from "../token-context/token-context";

const useAxiosPrivate = (onUnauthorized) => {
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
        console.log(response);
        if (response.status === 202) {
          const newAccessToken = response?.data?.accessToken;
          if (newAccessToken) {
            setAccessToken(newAccessToken);

            axiosPrivate.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${newAccessToken}`;
          }
        }
        return response;
      },
      async (error) => {
        const status = error?.response?.status;
        console.log(status);
        // ❌ اگر 401 بود → برو صفحه لاگین
        if (status === 401) {
          setAccessToken(null);
          onUnauthorized()
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

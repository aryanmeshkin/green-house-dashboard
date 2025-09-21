import { useEffect, useState } from "react";

import useRefreshToken from "../hooks/useRefreshToken";
import { useTokenContext } from "../token-context/token-context";

import { useNavigate } from "react-router";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function AccessDashboard({ children }) {
  const { accessToken, setAccessToken } = useTokenContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
   const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    if (!accessToken) {
      setLoading(false);
      navigate("/login", { replace: true });
      return;
    }

    const verifyAccess = async () => {
      try {
        const response = await axiosPrivate.get("/sensor-summary");

        setAuthorized(true);
      } catch (err) {
        setAccessToken(null);
        navigate("/login", { replace: true });
      }finally{
        setLoading(false)
      }
    };

    verifyAccess();
  }, [accessToken, navigate, axiosPrivate, setAccessToken]);

  if (loading) return <div>در حال بررسی اعتبار توکن...</div>;
  if (!authorized) return null;

  return children;
}

export default AccessDashboard;

import { useEffect, useState } from "react";


import { useTokenContext } from "../token-context/token-context";

import { useNavigate } from "react-router";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

function AccessDashboard({ children }) {
  const { accessToken, setAccessToken } = useTokenContext();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const verifyAccess = async () => {
      try {
        console.log("📤 Sending verify request...");
        const response = await axiosPrivate.get(
          "/get-control"
        );
        console.log("✅ verifyAccess success:", response.data);

        setAuthorized(true);
      } catch (err) {
        console.error("❌ verifyAccess failed:", err);
        setAccessToken(null);
        window.location.replace("/login");
      } finally {
        console.log("⏳ verifyAccess finished");
        setLoading(false);
      }
    };

    verifyAccess();
  }, [accessToken, navigate, axiosPrivate, setAccessToken]);

  if (loading) return <div>در حال بررسی اعتبار توکن...</div>;
  if (!authorized) return null;

  return children;
}

export default AccessDashboard;

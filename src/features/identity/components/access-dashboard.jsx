import { useNavigate } from "react-router";
import { useTokenContext } from "../token-context/token-context";
import { useEffect } from "react";

function AccessDashboard({children}) {
  const navigate = useNavigate();
  const { accessToken, setAccessToken } = useTokenContext();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem("token", accessToken);
    }
  }, [accessToken]);
  useEffect(()=>{
    if (!token && !accessToken) {
      navigate("/login");
    }
  },[token,accessToken])

  return children ;
}

export default AccessDashboard;

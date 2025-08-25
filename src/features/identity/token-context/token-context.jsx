import { createContext, useContext, useState } from "react";

const TokenContext = createContext();

function TokenProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null);
  return (
    <TokenContext.Provider value={{accessToken, setAccessToken}}>
      {children}
    </TokenContext.Provider>
  );
}
const useTokenContext = () => {
  return useContext(TokenContext);
};
export { TokenProvider, useTokenContext };

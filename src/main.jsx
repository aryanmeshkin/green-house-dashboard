import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./contexts/app-contexts.jsx";
import { TokenProvider } from "./features/identity/token-context/token-context.jsx";


createRoot(document.getElementById("root")).render(
  
    <TokenProvider>
  <AppProvider>
      <App />
  </AppProvider>
    </TokenProvider>
);

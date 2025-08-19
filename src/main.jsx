import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppContextProvider } from "./AppContext.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import "animate.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);

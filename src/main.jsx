import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ObjectProvider } from "./contexts/ObjectContext.jsx";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ObjectProvider>
      <App />
    </ObjectProvider>
  </StrictMode>,
);

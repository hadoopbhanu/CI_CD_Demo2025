import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Import Tailwind CSS from CDN (No need for index.html)
const tailwindLink = document.createElement("link");
tailwindLink.rel = "stylesheet";
tailwindLink.href =
  "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css";
document.head.appendChild(tailwindLink);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

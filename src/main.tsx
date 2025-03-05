import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

try {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    console.error("Root element not found");
    throw new Error("No root element");
  }

  window.addEventListener("error", (event) => {
    console.error("Uncaught error:", event.error);
  });

  console.log("Rendering React app");
  const root = createRoot(rootElement);
  root.render(<App />);
} catch (error) {
  console.error("Rendering error:", error);
  document.body.innerHTML = `<h1>Rendering Error: ${error.message}</h1>`;
}

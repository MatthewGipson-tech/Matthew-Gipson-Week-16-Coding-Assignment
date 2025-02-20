import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
      children: [ 
        {
          path: "/",
          element: <HomePage />
  },
  {
    path:"/things-to-do",
    element: <thingsToDo/>
  }
]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
  
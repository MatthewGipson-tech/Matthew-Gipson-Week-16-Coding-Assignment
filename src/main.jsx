import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home.jsx";
import ToDoPage from "./components/ToDoPage.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
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
  
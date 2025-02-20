import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <Link to="/">Home</Link>
      <Link to="/things-to-do">Things to do</Link>Home
      <Outlet/>
      </div>,
      children: [ ]
        
  },
  {
    path: "/",
    element: <div>
      <Link to="/">Home</Link>
      <Link href="/things-to-do">Things to do</Link>
      Home</div>
  },
  {
    path:"/things-to-do",
    element: <div>
      <Link to="/">Home</Link>
      What to do?</div>
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
  
import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard";
// import ErrorPage from "./pages/ErrorPage";
// import { useBackendApi } from "./services/api/useBackendApi";

// function loader() {
//   const { error } = useBackendApi("user/13");
//   if (error) {
//     throw new Response("Not Found", { status: 404 });
//   }
// }

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
    // loader: loader,
    // errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./route/App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./route/Home.jsx";
import Bag from "./route/Bag.jsx";
import {Provider} from "react-redux";
import myntaraStore from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag/> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntaraStore}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);

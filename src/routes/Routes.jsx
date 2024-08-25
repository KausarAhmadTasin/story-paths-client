import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/Home/Home";
import Stories from "../layouts/Stories/Stories";
import Write from "../layouts/Write/Write";
import MyStories from "../layouts/MyStories/MyStories";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/stories",
        element: <Stories />,
        loader: () => fetch("http://localhost:5000/api/stories"),
      },
      {
        path: "/write",
        element: (
          <PrivateRoutes>
            <Write />
          </PrivateRoutes>
        ),
      },
      {
        path: "/myStories",
        element: <MyStories />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;

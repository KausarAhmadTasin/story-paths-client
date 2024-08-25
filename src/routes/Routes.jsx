import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/Home/Home";
import Stories from "../layouts/Stories/Stories";
import Write from "../layouts/Write/Write";
import MyStories from "../layouts/MyStories/MyStories";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Story from "../layouts/Story/Story";
import NotFound from "../layouts/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://story-paths-server.vercel.app/api/stories"),
      },
      {
        path: "/stories",
        element: <Stories />,
        loader: () =>
          fetch("https://story-paths-server.vercel.app/api/stories"),
      },
      {
        path: "/stories/:id",
        element: <Story />,
        loader: ({ params }) =>
          fetch(
            `https://story-paths-server.vercel.app/api/stories/${params.id}`
          ),
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
        element: (
          <PrivateRoutes>
            <MyStories />
          </PrivateRoutes>
        ),
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

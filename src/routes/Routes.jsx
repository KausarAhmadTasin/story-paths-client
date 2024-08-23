import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../layouts/Home/Home";
import Stories from "../layouts/Stories/Stories";
import Write from "../layouts/Write/Write";
import MyStories from "../layouts/MyStories/MyStories";

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
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/myStories",
        element: <MyStories />,
      },
    ],
  },
]);

export default router;

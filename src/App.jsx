import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./sections/Home";
import Destination from "./sections/Destination";
import Crew from "./sections/Crew";
import Technology from "./sections/Technology";
import Root from "./Root";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/destination",
          element: <Destination></Destination>,
        },
        {
          path: "/crew",
          element: <Crew></Crew>,
        },
        {
          path: "/technology",
          element: <Technology></Technology>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;

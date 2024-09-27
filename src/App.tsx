import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/home";
import DetailPage from "./page/detail";
import Favourite from "./page/Favourite";
import { Root } from "./Root";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Root />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/detail/:id",
            element: <DetailPage />,
          },
          {
            path: "/favourite",
            element: <Favourite />,
          },
        ],
      },
    ],
    { basename: import.meta.env.DEV ? "/" : "/React-Marvel-Comics-API/" }
  );

  return <RouterProvider router={router} />;
}

export default App;

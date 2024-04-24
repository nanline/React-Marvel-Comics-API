import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/home";
import DetailPage from "./page/detail";
import Favourite from "./page/Favourite";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
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
    { basename: import.meta.env.DEV ? "/" : "/React-Marvel-Comics-API/" }
  );

  return (
    <div className="bg-[url('/images/waldemar-eIOPDU3Fkwk-unsplash1.jpg')] max-h-[100%] max-w-[100%]">
      <div className="flex justify-center">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/home";
import DetailPage from "./page/detail";
import Favourite from "./page/Favourite";
import NavBar from "./component/Item/navBar";

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
    <div className="bg-[url('/images/dev-d2Py_uhXJQo-unsplash.jpg')] bg-cover bg-cente w-screen min-h-[980px]">
      <div className="flex justify-center">
        <NavBar />
      </div>
      <div className="flex justify-center ">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import NavBar from "./component/Item/navBar";

export function Root() {
  return (
    <div className="bg-[url('/images/dev-d2Py_uhXJQo-unsplash.jpg')] bg-cover bg-cente w-screen min-h-[980px]">
      <div className="flex justify-center">
        <NavBar />
      </div>
      <div className="flex justify-center ">
        <Outlet />
      </div>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";
import AsideNav from "../Navigation/AsideNav";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <AsideNav />
        <div className="lg:mt-14 overflow-scroll h-screen p-8 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default RootLayout;

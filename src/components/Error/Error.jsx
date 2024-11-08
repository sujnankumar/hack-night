import Navbar from "../Navigation/Navbar";
import AsideNav from "../Navigation/AsideNav";

const Error = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <AsideNav />
        <div className="lg:mt-14 overflow-scroll h-screen p-8 w-full">
          <h1 className="text-xl text-center">404</h1>
          <h1 className="text-xl text-center">Page not found</h1>
        </div>
      </div>
    </>
  );
};
export default Error;

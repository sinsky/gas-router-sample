import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col my-4 border-b">
        <div className="font-bold text-blue-800 font-xl">Nav</div>
        <div className="flex my-4 border-b"></div>
      </div>
      <Outlet />
    </>
  );
};

import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { PathProps } from "./App";

export const Layout = ({ paths }: { paths: PathProps[] }) => {
  const navItems = paths.map((path) => (
    <NavLink
      key={path.path}
      to={path.path}
      className={({ isActive }) =>
        (isActive
          ? "cursor-pointer pointer-events-none text-white border-green-400 bg-green-600"
          : "text-blue-500 border-blue-600 hover:text-blue-600 hover:border-blue-700") + " border"
      }
      end
    >
      <div className="px-4 py-2">{path.title}</div>
    </NavLink>
  ));
  // navigateを定義
  const navigate = useNavigate();
  // GASの初回アクセス時にhost側でURL指定があればそのページに遷移
  useEffect(() => {
    if (window.google)
      google.script.url.getLocation(({ hash }) => {
        if (hash) navigate(hash);
      });
  }, []);
  return (
    <>
      <div className="flex flex-col my-4 border-b">
        <div className="font-bold text-blue-800 font-xl">Nav</div>
        <div className="flex mt-4">{navItems}</div>
      </div>
      <Outlet />
    </>
  );
};

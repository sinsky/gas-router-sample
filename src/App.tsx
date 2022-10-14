import { useState } from "react";
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./Layout";

export type PathProps = {
  path: string;
  title: string;
};

const paths = [
  { path: "/", title: "Home" },
  { path: "/test", title: "Test" },
  { path: "/wait", title: "Wait" },
];

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout paths={paths} />}>
        <Route index element={<h1 className="text-slate-800">Home</h1>} />
        <Route path="test" element={<h1 className="text-green-800">Test</h1>} />
        <Route path="wait" element={<>wait</>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

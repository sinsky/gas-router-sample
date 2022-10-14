import { useState } from "react";
import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from "react-router-dom";
import { Layout } from "./Layout";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<h1 className="text-slate-800">Home</h1>} />
        <Route path="test" element={<h1 className="text-green-800">Test</h1>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

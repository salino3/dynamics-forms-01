import React, { JSX } from "react";
import { Routes, Route } from "react-router-dom";
import { routesApp } from "./interface";

interface PropsRoutes {
  path: string;
  element: JSX.Element;
  visibility?: "public" | "private" | "restricted" | "admin";
}

export const AppRouter: React.FC = () => {
  const routes: PropsRoutes[] = [
    {
      path: routesApp?.root,
      element: <></>,
      visibility: "public",
    },
  ];

  return (
    <Routes>
      {routes &&
        routes?.length > 0 &&
        routes.map(({ path, element }) => {
          return <Route path={path} element={element} />;
        })}
    </Routes>
  );
};

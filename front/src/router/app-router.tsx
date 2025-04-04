import React, { JSX } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ContainerLayout } from "../layout";
import { routesApp } from "./interface";
import { HomePage } from "../pods";

interface PropsRoutes {
  path: string;
  element: JSX.Element;
  visibility?: "public" | "private" | "restricted" | "admin";
}

export const AppRouter: React.FC = () => {
  const routes: PropsRoutes[] = [
    {
      path: routesApp?.root,
      element: <HomePage />,
      visibility: "public",
    },
    {
      path: routesApp?.token,
      element: <HomePage />,
      visibility: "public",
    },
    {
      path: routesApp?.error404,
      element: <Navigate to={routesApp?.root} />,
      visibility: "public",
    },
  ];

  return (
    <ContainerLayout>
      <Routes>
        {routes &&
          routes?.length > 0 &&
          routes.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />;
          })}
      </Routes>
    </ContainerLayout>
  );
};

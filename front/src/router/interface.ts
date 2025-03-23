interface Routes {
  root: string;
  token: string;
  error404: string;
}

export const routesApp: Routes = {
  root: "/",
  token: "/:token",
  error404: "*",
};

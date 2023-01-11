import { useRoutes } from "react-router";
import HomePage from "../pages/User/HomePage";
import PageNotFound from "../pages/User/PageNotFound";
import SettingsPage from "../pages/User/SettingsPage";

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const AppRoutes = () => {
  return useRoutes(publicRoutes);
};

export default AppRoutes;

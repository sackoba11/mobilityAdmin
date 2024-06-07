import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import HomePage from "../views/Home-page/HomePage";
import ErrorPage from "../views/Error-Page/ErrorPage";
import BusPage from "../views/Bus-page/BusPage";
import DriverPage from "../views/Driver-page/DriverPage";
import UserPage from "../views/User-page/UserPage";
import Gares from "../views/Gares/Gares";
import { DriversDataState } from "../Data/data_remote/DriverData";
import { BusDataState } from "../Data/data_remote/busData";
import { StationDataState } from "../Data/data_remote/StationData";
import { UsersDataState } from "../Data/data_remote/UsersData";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "bus",
        loader: BusDataState.loaderBus,
        element: <BusPage />,
      },
      {
        path: "drivers",
        loader: DriversDataState.loaderDriver,
        element: <DriverPage />,
      },
      {
        path: "gares",
        loader: StationDataState.loaderStation,
        element: <Gares />,
      },
      {
        path: "users",
        loader: UsersDataState.loaderUsers,
        element: <UserPage />,
      },
    ],
  },
]);

export default AppRoutes;

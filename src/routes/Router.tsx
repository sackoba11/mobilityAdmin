import { createBrowserRouter } from "react-router-dom";
import Root from "../views/Root";
import HomePage from "../views/Home-page/HomePage";
import ErrorPage from "../views/Error-Page/ErrorPage";
import BusPage from "../views/Bus-page/BusPage";
import DriverPage from "../views/Driver-page/DriverPage";
import UserPage from "../views/User-page/UserPage";
import Gares from "../views/Gares/Gares";


const AppRoutes = createBrowserRouter(
    
    [
    
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage key={0}/>,
       
      },
      {
        path: "bus",
        element: <BusPage key={1}/>,
     
      },
      {
        path: "drivers",
        element: <DriverPage key={2}/>,
       
      },
      {
        path: "users",
        element: <UserPage  key={3}/>,
        
      },
      {
        path: "gares",
        element: <Gares key={4}/>,
      
      },
    ],
  },
]);

export default AppRoutes;

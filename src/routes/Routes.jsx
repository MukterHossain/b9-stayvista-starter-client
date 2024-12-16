import {
  createBrowserRouter,} from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage";
import SignUp from "../pages/SignUp/SignUp";
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Statistics from "../pages/Dashboard/Common/Statistics";
import AddRoom from "../pages/Dashboard/Host/AddRoom";
import MyListings from "../pages/Dashboard/Host/MyListings";
import Profile from "../pages/Dashboard/Common/Profile";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      }
    ],
  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/signup',
    element: <SignUp></SignUp>
  },
  {
    path:'/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index:true,
        element: <Statistics></Statistics>
      },
      {
        path:'add-room',
        element: <AddRoom></AddRoom>
      },
      {
        path:'my-listings',
        element: <MyListings></MyListings>
      },
      {
        path:'manage-users',
        element: <ManageUsers></ManageUsers>
      },
      {
        path:'profile',
        element: <Profile></Profile>
      }
    ]
  }
]);
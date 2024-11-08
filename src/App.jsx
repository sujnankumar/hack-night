import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/Error";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import StudentSignup from "./components/Auth/StudentSignup";
import CollegeSignup from "./components/Auth/CollegeSignup";
import AlumniSignup from "./components/Auth/AlumniSignup";
import Chat from "./components/Chat/Chat";
import AlumniEventCreate from "./components/Event/AlumniEventCreate";
import Events from "./components/Event/Events";
import Notifications from "./components/Notifications/Notifications";
import Jobs from "./components/Jobs/Jobs";
import JobFormPage from "./components/Jobs/JobFormPage";
import Explore from "./components/Explore/Explore";
import Connections from "./components/Connections/Connections"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/signup/student",
        element: <StudentSignup />,
      },
      {
        path: "/signup/college",
        element: <CollegeSignup />,
      },
      {
        path: "/signup/alumni",
        element: <AlumniSignup />,
      },
      {
        path: "/messaging",
        element: <Chat />,
      },
      {
        path: "/create-event",
        element: <AlumniEventCreate />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/notifications",
        element: <Notifications />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/create-jobs",
        element: <JobFormPage />,
      },
      {
        path: "/explore",
        element: <Explore />,
      },
      {
        path: "/chat",
        element: <Chat />,
      },
      {
        path: "/connections",
        element: <Connections />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

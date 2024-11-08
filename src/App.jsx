import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/Layout/RootLayout";
import Home from "./components/Home/Home";
import ErrorPage from "./components/Error/Error";
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import Chat from "./components/Chat/Chat"

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
        path: "/chat",
        element: <Chat />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

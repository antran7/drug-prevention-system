import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import Course from "./pages/Courses/Course";
import UserList from "./pages/User/UserList";
import AddUser from "./pages/User/AddUser";
import EditUser from "./pages/User/EditUser";
import CreateCourse from "./pages/Courses/CreateCourse";
import EditCourse from "./pages/Courses/EditCourse";
import LoginPage from "./pages/Auth/LoginPage";
import RegisterPage from "./pages/Auth/RegisterPage";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user") || sessionStorage.getItem("user");
  return user ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: '/course',
        element: (
          <ProtectedRoute>
            <Course />
          </ProtectedRoute>
        ),
      },
      {
        path: '/course/create',
        element: (
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        )
      },
      {
        path: '/course/edit/:id',
        element: (
          <ProtectedRoute>
            <EditCourse />
          </ProtectedRoute>
        )
      },
      {
        path: "/users",
        element: (
          <ProtectedRoute>
            <UserList />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/add",
        element: (
          <ProtectedRoute>
            <AddUser />
          </ProtectedRoute>
        ),
      },
      {
        path: "/users/:id/edit",
        element: (
          <ProtectedRoute>
            <EditUser />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

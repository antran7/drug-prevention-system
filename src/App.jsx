import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      }
    ],
  },
  // Them tương tự như này
  // {
  //   path: "login",
  //   element: <Login />,
  // }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

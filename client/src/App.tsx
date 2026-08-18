import logo from "./logo.svg";
import "./App.css";
import User from "./getuser/User";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./adduser/AddUser";
import UpdateUser from "./updateuser/UpdateUser";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <User />,
    },
    {
      path: "/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUser />,
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          height="50px"
          width="50px"
          className="App-logo"
          alt="logo"
        />
      </header>

      <>
        <RouterProvider router={route}></RouterProvider>
      </>
    </div>
  );
}

export default App;

import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page';
import "./App.scss";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      loader: () => redirect("/login"),
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "*",
      loader: () => redirect(`/login`),
    }
  ]);

  return (
    <div className="appContainer">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

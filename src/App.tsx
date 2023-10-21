import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page';
import "./App.scss";
import { CookiesProvider } from "react-cookie";

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
      <CookiesProvider>
        <RouterProvider router={router} />
      </CookiesProvider>
    </div>
  );
}

export default App;

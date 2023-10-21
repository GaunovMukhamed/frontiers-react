import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page';
import styles from "./App.module.scss";

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
    <div className={styles.mainContainer}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

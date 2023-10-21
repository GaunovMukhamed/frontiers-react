import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login-page/login-page';
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.mainContainer}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

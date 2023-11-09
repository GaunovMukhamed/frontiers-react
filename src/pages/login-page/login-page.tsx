import styles from "./login-page.module.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { SyntheticEvent, useState } from "react";
import { useCookies } from "react-cookie";
import useRequest from "../../hooks/useRequest";
import Spinner from "../../components/spinner/spinner";
import { RequestResult } from "../../models/general.models";
import axios from "axios";
        
const LoginPage = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [cookies, setCookie] = useCookies(["login", "password"]);
  const request = useRequest();

  const handleSubmit = async(event: SyntheticEvent): Promise<void> => {
    event.preventDefault();
    // setCookie("login", login, { path: "/" });
    // setCookie("password", password, { path: "/" });
    const formData = new FormData();
    formData.append('login', login);
    formData.append('password', password);  
    const data: RequestResult = await request('/authUser', formData, 'post');
  }

  return (
    <div className={styles.pageContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputText placeholder="Логин..." value={login} onChange={(e) => setLogin(e.target.value)} required />
        <Password placeholder="Пароль..." value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask required />
        <Button label="Войти" type="submit" />
      </form>
      {/* <Spinner></Spinner> */}
    </div>
  );
}

export default LoginPage;
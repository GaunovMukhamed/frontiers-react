import styles from "./login-page.module.scss";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { SyntheticEvent, useState } from "react";
        
const LoginPage = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: SyntheticEvent): void => {
    event.preventDefault();
    console.log(event)
  }

  return (
    <div className={styles.pageContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <InputText placeholder="Логин..." value={login} onChange={(e) => setLogin(e.target.value)} required />
        <Password placeholder="Пароль..." value={password} onChange={(e) => setPassword(e.target.value)} feedback={false} toggleMask required />
        <Button label="Войти" type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;
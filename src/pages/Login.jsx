import React, { useContext } from "react";
import MyButton from "../components/UL/button/MyButton";
import MyInput from "../components/UL/input/MyInput";
import { AuthContext } from "../context";

export default function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Страница для логина</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин"></MyInput>
        <MyInput type="password" placeholder="Введите пароль"></MyInput>
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
}

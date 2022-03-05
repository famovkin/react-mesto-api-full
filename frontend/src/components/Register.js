import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(password, email);
  };

  return (
    <div className="form-section">
      <div className="form-section__container">
        <form
          onSubmit={handleSubmit}
          className="form-section__form"
          name="sign-up"
        >
          <h2 className="form-section__title">Регистрация</h2>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-section__input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-section__input"
            type="password"
            name="password"
            placeholder="Пароль"
            required
          />
          <button className="form-section__button" type="submit">
            {isLoading ? "Загрузка..." : "Зарегистрироваться"}
          </button>
          <p className="form-section__text">
            Уже зарегистрированы?{" "}
            <Link className="form-section__link" to="/sign-in">
              Войти
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

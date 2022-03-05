import React, { useState } from "react";

function Login({ onSubmit, isLoading }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    onSubmit(password, email, setEmail, setPassword);
  };

  return (
    <div className="form-section">
      <div className="form-section__container">
        <form
          onSubmit={handleSubmit}
          className="form-section__form"
          name="sign-up"
        >
          <h2 className="form-section__title">Вход</h2>
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
            {isLoading ? "Загрузка..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

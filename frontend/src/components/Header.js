import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link, useHistory } from "react-router-dom";
import burger from "../images/burger.svg";
import close from "../images/close_icon.svg";

function Header({ email, linkText, path, loggedIn, setLoggedIn }) {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const history = useHistory();

  const signOut = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/sign-in");
  };

  return (
    <>
      {isBurgerOpen && (
        <div className="header__profile header__profile_type_burger">
          <p className="header__email header__email_type_burger">{email}</p>
          <button
            className="header__link header__link_type_burger"
            onClick={signOut}
          >
            {linkText}
          </button>
        </div>
      )}
      <header className="header page__header">
        <Link to="/">
          <img className="logo header__logo" src={logo} alt="Логотип Mesto" />
        </Link>
        {loggedIn ? (
          <>
            <div
              className={`header__profile ${
                loggedIn && "header__profile_type_logged"
              } `}
            >
              <p className="header__email">{email}</p>
              <button className="header__link" onClick={signOut}>
                {linkText}
              </button>
            </div>
            <img
              className="header__burger-button"
              onClick={() => setIsBurgerOpen((state) => !state)}
              src={isBurgerOpen ? close : burger}
              alt="Бургер меню"
            />
          </>
        ) : (
          <div className="header__profile">
            <Link className="header__link" to={path}>
              {linkText}
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;

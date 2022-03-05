import React, { useContext } from "react";
import editButton from "../images/edit_button.svg";
import addButton from "../images/add_button.svg";
import Card from "../components/Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className="profile page__profile">
        <div className="profile__info">
          <button
            className="profile__avatar-edit-button"
            onClick={props.onEditAvatar}
            type="button"
          >
            <img
              className="profile__avatar-image"
              src={currentUser.avatar}
              alt="Аватарка пользователя"
            />
          </button>
          <div className="profile__text">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              onClick={props.onEditProfile}
              type="button"
            >
              <img
                className="profile__edit-image"
                src={editButton}
                alt="Карандаш"
              />
            </button>
            <p className="profile__job">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          onClick={props.onAddPlace}
          type="button"
        >
          <img className="profile__add-image" src={addButton} alt="Плюс" />
        </button>
      </section>
      <section className="places page__places" aria-label="Блок с фотографиями">
        <ul className="places__cards">
          {props.cards.map((cardData) => (
            <Card
              key={cardData._id}
              card={cardData}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onBinClick={props.onBinClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

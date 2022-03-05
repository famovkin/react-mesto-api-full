import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `card__delete-button ${
    !isOwn && "card__delete-button_hidden"
  }`;
  const isLiked = props.card.likes.some((like) => like._id === currentUser._id);
  const cardLikeButtonClassName = `card__like-button ${
    isLiked && "card__like-button_type_liked"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleBinClick() {
    props.onBinClick(props.card);
  }

  return (
    <li className="card">
      <button
        onClick={handleBinClick}
        className={cardDeleteButtonClassName}
        type="button"
      ></button>
      <img
        className="card__image"
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
      />
      <div className="card__content">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
          ></button>
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;

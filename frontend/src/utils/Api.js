class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkServerResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Что-то пошло не так. Обратитесь к разработчику`);
  }

  getUserInfo(token) {
    return fetch(`${this._baseUrl}users/me`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  editUserInfo({ name, job }, token) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  getInitialCards(token) {
    return fetch(`${this._baseUrl}cards`, {
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    })
      .then((res) => this._checkServerResponse(res))
      .then((res) => {
        return res;
      });
  }

  deleteCard(cardId, token) {
    return fetch(`${this._baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
    }).then((res) => this._checkServerResponse(res));
  }

  changeLikeCardStatus(cardId, likeStatus, token) {
    if (likeStatus) {
      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: "PUT",
        headers: { ...this._headers, Authorization: `Bearer ${token}` },
      }).then((res) => this._checkServerResponse(res));
    } else {
      return fetch(`${this._baseUrl}cards/likes/${cardId}`, {
        method: "DELETE",
        headers: { ...this._headers, Authorization: `Bearer ${token}` },
      }).then((res) => this._checkServerResponse(res));
    }
  }

  addNewCard(newCard, token) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        name: newCard.name,
        link: newCard.link,
      }),
    }).then((res) => this._checkServerResponse(res));
  }

  updateProfileAvatar(newAvatarLink, token) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: { ...this._headers, Authorization: `Bearer ${token}` },
      body: JSON.stringify({
        avatar: newAvatarLink,
      }),
    }).then((res) => this._checkServerResponse(res));
  }
}

export const api = new Api({
  baseUrl: "http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
  },
});

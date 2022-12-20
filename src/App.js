import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
<body className="page">

<header className="header">
    <img className="header__logo" src="<%=require('./images/header-logo.svg')%>" alt="Логотип"/>
</header>

<main className="content">

    <section className="profile">
        <button className="profile__image-edit-button">
            <img src="#" className="profile__image" alt="Аватар пользователя"/>
          </button>
        <div className="profile__info">
            <div className="profile__person">
                <h1 className="profile__title">Жак-Ив Кусто</h1>
                <button aria-label="Редактировать" type="button" className="profile__edit-button" name="edit" value="edit"></button>
            </div>
            <p className="profile__subtitle">Исследователь океана</p>
        </div>
        <button aria-label="Добавить" type="button" className="profile__add-button" name="add"></button>
    </section>

    <section className="elements">
    </section>

</main>

<footer className="footer">
    <p className="footer__copyright">© 2020 Mesto Russia</p>
</footer>

<div className="popup popup_edit">
    <div className="popup__content">
        <button aria-label="Закрыть" id="editBtn" type="button" className="popup__close-button popup__close-button_edit"></button>
        <h2 className="popup__heading">Редактировать профиль</h2>
        <form id="userEditForm" name="formEdit" className="form" novalidate>
            <input type="text" className="popup__text popup__text_type_name" id="username" required placeholder = "Имя" name="username" minlength="2" maxlength="40"/>
            <span className="error"></span>
            <input type="text" className="popup__text popup__text_type_job" id="aboutname" required placeholder = "О себе" name="aboutname" minlength="2" maxlength="200"/>
            <span className="error"></span>
            <button disabled aria-label="Сохранить" id="save" className="popup__submit-button popup__submit-button_invalid" type="submit">Сохранить</button>
        </form>
    </div>
</div>

<div className="popup popup_add">
    <div className="popup__content">
        <button aria-label="Закрыть" type="button" className="popup__close-button popup__close-button_add"></button>
        <h2 className="popup__heading">Новое место</h2>
        <form id="cardCreateForm" name="formAdd" className="form" novalidate>
            <input type="text" className="popup__text popup__text_type_title" required id="place-name" placeholder= "Название" name="name" value="" minlength="2" maxlength="30"/>
            <span className="error"></span>
            <input type="url" className="popup__text popup__text_type_image" required id="place-img-link" placeholder = "Ссылка на картинку" name="link" value=""/>
            <span className="error"></span>
            <button disabled aria-label="Создать" id="create" className="popup__submit-button popup__submit-button_invalid" type="submit">Создать</button>
        </form>
    </div>
</div>

<div className="popup popup-visual popup_open-image">
    <div className="popup-visual__review">
        <button aria-label="Закрыть" type="button" className="popup__close-button"></button>
        <img src="#" alt="" className="popup-visual__image"/>
        <h2 className="popup-visual__text"></h2>
    </div>
</div>

<div className="popup popup_delete">
    <div className="popup__content">
        <button aria-label="Закрыть" id="editBtnDelete" type="button" className="popup__close-button popup__close-button_edit"></button>
        <h2 className="popup__heading">Вы уверены?</h2>
            <button aria-label="Сохранить" id="consent" className="popup__submit-button">Да</button>
    </div>
</div>

<div className="popup popup_edit-avatar">
    <div className="popup__content">
        <button aria-label="Закрыть" type="button" className="popup__close-button popup__close-button_add"></button>
        <h2 className="popup__heading">Обновить аватар</h2>
        <form id="editAvatarForm" name="formEditAvatar" className="form" novalidate>
            <input type="url" className="popup__text popup__text_type_image" required id="profile-avatar-link" placeholder = "Ссылка на картинку" name="avatar" value=""/>
            <span className="error"></span>
            <button disabled aria-label="Сохранить" id="saveAvatar" className="popup__submit-button popup__submit-button_invalid" type="submit">Сохранить</button>
        </form>
    </div>
</div>

<template id="template-element" >
    <div className="element">
        <img className="element__image" alt="name"/>
        <button type="button" className="element__delete-button hidden" name="delete" value="delete"></button>
        <div className=" element__info">
            <h2 className="element__title"></h2>
            <div className="element__container-likes">
            <button aria-label="Лайк" type="button" className="element__like-button" name="like"
            value="like"></button>
            <p className="element__sum-likes"></p>    
            </div>
        </div>
    </div>
</template>


</body>
  );
}

export default App;

import React from 'react';

function Main(props) {

    // const handleEditAvatarClick = (evt) => {
    //     document.querySelector('.popup_edit-avatar').classList.add('.popup_opened');
    // }
    // const handleEditProfileClick = (evt) => {
    //     document.querySelector('.popup_edit').classList.add('.popup_opened');
    // }
    // const handleAddPlaceClick = (evt) => {
    //     document.querySelector('.popup_add').classList.add('.popup_opened');
    // }

    return (
        <>
            <main className="content">

                <section className="profile">
                    <button onClick={props.onEditAvatar} className="profile__image-edit-button">
                        <img src="#" className="profile__image" alt="Аватар пользователя" />
                    </button>
                    <div className="profile__info">
                        <div className="profile__person">
                            <h1 className="profile__title">Жак-Ив Кусто</h1>
                            <button onClick={props.onEditProfile} aria-label="Редактировать" type="button" className="profile__edit-button" name="edit" value="edit"></button>
                        </div>
                        <p className="profile__subtitle">Исследователь океана</p>
                    </div>
                    <button onClick={props.onAddPlace} aria-label="Добавить" type="button" className="profile__add-button" name="add"></button>
                </section>

                <section className="elements">
                </section>

            </main>
        </>
    );
}

export default Main;

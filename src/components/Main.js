import React from 'react';
import Card from './Card';

function Main(props) {

    return (
        <>
            <main className="content">

                <section className="profile">
                    <button onClick={props.onEditAvatar} className="profile__image-edit-button">
                        <img src={props.userAvatar} className="profile__image" alt="Аватар пользователя" />
                    </button>
                    <div className="profile__info">
                        <div className="profile__person">
                            <h1 className="profile__title">{props.userName}</h1>
                            <button onClick={props.onEditProfile} aria-label="Редактировать" type="button" className="profile__edit-button" name="edit" value="edit"></button>
                        </div>
                        <p className="profile__subtitle">{props.userDescription}</p>
                    </div>
                    <button onClick={props.onAddPlace} aria-label="Добавить" type="button" className="profile__add-button" name="add"></button>
                </section>

                <section className="elements">
                </section>

            </main>

            <section className="card">
            {props.cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                ))}
            </section>
        </>
    );
}

export default Main;
